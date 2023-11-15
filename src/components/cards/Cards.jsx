import React from 'react';
import Card from '../card/Card';

export default function Cards({cities, onClose}) {
  return (
    <div className='flex flex-wrap justify-center'>
      {cities.map(c => <Card
          id={c.id}
          key={c.id}
          temp={c.temp}
          wind={c.wind}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}
