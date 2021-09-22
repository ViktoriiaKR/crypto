// @ts-nocheck

import { observable, action, makeObservable, runInAction } from 'mobx'
import { api } from '../utils/config'
import {formatData} from './../utils/formatData'

// const URL = "https://api.openweathermap.org/data/2.5/forecast?q="
// const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de'


// https://api.pro.coinbase.com/products/${id}/candles?granularity=86400

class Store {
  constructor() {
    makeObservable(this)
  }
  @observable cryptoData: any = []
  @observable compareData: any = []

  @action
    async getCrypto() {

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

        const empty = []

        for (let i = 0; i < currencyID.length; i++) {
          const response = await api.get(`https://api.pro.coinbase.com/products/${currencyID[i]}/candles?granularity=86400`)
          console.log(response, 'response')
         
  
          empty.push(response.data) 
        let formattedData = formatData(empty);
        //  console.log(empty, '000')
          console.log(formattedData)
        }

        let compare = currencyID.reduce((o,c,i) => {o[c] = o[c] ? o[c] + ", " + empty[i]:empty[i]; return o;}, {})
        console.log(compare);
        runInAction(() => {
          this.cryptoData = filtered
          this.compareData = compare[0]
        })
  
          
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
}
export default new Store()
