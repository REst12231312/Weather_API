import React, { useEffect } from 'react'
import { getApiWeekWeather } from '../api/ApiWeekWeather'

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

        return(
            <div key={date}>
                <h2>{date}</h2>
                <div>
                    <p>{Math.floor(midday?.main.temp)}°C</p>
                </div>
            </div>
        )
    })

    return (
        <div>{serchedWeather}</div>
    )
}
