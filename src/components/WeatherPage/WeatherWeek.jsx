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

    const groupedWeather = viewWeatherWeek.list.reduce((acc, item) => {
        const date = item.dt_txt.splice(' ')[0]

        if (!acc[date]) {
            acc[date] = []
        }

        acc[date].push(item)

        return acc
    }, {})

    return (
        <div>WeatherWeek</div>
    )
}
