// @ts-nocheck

import { observable, action, makeObservable, runInAction } from 'mobx'
import { api } from '../utils/config'

const URL = "https://api.openweathermap.org/data/2.5/forecast?q="
const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de'

class Store {
  constructor() {
    makeObservable(this)
  }
  @observable weatherData: any = []
  @observable loading = false

  @action
    async getWeather(city: string) {
    const empty = [] as any

    try {
      const { data } = await api.get(`${URL}${city}&appid=${API_KEY}`)
      if (data) {
        data.list.forEach((el:any) => {
          empty.push(
            {
              name: el.dt_txt,
              temperature: Math.round(el.main.temp-273)
            }
          )
        })
        runInAction(() => {
          this.weatherData = empty
          this.loading = true
        })
        
      }
    } catch (error) {
      console.log(error, 'error')
    }
    finally {
      this.loading = false
    }
  }

  @action
  async clearWeather() {
    this.weatherData = []
  }
}
export default new Store()
