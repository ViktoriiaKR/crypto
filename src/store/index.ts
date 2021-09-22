import { createContext, useContext } from 'react'
import { configure, makeObservable, observable } from 'mobx'

import cryptoStore from './crypto'

configure({ enforceActions: 'observed' })

class RootStore {
  @observable cryptoStore = cryptoStore

  constructor() {
    makeObservable(this)
  }
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default new RootStore()
