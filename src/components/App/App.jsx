import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Navigation/Header'
import WeatherWeek from '../WeatherPage/WeatherWeek'
import '../App/App.css'
import HomePage from '../../pages/HomePage'


export default function App() {

  const [weatherArr, setWeatherArr] = useState([])

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/forecast' element={<WeatherWeek getWeatherWeek={setWeatherArr} viewWeatherWeek={weatherArr} />} />
        <Route path='/favorites' />
      </Routes>
    </div>
  )
}
