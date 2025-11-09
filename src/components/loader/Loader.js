import React, { memo } from 'react';

const Loader = memo(() => {
  return (
    <div className="flex items-center justify-center w-full h-32">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="ml-3 text-lg font-medium text-gray-700">Cargando clima...</span>
    </div>
  );
});

Loader.displayName = 'Loader';

export default Loader;