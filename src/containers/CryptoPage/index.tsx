import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
// components
import Header from 'components/header';
import CryptoSideBar from 'components/cryptoSideBar';
import CryptoContent from 'components/cryptoContent';
// store
import { useStore } from 'store';
import { Spin } from 'antd';
// styles
import styles from './styles.module.scss'

const WeatherPage: React.FC = observer(() => {
  const { cryptoStore } = useStore()
  
  useEffect(() => {
    cryptoStore.getAllCrypto()
  }, [cryptoStore])

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {cryptoStore.loading === false ?
          <div className={styles.wrapper_spin}>
            <Spin />
          </div> :
          <>
            <CryptoSideBar />
            <CryptoContent />
          </>
        }
        
      </div>
    </>
  )
})

export default WeatherPage