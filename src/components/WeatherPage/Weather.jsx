import React, { useEffect } from 'react'
import { getApiWeather } from '../api/ApiWeather'
import '../App/App.css'

export default function Weather({ getWeather, viewWeather }) {

  useEffect(() => {
    try {
      const fetchWeather = async () => { 
        const data = await getApiWeather()
        getWeather(data)
      }
      fetchWeather()
    } catch (error) {
      console.log("error");
    }
  }, [getWeather])

  console.log(viewWeather);

  const icon = viewWeather?.weather[0].icon;

  const WeatherCity = viewWeather && (
    <div key={viewWeather.id} className='generalWeather'>
      <h2>{viewWeather.name}</h2>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{Math.round(viewWeather.main.temp)}°C</p>
    </div>
  );

  return (
    <div className='BaseBox'>
      {WeatherCity}
    </div>
  )
}

