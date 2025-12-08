import React, { useState, memo } from 'react';

const WeatherStats = memo(({ wind, clouds, latitud, longitud, weather, temp }) => {
  const [activeTab, setActiveTab] = useState('wind');

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
  const getWindDescription = (windSpeed) => {
    if (windSpeed < 1) return 'Calma';
    if (windSpeed < 3) return 'Brisa ligera';
    if (windSpeed < 6) return 'Brisa suave';
    if (windSpeed < 10) return 'Brisa moderada';
    if (windSpeed < 15) return 'Viento moderado';
    if (windSpeed < 20) return 'Viento fuerte';
    return 'Viento muy fuerte';
  };
  const getCloudDescription = (cloudCover) => {
    if (cloudCover < 10) return 'Despejado';
    if (cloudCover < 25) return 'Pocas nubes';
    if (cloudCover < 50) return 'Nubes dispersas';
    if (cloudCover < 75) return 'Nublado parcial';
    if (cloudCover < 90) return 'Muy nublado';
    return 'Cubierto';
  };
  const tabs = [
    { id: 'wind', label: '💨', title: 'Viento' },
    { id: 'clouds', label: '☁️', title: 'Nubes' },
    { id: 'location', label: '📍', title: 'Ubicación' },
    { id: 'info', label: 'ℹ️', title: 'Info' }
  ];
  const renderTabContent = () => {
    switch (activeTab) {
      case 'wind':
        return (
          <div className="p-3 text-center">
            <div className="mb-2 text-2xl">💨</div>
            <p className="text-lg font-bold text-gray-800">{wind} m/s</p>
            <p className="text-xs text-gray-600">{getWindDescription(wind)}</p>
          </div>
        );
      case 'clouds':
        return (
          <div className="p-3 text-center">
            <div className="mb-2 text-2xl">☁️</div>
            <p className="text-lg font-bold text-gray-800">{clouds}%</p>
            <p className="text-xs text-gray-600">{getCloudDescription(clouds)}</p>
          </div>
        );
      case 'location':
        return (
          <div className="p-3 text-center">
            <div className="mb-2 text-2xl">📍</div>
            <div className="text-xs text-gray-600">
              <p>Lat: {latitud?.toFixed(4)}°</p>
              <p>Lon: {longitud?.toFixed(4)}°</p>
            </div>
          </div>
        );
      case 'info':
        return (
          <div className="p-3 text-center">
            <div className="mb-2 text-2xl">{getWeatherIcon(weather)}</div>
            <p className="text-xs text-gray-600 capitalize">{weather}</p>
            <p className="mt-1 text-xs text-gray-500">Tiempo real</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <hr className="mb-3 border-gray-200" />
      <div className="flex mb-3 space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-1 text-xs rounded-md transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
            title={tab.title}
          >
            <div className="text-lg">{tab.label}</div>
          </button>
        ))}
      </div>
      <div className="bg-gray-50 rounded-lg min-h-[80px] flex items-center justify-center">
        {renderTabContent()}
      </div>
    </div>
  );
});

WeatherStats.displayName = 'WeatherStats';

export default WeatherStats;