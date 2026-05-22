import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Weather from '../WeatherPage/Weather'
import WeatherWeek from '../WeatherPage/WeatherWeek'
import Header from '../Navigation/Header'

export default function App() {

  const [weather, setWeather] = useState(null)
  const [weatherArr, setWeatherArr] = useState([])

  if(!weather && !weatherArr) return null;

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Weather getWeather={setWeather} viewWeather={weather} />} />
        <Route path='/forecast' element={<WeatherWeek getWeatherWeek={setWeatherArr} viewWeatherWeek={weatherArr} />} />
        <Route path='/favorites' />
      </Routes>
    </div>
  )
}
