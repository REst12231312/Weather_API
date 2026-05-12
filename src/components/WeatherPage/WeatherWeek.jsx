import React, { useEffect } from 'react'
import { getApiWeekWeather } from '../api/ApiWeekWeather'

export default function WeatherWeek({getWeatherWeek, viewWeatherWeek}) {

    useEffect(() => {
        try {
            const fetchWeather = async () => { 
                const data = await getApiWeekWeather()
            }
        } catch (error) {

        }
    }, [])
    return (
        <div>WeatherWeek</div>
    )
}
