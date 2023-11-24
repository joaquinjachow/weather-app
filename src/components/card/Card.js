import React from 'react';

export default function Card({ min, max, name, img, onClose, temp}) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xs p-4 my-4 font-medium transition-all duration-500 ease-in-out bg-white rounded-md shadow-lg shadow-slate-500 hover:scale-105 hover:shadow-xl">
      <button onClick={onClose} className="m-2 ml-auto text-3xl text-red-400 transition-colors duration-500 ease-in-out hover:text-red-600">
        X
      </button>
      <div className="grid m-4 bg-gray-900 rounded-full shadow-lg place-items-center shadow-gray-300">
        <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="100" height="100" alt={name} />
      </div>
      <h1 className="m-4 text-2xl">{name}</h1>
      <span className='text-2xl'>{temp}&deg;C</span>
      <p className="m-4 text-2xl font-light">
        <span className='text-sm'>Min:</span> {min}&deg;C / <span className='text-sm'>Max:</span> {max}&deg;C
      </p>
    </div>
  );
};
