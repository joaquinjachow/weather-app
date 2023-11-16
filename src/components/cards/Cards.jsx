import React from 'react';
import Card from '../card/Card';
import Search from '../../../public/search.svg'
import Image from 'next/image';

export default function Cards({cities, onClose}) {
  return (
    <>
      {cities.length > 0 ? (
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
        ) : (
        <div className="grid w-full h-full mt-48 place-items-center">
          <div className="max-w-sm mx-4">
            <Image src={Search} width={1000} alt="Busca una ciudad logo" />
          </div>
          <h1 className="m-0 mt-8 text-2xl">Busca tu ciudad!</h1>
        </div>
      )}
    </>
  );
}
