import WeatherCard from "./components/WeatherCard"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 py-10 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WeatherCard latitude={12.971599} longitude={77.594566} name="Bangalore" />
          <WeatherCard latitude={28.704060} longitude={77.102493} name="Delhi" />
          <WeatherCard latitude={34.018974} longitude={77.234206} name="Ladakh" />
          <WeatherCard latitude={-33.8688} longitude={151.2093} name="Sydney" />
          <WeatherCard latitude={48.8566} longitude={2.3522} name="Paris" />
          <WeatherCard latitude={55.7558} longitude={37.6173} name="Moscow" />
        </div>
      </div>
    </div>
  )
}

export default App


