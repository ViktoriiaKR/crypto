// @ts-nocheck

import { observable, action, makeObservable, runInAction } from 'mobx'
import { api } from '../utils/config'
import {formatData} from './../utils/formatData'
import {formatOneCurrency} from './../utils/formatOneCurrency'

// const URL = "https://api.openweathermap.org/data/2.5/forecast?q="
// const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de'


// https://api.pro.coinbase.com/products/${id}/candles?granularity=86400

class Store {
  constructor() {
    makeObservable(this)
  }
  @observable cryptoData: any = []
  @observable compareData: any = []
  @observable loading: any = false
  @observable pastData: any = {}
  @observable dataCurrencyID: any = []
  @observable currencies: any = []

  @action
    async getAllCrypto() {

    try {
      const { data } = await api.get(`https://api.pro.coinbase.com/products`)
   
      if (data) {
  
        let filtered = data.filter((pair) => {
          if (pair.quote_currency === "USD") {
            return pair;
          }
        });

        filtered = filtered.sort((a, b) => {
          if (a.base_currency < b.base_currency) {
            return -1;
          }
          if (a.base_currency > b.base_currency) {
            return 1;
          }
          return 0;
        });
       
        const currencyID = filtered.map(a => a.id)
        runInAction(() => {
          this.currencies = currencyID
        })

        // const empty = []

        // for (let i = 0; i < currencyID.length; i++) {
        //   const response = await api.get(`https://api.pro.coinbase.com/products/${ADA-USD}/candles?granularity=86400`)
        //   empty.push(response.data) 
        //   // if (i + 1 === currencyID.length) {
        //   //   let formattedData = formatData(empty)
        //   //   // console.log(formattedData)
        //   // }
        // }

        // let compare = currencyID.reduce((o,c,i) => {o[c] = o[c] ? o[c] + ", " + empty[i]:empty[i]; return o;}, {})
    
        // let formattedData = formatData(compare)
     
        // runInAction(() => {
        //   this.pastData = formattedData
        //   this.cryptoData = filtered
        //   this.compareData = compare[0]
        // })
        this.cryptoData ? this.loading = true : this.loading = false
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
    async getCryptoByID(id: string) {
    try {
      const { data } = await api.get(`https://api.pro.coinbase.com/products/${id}/candles?granularity=86400`)
   console.log(data, 'data')
      if (data) {
        const result = formatOneCurrency(data)
        
        runInAction(() => {
          this.dataCurrencyID = result
        })
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
}
export default new Store()
