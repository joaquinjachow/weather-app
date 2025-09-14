import React, { useState, memo } from 'react';
import Card from '../card/Card';
import WeatherGrid from '../weather-grid/WeatherGrid';
import ViewToggle from '../view-toggle/ViewToggle';
import Search from '../../../public/search.svg'
import Image from 'next/image';

const Cards = memo(({ cities, onClose }) => {
  const [viewMode, setViewMode] = useState('cards');

  if (cities.length === 0) {
    return (
      <div className="grid w-full h-full mt-48 place-items-center">
        <div className="max-w-sm mx-4">
          <Image
            src={Search}
            width={1000}
            height={1000}
            alt="Busca una ciudad logo"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <h1 className="m-0 mt-8 text-2xl">Busca tu ciudad!</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
      {viewMode === 'cards' ? (
        <div className='container flex flex-wrap justify-center gap-5 mx-auto mb-6 lg:mb-1'>
          {cities.map(city => (
            <Card
              key={city.id}
              temp={city.temp}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              wind={city.wind}
              weather={city.weather}
              clouds={city.clouds}
              latitud={city.latitud}
              longitud={city.longitud}
              onClose={() => onClose(city.id)}
            />
          ))}
        </div>
      ) : (
        <WeatherGrid cities={cities} onClose={onClose} />
      )}
    </div>
  );
});

Cards.displayName = 'Cards';

export default Cards;