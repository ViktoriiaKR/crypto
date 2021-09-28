import { observable, action, makeObservable, runInAction } from 'mobx'
import { api } from 'utils/config'
import {formatOneCurrency} from 'utils/formatOneCurrency'
import {formatCandlestick} from 'utils/formatForCandlestick'
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
  @observable TEST: any = {}

  @action
    async getAllCrypto() {

    try {
      const { data } = await api.get(`https://api.pro.coinbase.com/products`)
   
      if (data) {
  
        let filtered = data.filter((pair: any) => {
          if (pair.quote_currency === "USD") {
            return pair;
          }
        });

        filtered = filtered.sort((a: any, b: any) => {
          if (a.base_currency < b.base_currency) {
            return -1;
          }
          if (a.base_currency > b.base_currency) {
            return 1;
          }
          return 0;
        });
       
        const currencyID = filtered.map((a: any) => a.id)
        runInAction(() => {
          this.currencies = currencyID
        })

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
        const res = formatCandlestick(data)

       console.log(res, 'resssss')
       
        runInAction(() => {
          this.dataCurrencyID = result
          this.TEST = res
        })
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
}
export default new Store()
