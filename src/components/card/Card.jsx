import React from 'react';

export default function Card({ min, max, name, img, onClose, id, temp, wind }) {
  return (
    <div className="">
      <div className="">
        <button onClick={onClose} className="">X</button>
      </div>
      <div className="">
        <h5 className="">{name}</h5>
        <div className="">
          <img className="" src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} width="80" height="80" alt="" />
        </div>
        <div className="">
          <div className="">
            <p>Temp</p>
            <p>{temp}°</p>
          </div>
          <div className="">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="">
            <p>Max</p>
            <p>{max}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
