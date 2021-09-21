import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from '../../store'
import { observer } from 'mobx-react';
import styles from './styles.module.scss'

const WeatherChart: React.FC = observer(() => {
  const { weatherStore } = useStore()

  return (
        <div className={styles.weather_chart}>
          <ResponsiveContainer width={800} height={650}>
            <AreaChart
              width={500}
              height={400}
              data={weatherStore.weatherData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
  )
})

export default WeatherChart