import React from 'react'
import { observer } from 'mobx-react';
import { Layout, Menu } from 'antd';
//store
import { useStore } from 'store';
//styles
import styles from './styles.module.scss'

const { Sider } = Layout
const { Item } = Menu

const CryptoSideBar: React.FC = observer(() => {
  const { cryptoStore } = useStore()

  const handleChange = (value: string) => {
    cryptoStore.clear()
    cryptoStore.getCryptoByID(value)
  }

  return (
        <div className={styles.crypto_side_bar}>
          {/* <h2>Popular pairs</h2> */}
          <div className={'sider_sidebar'}>
            <Sider width={300} style={{ margin: '0 !important' }} >
              <Menu mode="inline">
                {
                    cryptoStore.currencies.map((currency: string) => (
                      <Item key={currency} onClick={() => handleChange(currency)}>
                        <span>{currency}</span>
                      </Item>
                    ))
                  }
              </Menu>
            </Sider>
            </div>
        </div>
  )
})

export default CryptoSideBar