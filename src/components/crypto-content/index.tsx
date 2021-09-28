import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import styles from './styles.module.scss'
import { useStore } from '../../store';
import Charts from 'components/chart';

const CryptoContent: React.FC = observer(() => {
  const { cryptoStore } = useStore()

  useEffect(() => {

  }, [cryptoStore.dataCurrencyID])

  return (
        <div className={styles.crypto_content}>
          {/* <h1>ETH - OMG</h1>
          <div className={styles.gradient}>
            <table>
              <thead>
                <tr>
                  <td>Last trade price</td>
                  <td>24 hour price</td>
                  <td>24 hour volume</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.0016 ETH</td>
                  <td>2.32%</td>
                  <td>42 OMG</td>
                </tr>
              </tbody>
            </table>
          </div> */}
          <div className={styles.chart}>
            {/* {<Dashboard data={cryptoStore.dataCurrencyID} />} */}
            <Charts />
          </div>
        </div>
  )
})

export default CryptoContent