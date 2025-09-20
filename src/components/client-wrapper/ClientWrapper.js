import React, { useState, useEffect, memo } from 'react';

const ClientWrapper = memo(({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-center bg-cover bg-clouds">
        <div className="flex items-center justify-center w-full h-screen">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return children;
});

ClientWrapper.displayName = 'ClientWrapper';

export default ClientWrapper;