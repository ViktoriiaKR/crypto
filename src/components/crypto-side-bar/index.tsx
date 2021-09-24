import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import styles from './styles.module.scss'
import { useStore } from '../../store';
import { Select } from 'antd';

const { Option } = Select

const CryptoSideBar: React.FC = observer(() => {
  const { cryptoStore } = useStore()

  useEffect(() => {

  }, [cryptoStore.pastData])

  const handleChange = (value: string) => {
    cryptoStore.getCryptoByID(value)
  }

  return (
        <div className={styles.crypto_side_bar}>
          <h2>Popular pairs</h2>
        
           <Select defaultValue="choose" style={{ width: '100% '}} onChange={handleChange}>
             {
               cryptoStore.currencies.map((currency: string) => (
                 <Option value={currency}>{currency}</Option>
               ))
             }
          </Select>
         
          
        </div>
  )
})

export default CryptoSideBar