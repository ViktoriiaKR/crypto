import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import ReactApexChart from 'react-apexcharts'
// components
import NoData from 'components/noData'
import DropDown from 'components/dropdown'
// store
import { useStore } from 'store'
//styles
import styles from './styles.module.scss'

const CryptoContent: React.FC = observer(() => {
  const { cryptoStore } = useStore()
  const [ checkSearch, setCheckSearch ] = useState(true)
  
  useEffect(() => {
    cryptoStore.candlelist.series === undefined ? setCheckSearch(true) : setCheckSearch(false)
  }, [cryptoStore.candlelist, cryptoStore.areaChartsList])

  return (
        <div className={styles.crypto_content}>
          {
            checkSearch ? 
              <div className={styles.noDataWrapper}>
                <h2>Select a currency from the list...</h2>
                <NoData />
              </div>  
              :
            <>
              {cryptoStore.currencyName && 
                <div className={styles.content_header}>
                  <h1>{cryptoStore.currencyName}</h1>
                  <DropDown />
                 </div>
              }
              <div>
                <div className={styles.chart}>
                  {cryptoStore.switchingCharts && cryptoStore.candlelist.series !== undefined && <ReactApexChart options={cryptoStore.candlelist.options} series={cryptoStore.candlelist.series} type="candlestick" height={350} />}
                  {!cryptoStore.switchingCharts && cryptoStore.areaChartsList.series !== undefined && <ReactApexChart options={cryptoStore.areaChartsList.options} series={cryptoStore.areaChartsList.series} type="area" height={350} />}
                </div>
                </div>
            </>
          }
        </div>
  )
})

export default CryptoContent