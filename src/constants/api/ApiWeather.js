export const getApiWeather = async () => {
    const API_KEY = "d6c61bc3bb842db769b77c72a4684c11"

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=52.28&lon=76.96&appid=${API_KEY}&units=metric`
    )

    if (!res.ok) {
        throw new Error("Error")
    }

    return res.json()
}


export const getApiWeekWeather = async () => {

    const API_KEY = "d6c61bc3bb842db769b77c72a4684c11"

    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=52.28&lon=76.96&appid=${API_KEY}&units=metric`
    )

    if (!res.ok) {
        throw new Error('Error')
    }
    return res.json()
}

export const getCityCoords = async (city) => {
    const API_KEY = "d6c61bc3bb842db769b77c72a4684c11"

    const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    )

    if (!res.ok) {
        throw new Error('Error')
    }

    return res.json()
}