import React, { useState, memo } from 'react';
import Image from 'next/image';
import WeatherStatsCompact from '../weather-stats/WeatherStatsCompact';

const Card = memo(({ min, max, name, img, onClose, temp, wind, weather, clouds, latitud, longitud }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card-expandable card-hover flex flex-col items-center justify-center w-full max-w-xs p-4 my-4 font-medium bg-white rounded-md shadow-lg shadow-slate-500 hover:scale-105 hover:shadow-xl ${isExpanded ? 'max-w-sm' : ''}`}>
      <div className="flex items-center justify-between w-full mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <button
          onClick={onClose}
          className="text-2xl text-red-400 transition-colors duration-300 ease-in-out hover:text-red-600"
          aria-label={`Eliminar ${name}`}
        >
          ×
        </button>
      </div>
      <div className="grid m-4 bg-gray-900 rounded-full shadow-lg place-items-center shadow-gray-300">
        <Image
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          width={100}
          height={100}
          alt={`Clima de ${name}`}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="mb-3 text-center">
        <span className="text-4xl font-bold text-gray-800">{temp}°C</span>
        <p className="text-sm text-gray-600 capitalize">{weather}</p>
      </div>
      <div className="flex justify-center mb-3 space-x-4">
        <div className="text-center">
          <span className="text-sm text-gray-500">Mín</span>
          <p className="text-lg font-semibold text-blue-600">{min}°C</p>
        </div>
        <div className="text-center">
          <span className="text-sm text-gray-500">Máx</span>
          <p className="text-lg font-semibold text-red-600">{max}°C</p>
        </div>
      </div>
      <button
        onClick={toggleExpansion}
        className="flex items-center px-4 py-2 space-x-2 text-sm text-blue-600 transition-all duration-300 rounded-lg expand-button hover:text-blue-800 hover:bg-blue-50"
        aria-label={isExpanded ? "Mostrar menos información" : "Mostrar más información"}
      >
        <span>{isExpanded ? "Mostrar menos" : "Más detalles"}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`expanded-content w-full mt-3 ${isExpanded ? 'animate-slideDown' : 'animate-slideUp'}`}>
        {isExpanded && (
          <WeatherStatsCompact
            wind={wind}
            clouds={clouds}
            latitud={latitud}
            longitud={longitud}
            weather={weather}
            temp={temp}
          />
        )}
      </div>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;