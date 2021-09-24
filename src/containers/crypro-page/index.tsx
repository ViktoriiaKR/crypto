import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { observer } from 'mobx-react';
import Header from '../../components/header';
import CryptoSideBar from '../../components/crypto-side-bar';
import CryptoContent from '../../components/crypto-content';
import { useStore } from '../../store';
import { Spin } from 'antd';

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