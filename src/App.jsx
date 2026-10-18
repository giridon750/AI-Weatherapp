import { useState } from 'react'
import Navbar from './components.jsx/Navbar'
import HeroSection from './components.jsx/Hero_Section'
import Cards from './components.jsx/cards'
import Footer from './components.jsx/footer'
import { useWeather } from './useWeather'
import './App.css'

function App() {
  const [cityInput, setCityInput] = useState('Chennai')
  const [searchCity, setSearchCity] = useState('Chennai')
  const { weather, forecast, loading, error } = useWeather(searchCity)

  function handleSearch(event) {
    event.preventDefault()
    const nextCity = cityInput.trim()

    if (!nextCity) {
      return
    }

    setSearchCity(nextCity)
  }

  return (
    <div className="app-shell" id="top">
      {/* The navbar keeps the dashboard brand and section links together. */}
      <Navbar />

      <main className="dashboard">
        {/* The hero groups the city search with its live weather summary. */}
        <HeroSection
          cityInput={cityInput}
          onCityInputChange={setCityInput}
          onSearch={handleSearch}
          weather={weather}
          loading={loading}
          error={error}
        />

        {/* These cards show the five forecast days returned by the weather API. */}
        <Cards forecast={forecast} />

        {/* These cards share simple tips and useful weather context. */}
        <Footer />
      </main>
    </div>
  )
}

export default App
