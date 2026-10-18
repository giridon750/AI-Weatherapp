import {
  ArrowUpRight,
  CloudSun,
  Droplets,
  MapPin,
  Search,
  Thermometer,
  Wind,
} from 'lucide-react'

function getLocalTime(localTime) {
  if (!localTime) return ''

  return new Date(localTime.replace(' ', 'T')).toLocaleString(undefined, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

function HeroSection({
  cityInput,
  onCityInputChange,
  onSearch,
  weather,
  loading,
  error,
}) {
  const location = weather?.location
  const current = weather?.current
  const conditionIcon = current?.condition?.icon

  return (
    <section className="hero-layout" aria-label="City weather">
      {/* The introduction and search form help users look up a city. */}
      <div className="hero-intro">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          YOUR DAILY WEATHER, REIMAGINED
        </div>
        <h1>
          A little more
          <br />
          <span>sunshine</span> in your day.
        </h1>
        <p className="hero-description">
          Clear, thoughtful forecasts to help you feel ready for whatever the
          day brings.
        </p>

        {/* The form keeps city lookup easy to use on every screen size. */}
        <form className="search-form" onSubmit={onSearch}>
          <Search className="search-icon" size={19} aria-hidden="true" />
          <input
            aria-label="Search for a city"
            value={cityInput}
            onChange={(event) => onCityInputChange(event.target.value)}
            placeholder="Search any city..."
          />
          <button type="submit" aria-label="Search weather">
            <ArrowUpRight size={19} />
          </button>
        </form>
        <p className="search-hint">Try a city name, like Tokyo or London</p>
        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}
      </div>

      {/* This weather card presents live conditions and key measurements. */}
      <div className="current-card">
        <div className="weather-card-glow" aria-hidden="true" />
        <div className="current-card-top">
          <div>
            <div className="location-name">
              <MapPin size={16} />
              <span>{location?.name ?? (loading ? 'Finding your city' : 'Search a city')}</span>
            </div>
            <p className="location-region">
              {location
                ? [location.region, location.country].filter(Boolean).join(', ')
                : 'Your local forecast, at a glance'}
            </p>
          </div>
          <span className="today-pill">{getLocalTime(location?.localtime) || 'TODAY'}</span>
        </div>

        <div className="temperature-row">
          <div className="temperature-copy">
            <span className="temperature">
              {current ? Math.round(current.temp_c) : '--'}
              <sup>°</sup>
            </span>
            <span className="condition-text">
              {current?.condition?.text ?? (loading ? 'Loading conditions' : 'No conditions yet')}
            </span>
            {current && (
              <span className="feels-like">
                Feels like {Math.round(current.feelslike_c)}°
              </span>
            )}
          </div>
          <div className="weather-art" aria-hidden="true">
            {conditionIcon ? (
              <img src={`https:${conditionIcon}`} alt="" />
            ) : (
              <CloudSun size={88} strokeWidth={1.15} />
            )}
          </div>
        </div>

        {/* This box groups humidity, wind, and feels-like details. */}
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-icon detail-blue">
              <Droplets size={17} />
            </span>
            <span>
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{current ? `${current.humidity}%` : '--'}</span>
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-icon detail-gold">
              <Wind size={17} />
            </span>
            <span>
              <span className="detail-label">Wind</span>
              <span className="detail-value">
                {current ? `${Math.round(current.wind_kph)} km/h` : '--'}
              </span>
            </span>
          </div>
          <div className="detail-item">
            <span className="detail-icon detail-coral">
              <Thermometer size={17} />
            </span>
            <span>
              <span className="detail-label">Feels like</span>
              <span className="detail-value">
                {current ? `${Math.round(current.feelslike_c)}°` : '--'}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
