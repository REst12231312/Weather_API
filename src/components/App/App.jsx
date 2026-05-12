import React, { useState } from 'react'
import Weather from '../WeatherPage/Weather'
import WeatherWeek from '../WeatherPage/WeatherWeek'

export default function App() {

  const [weather, setWeather] = useState(null)
  const [weatherArr, setWeatherArr] = useState([])

  return (
    <div className='app'>
      <Weather getWeather = {setWeather} viewWeather = {weather}/>
      <WeatherWeek getWeatherWeek = {setWeatherArr} viewWeatherWeek = {weatherArr}/>
    </div>
  )
}
