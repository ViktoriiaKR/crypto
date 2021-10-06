import { observable, action, makeObservable, runInAction } from 'mobx'
import { api } from 'utils/config'
import {formatCandlestick} from 'utils/formatForCandlestick'
import _ from 'lodash'
class Store {
  constructor() {
    makeObservable(this)
  }
  @observable cryptoData: any = []
  @observable loading: any = false
  @observable currencies: any = []
  @observable candlelist: any = {}
  @observable currencyName: string = ''
  @observable areaChartsList: any = {}
  @observable switchingCharts: boolean = true

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
      if (data) {
        const res = formatCandlestick(data)
       console.log(res,'kkkkkkkkkkkkk')
        runInAction(() => {
          this.currencyName = id
          this.candlelist = res
          this.switchingCharts = true
        })
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async getCryptoByPeriod(period: number) {
    let newObj = _.cloneDeep(this.candlelist)
    let lengthValues = this.candlelist.series[0].data.length
    if (lengthValues >= period) {
      const res = newObj.series[0].data.slice(-period)
      newObj.series[0].data = res
    } else {
      alert(`По данной валюте доступно всего - ${lengthValues} точек (максимальное количество), выберите меньший интервал`)
    }
    runInAction(() => {
      this.areaChartsList = newObj
      this.switchingCharts = false
    })
  }

  @action
  async clear() {
    runInAction(() => {
      this.switchingCharts = false
    })
  }
}
export default new Store()
