import React from 'react';
import SearchBar from '../searchbar/SearchBar';
import Image from 'next/image';
import weatherImg from '../../../public/Weather-img.png'

function Nav({onSearch}) {
  return (
    <nav className="p-4 bg-[#565656] shadow-md">
      <div className='flex flex-col items-center justify-around gap-3 lg:gap-0 lg:flex-row'>
        <div className='flex items-center'>
          <Image src={weatherImg} alt='Logo-Clima' width={80}/>
          <span className="text-3xl font-bold text-white">
            Weather App
          </span>
        </div>
        <SearchBar
          onSearch={onSearch}
        />
      </div>
    </nav>
  );
};

export default Nav;
