import React from 'react'
import useForecastWeather from '../../hooks/useForecastWeather'
import Loader from '../Common/Loader'
import ErrorMessage from '../Common/ErrorMessage'
import groupdedWeather from '../../utils/groupdedWeather'
import './WeatherStyle/StyleHour.css'

export default function HourlyWeather() {

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

    const weekForecast = groupdedWeather(data?.list)

    if (!weekForecast.length) return null;

    const today = new Date().toISOString().split("T")[0];

    const todayForecast = weekForecast.find(
        day => day.date === today
    )

    console.log(todayForecast);


    return (
        <div className='baseHour'>
            <div className='hourlyCard'>
                {todayForecast.items.map((item) => {
                    const icon = item?.weather?.[0]?.icon;

                    return (
                        <div key={item?.dt} className="cardWeatherHourly">
                            <h2>{item.dt_txt.split(" ")[1].slice(0, 5)}</h2>

                            <div className="descriptHour">
                                <img
                                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                    alt=""
                                />
                                <p>
                                    {Math.round(item.main?.temp)}°C
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
