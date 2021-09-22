import React from 'react'
import { observer } from 'mobx-react';
import styles from './styles.module.scss'

const CryptoContent: React.FC = observer(() => {


  return (
        <div className={styles.crypto_content}>
          <h1>ETH - OMG</h1>
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
          </div>
          <div className={styles.chart}>
            chart
          </div>
          <div className={styles.gradient}>

          </div>
        </div>
  )
})

export default CryptoContent