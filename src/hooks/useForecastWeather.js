import { useEffect, useState } from "react";
import { getApiWeekWeather } from "../constants/api/ApiWeather";

export default function useForecastWeather() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true)

                const response = await getApiWeekWeather()

                setData(response)
            } catch (err) {
                setError(err.message || "Ошибка загрузки данных")
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [])

    return { data, loading, error }
}