import { CalendarDays, CloudSun, Droplets, Sun } from 'lucide-react'

function formatDay(date, index) {
  if (index === 0) return 'Today'

  return new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
    weekday: 'short',
  })
}

function Cards({ forecast = [] }) {
  return (
    <section className="forecast-section" id="forecast">
      {/* The heading introduces the five-day forecast for the searched city. */}
      <div className="section-heading">
        <div>
          <span className="section-kicker">PLAN AHEAD</span>
          <h2>Coming up this week</h2>
        </div>
        <span className="forecast-range">
          <CalendarDays size={16} />
          5 day forecast
        </span>
      </div>

      {/* These cards group daily conditions and high and low temperatures. */}
      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <article className={`forecast-card${index === 0 ? ' forecast-card-today' : ''}`} key={day.date}>
            <div className="forecast-card-top">
              <span className="forecast-day">{formatDay(day.date, index)}</span>
              {index === 0 && <span className="today-dot" aria-label="Today" />}
            </div>
            <span className="forecast-date">
              {new Date(`${day.date}T12:00:00`).toLocaleDateString(undefined, {
                day: 'numeric',
                month: 'short',
              })}
            </span>
            <div className="forecast-icon">
              {day.day.condition.icon ? (
                <img
                  src={`https:${day.day.condition.icon}`}
                  alt={day.day.condition.text}
                />
              ) : (
                <CloudSun size={40} />
              )}
            </div>
            <p className="forecast-condition">{day.day.condition.text}</p>
            <div className="forecast-temps">
              <strong>{Math.round(day.day.maxtemp_c)}°</strong>
              <span>{Math.round(day.day.mintemp_c)}°</span>
            </div>
            <span className="rain-chance">
              <Droplets size={13} />
              {day.day.daily_chance_of_rain}%
            </span>
          </article>
        ))}
        {forecast.length === 0 && (
          <div className="forecast-empty">
            <Sun size={21} />
            <span>Forecast cards will appear when weather loads.</span>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cards
