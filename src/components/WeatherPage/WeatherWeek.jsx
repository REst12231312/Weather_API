import React, { useEffect } from 'react'
import { getApiWeekWeather } from '../api/ApiWeekWeather'
import '../App/App.css'

export default function WeatherWeek({ getWeatherWeek, viewWeatherWeek }) {

    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const data = await getApiWeekWeather()
                getWeatherWeek(data)
            }
            fetchWeather()
        } catch (error) {

        }
    }, [getWeatherWeek])

    console.log(viewWeatherWeek);


    const groupedWeather = viewWeatherWeek?.list?.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0]

        if (!acc[date]) {
            acc[date] = []
        }

        acc[date].push(item)

        return acc
    }, {})

    console.log(groupedWeather);
    

    const serchedWeather = Object.entries(groupedWeather || {}).map(([date, items]) => {
        const midday = items.find(i => i.dt_txt.includes("12:00:00") || items[Math.floor(items.length / 2) || items[0]])
        const icon = midday?.weather[0].icon

        return(
            <div key={date} className='cardWeaterWeek'>
                <h2>{date}</h2>
                <div className='descriptWeek'>
                    <p>{Math.floor(midday?.main.temp)}°C</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={midday?.weather.main} />
                </div>
            </div>
        )
    })

    return (
        <div className='boxWeek'>{serchedWeather}</div>
    )
}
