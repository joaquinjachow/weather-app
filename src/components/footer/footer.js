import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="fixed inset-x-0 bottom-0 w-full py-1 bg-white border-gray-200 rounded shadow-md">
      <p className='flex items-center gap-1 mx-auto font-medium text-gray-700 max-w-7xl'>
        <span>© Made by</span>
        <a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/joaquin-jachow/">Joaquin Jachow</a>
      </p>
    </footer>
  )
});

Footer.displayName = 'Footer';

export default Footer;