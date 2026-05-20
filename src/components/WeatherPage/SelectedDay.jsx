import React, { useState } from 'react'

export default function SelectedDay({ currentWeather, closeWindow, currentDay }) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const visableCount = 3;

    if (!currentWeather) return null



    const { date, items, midday } = currentWeather
    const icon = midday?.weather[0].icon;
    console.log(items);

    const nextSlide = () => {
        if (currentSlide < items.length - visableCount) {
            setCurrentSlide(prev => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1)
        }
    }


    const handleClose = () => {
        closeWindow(false)
        currentDay(null)
    }

    const WeatherDay = items.map(item => {
        const timeDate = item.dt_txt.split(' ')[1].slice(0, 5)
        return (
            <div className='cardWeather' key={item.dt} style={{ minWidth: `calc(100% / ${visableCount})` }}>
                <div className='cardContent'>
                    <h2>{timeDate}</h2>
                    <div>
                        <p>{Math.round(item.main.temp)}°C</p>
                        <span>{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='blockWeather'>
            <button onClick={handleClose} className="backMenu">Вернуться на главную</button>
            {/* <div className='weatherContent'>
                <div className='weatherDate'>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                    <h2>{date}</h2>
                </div>
                <div className='carouselWrapper'>
                    <button onClick={prevSlide}>◀</button>

                    <div className='carouselViewport'>
                        <div
                            className='carouselTrack'
                            style={{
                                display: 'flex',
                                transition: 'transform 0.3s ease',
                                transform: `translateX(-${currentSlide * (100 / items.length)}%)`
                            }}
                        >
                            {WeatherDay}
                        </div>
                    </div>
                    <button onClick={nextSlide}>▶</button>
                </div>
            </div> */}
            <div>{WeatherDay}</div>
        </div>
    )
}
