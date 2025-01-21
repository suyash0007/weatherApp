import useFetcData from "../hooks/useFetchData"
import '../index.css'

const WeatherCard = ({ latitude, longitude, name }) => {
  
  const { weatherData, error, loading } = useFetcData(latitude, longitude)

  const getWeatherInfo = (weatherCode) => {
    if (weatherCode <= 3) return { icon: "☀️", description: "Clear", gradient: "from-yellow-300 to-orange-400" }
    if (weatherCode <= 49) return { icon: "☁️", description: "Cloudy", gradient: "from-gray-300 to-gray-400" }
    if (weatherCode <= 69) return { icon: "🌧️", description: "Rainy", gradient: "from-blue-300 to-blue-400" }
    if (weatherCode <= 79) return { icon: "🌨️", description: "Snowy", gradient: "from-blue-100 to-blue-200" }
    return { icon: "⛈️", description: "Stormy", gradient: "from-gray-600 to-gray-700" }
  }

  const formatDate = (dateString) => {
    const options = { weekday: "short", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }


  if (error) {
    return <div className="error-message">{error}</div>
  }

  
  if (loading) {
    return (
      <div className="loading-message">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  
  const currentTemp = weatherData.current_weather.temperature
  const currentWeatherCode = weatherData.daily.weathercode[3]
  const { icon, description, gradient } = getWeatherInfo(currentWeatherCode)

  return (
    
    
    <div
      className={`weather-card ${gradient}`}  
    >
      
      
      <h2 className="location">{name}</h2>
      <p className="weather-info">{description}</p>
      <div className="temperature-section">
        <div className="temperature-value">{Math.round(currentTemp)}°C</div>
        <div className="weather-icon">{icon}</div>
      </div>


      <div className="daily-forecast">
        {weatherData.daily.time.slice(1, 4).map((date, index) => {
          const { icon: dailyIcon } = getWeatherInfo(weatherData.daily.weathercode[index + 1])
          return (
            
            <div key={date} className="daily-item">
              <p className="daily-date">{formatDate(date)}</p>
              <div className="daily-icon">{dailyIcon}</div>
              <p className="daily-temp-range">
                {Math.round(weatherData.daily.temperature_2m_min[index + 1])}° to {" "}
                {Math.round(weatherData.daily.temperature_2m_max[index + 1])}°
              </p>
            
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default WeatherCard
