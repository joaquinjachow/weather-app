import React, { memo } from 'react';

const WeatherStatsCompact = memo(({ wind, clouds, latitud, longitud, weather, temp }) => {
  const getWeatherIcon = (weatherType) => {
    const icons = {
      'Clear': '☀️',
      'Clouds': '☁️',
      'Rain': '🌧️',
      'Snow': '❄️',
      'Thunderstorm': '⛈️',
      'Drizzle': '🌦️',
      'Mist': '🌫️',
      'Smoke': '💨',
      'Haze': '🌫️',
      'Dust': '💨',
      'Fog': '🌫️',
      'Sand': '💨',
      'Ash': '💨',
      'Squall': '💨',
      'Tornado': '🌪️'
    };
    return icons[weatherType] || '🌤️';
  };

  return (
    <div className="w-full">
      <hr className="mb-3 border-gray-200 dark:border-gray-600" />
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="p-2 transition-colors duration-200 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30">
          <div className="mb-1 text-lg">💨</div>
          <p className="text-xs font-semibold text-gray-800 dark:text-dark-text">{wind}</p>
          <p className="text-xs text-gray-500 dark:text-dark-text-secondary">m/s</p>
        </div>
        <div className="p-2 transition-colors duration-200 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700/70">
          <div className="mb-1 text-lg">☁️</div>
          <p className="text-xs font-semibold text-gray-800 dark:text-dark-text">{clouds}</p>
          <p className="text-xs text-gray-500 dark:text-dark-text-secondary">%</p>
        </div>
        <div className="p-2 transition-colors duration-200 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30">
          <div className="mb-1 text-lg">📍</div>
          <p className="text-xs text-gray-500 dark:text-dark-text-secondary">GPS</p>
        </div>
        <div className="p-2 transition-colors duration-200 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30">
          <div className="mb-1 text-lg">{getWeatherIcon(weather)}</div>
          <p className="text-xs text-gray-500 dark:text-dark-text-secondary">Clima</p>
        </div>
      </div>
      <div className="mt-2 text-xs text-center text-gray-500 dark:text-dark-text-secondary">
        <span className="mr-3">Lat: {latitud?.toFixed(3)}°</span>
        <span>Lon: {longitud?.toFixed(3)}°</span>
      </div>
    </div>
  );
});

WeatherStatsCompact.displayName = 'WeatherStatsCompact';

export default WeatherStatsCompact;