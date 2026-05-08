import React, { useState } from 'react'
import Weather from '../WeatherPage/Weather'

export default function App() {

  const [weather, setWeather] = useState(null)

  return (
    <div className='app'>
      <Weather getWeather = {setWeather} viewWeather = {weather}/>
    </div>
  )
}
