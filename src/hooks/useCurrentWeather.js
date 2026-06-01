import { useEffect, useState } from "react";
import { getApiWeather } from "../constants/api/ApiWeather";

export default function useCurrentWeather() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true)

                const response = await getApiWeather()

                setData(response)
            } catch (err) {
                setError(err.message || "Ошибка получения данных!")
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [])

    return { data, loading, error }
}