import React, { useEffect } from 'react'
import styles from './styles.module.scss'
import { observer } from 'mobx-react';
import Header from '../../components/header';
import CryptoSideBar from '../../components/crypto-side-bar';
import CryptoContent from '../../components/crypto-content';

const WeatherPage: React.FC = observer(() => {

  
  useEffect(() => {


  }, [])

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CryptoSideBar />
        <CryptoContent />
      </div>
    </>
  )
})

export default WeatherPage