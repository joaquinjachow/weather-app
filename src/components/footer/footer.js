import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full py-1 bg-white dark:bg-dark-secondary border-gray-200 dark:border-gray-600 rounded shadow-md transition-colors duration-300">
      <p className='flex items-center gap-1 mx-auto font-medium text-gray-700 dark:text-dark-text max-w-7xl'>
        <span>© Made by</span>
        <a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/joaquin-jachow/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Joaquin Jachow</a>
      </p>
    </footer>
  )
});

Footer.displayName = 'Footer';

export default Footer;