import React, { useState } from 'react'
import Weather from '../WeatherPage/Weather'
import WeatherWeek from '../WeatherPage/WeatherWeek'
import Header from '../Navigation/Header'
import { Routes, Route } from 'react-router-dom'

export default function App() {

  const [weather, setWeather] = useState(null)
  const [weatherArr, setWeatherArr] = useState([])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Weather getWeather={setWeather} viewWeather={weather} />} />
        <Route path='/favorites' />
        <Route path='/favorites' />
      </Routes>
      <WeatherWeek getWeatherWeek={setWeatherArr} viewWeatherWeek={weatherArr} />
    </div>
  )
}
