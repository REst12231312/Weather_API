import React, { useEffect, useState } from 'react'
import useForecastWeather from '../../hooks/useForecastWeather'
import Loader from '../Common/Loader'
import ErrorMessage from '../Common/ErrorMessage'
import groupdedWeather from '../../utils/groupdedWeather'
import './WeatherStyle/StyleWeek.css'


export default function WeatherWeek() {

    const { data, loading, error } = useForecastWeather()

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

    const forecastWeather = groupdedWeather(data?.list)

    if (!forecastWeather.length) return null;

    return (
        <div className="weatherWeek">
            {forecastWeather.map(({ date, midday }) => {
                const icon = midday?.weather?.[0]?.icon;

                return (
                    <div key={date} className="cardWeatherWeek">
                        <h2>{date}</h2>

                        <div className="descriptWeek">
                            <p>
                                {Math.round(midday?.main?.temp)}°C
                            </p>

                            <img
                                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                alt=""
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
