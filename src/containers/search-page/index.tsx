import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/search-bar'
import WeatherChart from '../../components/weather-chart'
import { Empty, Spin } from 'antd';
import styles from './styles.module.scss'
import { useStore } from '../../store';
import { observer } from 'mobx-react';

const WeatherPage: React.FC = observer(() => {
  const { weatherStore } = useStore()
  
  useEffect(() => {
  console.log(weatherStore.loading, 'weatherStore.loading')

  }, [weatherStore.loading])

  return (
    <div className={styles.weather_page}>
      <SearchBar />
      <div className={styles.content}>
      {weatherStore.loading ? (
          <Spin />
        ) : weatherStore.weatherData.length ? (
            <WeatherChart />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  )
})

export default WeatherPage