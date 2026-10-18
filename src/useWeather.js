import { useEffect, useState } from 'react'
import axios from 'axios'

const API_KEY = '28f86e0b849140eabef123225261710'

export function useWeather(city) {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadWeather() {
      setLoading(true)
      setError('')
      setWeather(null)
      setForecast([])

      try {
        const response = await axios.get(
          'https://api.weatherapi.com/v1/forecast.json',
          {
            params: { key: API_KEY, q: city, days: 5 },
            signal: controller.signal,
          },
        )

        setWeather(response.data)
        setForecast(response.data.forecast.forecastday)
      } catch (requestError) {
        if (axios.isCancel(requestError)) {
          return
        }

        setError(
          requestError.response?.data?.error?.message ??
            'Weather could not be loaded. Please check the city and try again.',
        )
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadWeather()

    return () => controller.abort()
  }, [city])

  return { weather, forecast, loading, error }
}
