import { useEffect, useState } from "react";
import { getApiWeekWeather } from "../constants/api/ApiWeather";

function useForecastWeather() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true)

                const response = await getApiWeekWeather()

                setData(response)
            } catch (error) {
                console.log("Ошибка загрузки данных", error);
            } finally {
                setLoading(false)
            }
        }
        fetchWeather()
    }, [])

    return { data, loading }
}