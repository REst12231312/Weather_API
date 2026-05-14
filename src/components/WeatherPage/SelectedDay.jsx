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
        const timeDate = item.dt_txt.split(' ').slice(0, 5)
        return (
            <div className='cardWeather' key={item.dt}>
                <div key={item.dt}>
                    <h2>{timeDate}</h2>
                    <div>
                        <p>{Math.round(item.main.temp)}</p>
                        <p>{Math.round(item.main.temp_min)}/{Math.round(item.main.temp_max)}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='selectedDay'>
            <button onClick={handleClose}>Вернуться на главную</button>
            <div className='weatherContent'>
                <div className='weatherDate'>
                    <h2>{date}</h2>
                    <p></p>
                </div>
                <div className='carousel'>
                    <button onClick={prevSlide}>назад</button>
                    <div className='carouselContent'>
                        <div className='carouselTrack' style={{
                            transform: `translateX(-${currentSlide * (100 / visableCount)}%)`
                        }}>
                            {WeatherDay}
                        </div>
                    </div>
                    <button onClick={nextSlide}>вперед</button>
                </div>
            </div>
        </div>
    )
}
