import React, { useEffect } from 'react'
import { getApiWeekWeather } from '../api/ApiWeekWeather'

export default function WeatherWeek({ getWeatherWeek, viewWeatherWeek }) {

    useEffect(() => {
        try {
            const fetchWeather = async () => {
                const data = await getApiWeekWeather()
                getWeatherWeek(prev => [...prev, data])
            }
            fetchWeather()
        } catch (error) {
            console.log('error');
        }
    }, [getWeatherWeek])

    console.log(viewWeatherWeek);

    return (
        <div>WeatherWeek</div>
    )
}
