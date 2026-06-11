import React from 'react'
import WeatherToDay from '../components/WeatherPage/WeatherToDay'
import WeatherWeek from '../components/WeatherPage/WeatherWeek'
import './HomeStyle.css'

export default function HomePage() {
  return (
    <div className='HomeWeather'>
      <WeatherToDay/>
      <WeatherWeek/>
    </div>
  )
}
