import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import styles from './styles.module.scss'
import { useStore } from '../../store';
import { Layout, Menu } from 'antd';
import cn from 'classnames'

const { Sider } = Layout
const { Item } = Menu

const CryptoSideBar: React.FC = observer(() => {
  const { cryptoStore } = useStore()

  const handleChange = (value: string) => {
    console.log(value, 'value')
    cryptoStore.getCryptoByID(value)
  }

  return (
        <div className={styles.crypto_side_bar}>
          <h2>Popular pairs</h2>
          <Sider width={300} style={{ margin: '0 !important' }} >
            <Menu
              className={cn({
                // [styles.menu]: true,
                'custom-menu': true,
              })}
              mode="inline"
            >
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
  )
})

export default CryptoSideBar