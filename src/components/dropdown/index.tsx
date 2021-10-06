import React from 'react'
import { observer } from 'mobx-react'
import { Layout, Menu } from 'antd';
import cn from 'classnames'
// store
import { useStore } from 'store';
// styles
import styles from './styles.module.scss'

const { Sider } = Layout
const { Item } = Menu

const Period = [
    { 
        value: '3d',
        key: 3
    },
    { 
        value: '7d',
        key: 7
    },
    { 
        value: '2w',
        key: 14
    },
    { 
        value: '1m',
        key: 30
    },
]

const DropDown: React.FC = observer(() => {
  const { cryptoStore } = useStore()
  const DataLength = cryptoStore.candlelist.series[0].data.length
  
  const handleChange = (e: any, value: number) => {
    cryptoStore.clear()
    cryptoStore.getCryptoByPeriod(value)
    
  }

  return (
        <div className={styles.dropdown_wrap}>
            <div className={'sider_periodBar'}>
             <Sider width={300} style={{ margin: '0 !important' }} >
                <Menu mode="inline">
                    {Period.map(period => (
                        <Item className={cn({
                            [styles.off]: cryptoStore.switchingCharts,
                          })}
                           key={period.key} onClick={(e) => handleChange(e, period.key)}
                           disabled={DataLength >= period.key ? false : true}
                        >
                            <span>{period.value}</span>
                        </Item>
                    ))}
                </Menu>
            </Sider>
          </div>
        </div>
  )
})

export default DropDown
