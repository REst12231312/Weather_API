import React, { useState } from 'react'

export default function SelectedDay({ currentWeather, closeWindow, currentDay }) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const visableCount = 3;

    const nextSlide = () => {
        if (currentSlide + visableCount < items.length) {
            setCurrentSlide(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1)
        }
    }

    if (!currentWeather) return null

    const { date, items, midday } = currentWeather
    const icon = midday?.weather[0].icon;

    const handleClose = () => {
        closeWindow(false)
        currentDay(null)
    }

    const WeatherDay = items.map(item => {
        const timeDate = item.dt_txt.split(' ')[1].slice(0, 8)
        return (
            <div className='cardWeather' key={item.dt}>
                <div key={item.dt}>
                    <h2>{timeDate}</h2>
                    <div>
                        <p>{Math.round(item.main.temp)}°C</p>
                        <p>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='blockWeather'>
            <button onClick={handleClose} className="backMenu">Вернуться на главную</button>
            <div className='weatherContent'>
                <div className='weatherDate'>
                    <h2>{date}</h2>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                </div>
                <div className='carouselWrapper'>
                    <button onClick={prevSlide}>◀</button>

                    <div className='carouselViewport'>
                        <div
                            className='carouselTrack'
                            style={{
                                transform: `translateX(-${currentSlide * (100 / visableCount)}%)`
                            }}
                        >
                            {WeatherDay}
                        </div>
                    </div>

                    <button onClick={nextSlide}>▶</button>
                </div>
            </div>
        </div>
    )
}
