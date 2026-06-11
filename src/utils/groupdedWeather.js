export default function groupdedWeather(forecastList) {

    if (!Array.isArray(forecastList)) return []

    const groupded = forecastList.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[0]

        if (!acc[date]) {
            acc[date] = []
        }

        acc[date].push(item)

        return acc
    }, {})

    return Object.entries(groupded).map(([date, items]) => {
        const midday = items.find(i => i.dt_txt.includes("12:00:00")) || items[Math.floor(items.length / 2) || items[0]]

        return { date, midday, items }
    })
}