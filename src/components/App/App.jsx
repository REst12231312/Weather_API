import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Navigation/Header'
import WeatherToDay from '../WeatherPage/WeatherToDay'
import WeatherWeek from '../WeatherPage/WeatherWeek'
import '../App/App.css'


export default function App() {

  const [weatherArr, setWeatherArr] = useState([])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<WeatherToDay/>} />
        <Route path='/forecast' element={<WeatherWeek getWeatherWeek={setWeatherArr} viewWeatherWeek={weatherArr} />} />
        <Route path='/favorites' />
      </Routes>
    </div>
  )
}
