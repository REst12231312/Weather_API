import React from 'react'
import WeatherToDay from '../components/WeatherPage/WeatherToDay'
import WeatherWeek from '../components/WeatherPage/WeatherWeek'
import './HomeStyle.css'
import HourlyWeather from '../components/WeatherPage/HourlyWeather'

export default function HomePage() {
  return (
    <div className='HomeWeather'>
      <WeatherToDay/>
      <WeatherWeek/>
      <HourlyWeather/>
    </div>
  )
}
