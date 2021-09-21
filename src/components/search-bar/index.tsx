import React, { useState } from 'react'
import { observer } from 'mobx-react';
import { useStore } from '../../store';
//component
import { Button, Input } from 'antd';
//styles
import 'antd/dist/antd.css';
import styles from './styles.module.scss'

const SearchBar: React.FC = observer(() => {
  const { weatherStore } = useStore()
  const [city, setCity] = useState('')

  const onSearch = () => {
    weatherStore.clearWeather()
    city !== '' && weatherStore.getWeather(city)
  }

  return (
    <div className={styles.search_bar}>
      <Input placeholder="City name" value={city} onChange={e => setCity(e.target.value)} />
      <Button disabled={city ? false : true} className={styles.btn_search} onClick={onSearch} type="primary">Search</Button>
    </div>
  )
})

export default SearchBar