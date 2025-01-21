import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetcData = (latitude, longitude) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`

  useEffect(() => {
    if (!latitude || !longitude) return

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(url)
        console.log('API Response:', response.data)

        setWeatherData(response.data)
        setError(null)
      } catch (err) {
        setError("Failed to fetch weather data.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    };

    fetchWeatherData();
  }, [latitude, longitude])

  return { weatherData, loading, error }
};

export default useFetcData
