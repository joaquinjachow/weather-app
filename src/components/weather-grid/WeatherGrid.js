import React, { memo } from 'react';
import Image from 'next/image';

const WeatherGrid = memo(({ cities, onClose }) => {
  if (cities.length === 0) {
    return (
      <div className="grid w-full h-full mt-48 place-items-center">
        <div className="max-w-sm mx-4">
          <div className="mb-4 text-6xl">🔍</div>
          <h1 className="m-0 text-2xl">Busca tu ciudad!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cities.map(city => (
          <div
            key={city.id}
            className="p-4 transition-all duration-300 bg-white dark:bg-dark-secondary rounded-lg shadow-md dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-700"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-dark-text truncate">{city.name}</h3>
              <button
                onClick={() => onClose(city.id)}
                className="text-lg text-red-400 dark:text-red-500 transition-colors duration-200 hover:text-red-600 dark:hover:text-red-400"
                aria-label={`Eliminar ${city.name}`}
              >
                ×
              </button>
            </div>
            <div className="flex items-center mb-3 space-x-3">
              <div className="flex-shrink-0">
                <Image
                  src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                  width={50}
                  height={50}
                  alt={`Clima de ${city.name}`}
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-gray-800 dark:text-dark-text">{city.temp}°C</div>
                <div className="text-xs text-gray-600 dark:text-dark-text-secondary capitalize">{city.weather}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 text-center rounded bg-blue-50 dark:bg-blue-900/20">
                <div className="text-blue-600 dark:text-blue-400">💨</div>
                <div className="font-semibold text-gray-800 dark:text-dark-text">{city.wind} m/s</div>
              </div>
              <div className="p-2 text-center rounded bg-gray-50 dark:bg-gray-700/50">
                <div className="text-gray-600 dark:text-gray-400">☁️</div>
                <div className="font-semibold text-gray-800 dark:text-dark-text">{city.clouds}%</div>
              </div>
              <div className="p-2 text-center rounded bg-green-50 dark:bg-green-900/20">
                <div className="text-green-600 dark:text-green-400">📉</div>
                <div className="font-semibold text-gray-800 dark:text-dark-text">{city.min}°C</div>
              </div>
              <div className="p-2 text-center rounded bg-red-50 dark:bg-red-900/20">
                <div className="text-red-600 dark:text-red-400">📈</div>
                <div className="font-semibold text-gray-800 dark:text-dark-text">{city.max}°C</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-center text-gray-500 dark:text-dark-text-secondary">
              <span className="mr-2">Lat: {city.latitud?.toFixed(2)}°</span>
              <span>Lon: {city.longitud?.toFixed(2)}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

WeatherGrid.displayName = 'WeatherGrid';

export default WeatherGrid;