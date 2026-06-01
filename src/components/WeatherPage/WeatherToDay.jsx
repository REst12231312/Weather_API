import React from 'react'
import useCurrentWeather from '../../hooks/useCurrentWeather'
import Loader from '../Common/Loader'
import ErrorMessage from '../Common/ErrorMessage'

export default function WeatherTODay() {

  const { data, loading, error } = useCurrentWeather()

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  if (!data) {
    return null
  }

  console.log(data);


  return (
    <div style={{ marginRight: 0, width: "90%", height: "20%", display: "flex", backgroundColor:  " #edf1f9"}}>
      <div className='currentWeather' style={{ width: "100%", height: "100%", display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
        <div className='currentCity' style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <h1>{data.name}</h1>
          <div className='mainWeather'>
            <h1>{Math.round(data.main.temp)}°C</h1>
            <p>{data.weather[0].description}</p>
            <p>Feels like {Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>
        <div className='weatherDesc' style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <p>Wind: {data.wind.speed} km/h</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Visibility: {(data.visibility / 1000).toFixed(1)} km</p>
        </div>
      </div>
    </div>
  )
}

