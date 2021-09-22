import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import styles from './styles.module.scss'
import { useStore } from '../../store';

const CryptoSideBar: React.FC = observer(() => {
  const { cryptoStore } = useStore()

  useEffect(() => {
   cryptoStore.getCrypto()

    // cryptoStore.cryptoData.forEach((element: any) => {
    //   console.log('l')
    //   cryptoStore.getCryptoByID(element.id)
    // })
  }, [cryptoStore])

  return (
        <div className={styles.crypto_side_bar}>
          <h2>Popular pairs</h2>
          
             <ul>
              {cryptoStore.cryptoData.map((el: any) => (<li>
                <div>
                  <p>{el.id}</p>
                  {/* <p>{`$${price}`}</p> */}
                </div>
              </li> )) }
            </ul>
           
         
          
        </div>
  )
})

export default CryptoSideBar