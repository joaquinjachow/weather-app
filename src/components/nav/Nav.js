import React, { memo } from 'react';
import SearchBar from '../searchbar/SearchBar';
import ThemeToggle from '../theme-toggle/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';
import weatherImg from '../../../public/Weather-img.png'

const Nav = memo(({ onSearch, existingCities }) => {
  const { isDark } = useTheme();
  
  return (
    <nav className={`p-4 shadow-md transition-colors duration-300 ${
      isDark 
        ? 'bg-gray-800' 
        : 'bg-gradient-to-r from-slate-100 to-slate-200'
    }`}>
      <div className='flex flex-col items-center justify-around gap-3 lg:gap-0 lg:flex-row'>
        <div className='flex items-center'>
          <Image
            src={weatherImg}
            alt='Logo-Clima'
            width={80}
            height={80}
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <span className="text-3xl font-bold text-slate-800 dark:text-dark-text">
            Weather App
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <SearchBar
            onSearch={onSearch}
            existingCities={existingCities}
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
});

Nav.displayName = 'Nav';

export default Nav;