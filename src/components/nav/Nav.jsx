import React from 'react';
import Link from 'next/link.js';
import SearchBar from '../searchbar/SearchBar';

function Nav({onSearch}) {
  return (
    <nav className="flex justify-start bg-gray-800">
    <div className='flex'>
      <Link href='/'>
        <span className="text-white">
          Weather App
        </span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
    </div>
    </nav>
  );
};

export default Nav;
