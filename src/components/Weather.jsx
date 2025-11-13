import React, { useEffect, useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("Kolkata");  // default city
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    const apiKey = "895a5d4b09f94e20bb392702251311";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Failed to fetch weather data.");
      setWeather(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(city); // fetch weather when component loads
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="weather-container">
      <h2>🌤️ Live Weather App</h2>

      <form onSubmit={handleSearch} className="weather-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}

      {weather && !loading && (
        <div className="weather-card">
          <h3>
            {weather.location.name}, {weather.location.country}
          </h3>
          <img
            src={weather.current.condition.icon}
            alt="weather"
            className="weather-icon"
          />
          <h4>{weather.current.condition.text}</h4>
          <p>🌡 Temperature: {weather.current.temp_c}°C</p>
          <p>💨 Wind Speed: {weather.current.wind_kph} kph</p>
          <p>💧 Humidity: {weather.current.humidity}%</p>
          <p>🕒 Local Time: {weather.location.localtime}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
