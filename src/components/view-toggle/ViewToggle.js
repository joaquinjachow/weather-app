import React, { memo } from 'react';

const ViewToggle = memo(({ viewMode, onViewChange }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex p-1 mt-4 bg-white rounded-lg shadow-md">
        <button
          onClick={() => onViewChange('cards')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            viewMode === 'cards'
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span>📱</span>
            <span>Cards</span>
          </div>
        </button>
        
        <button
          onClick={() => onViewChange('grid')}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            viewMode === 'grid'
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span>📊</span>
            <span>Grid</span>
          </div>
        </button>
      </div>
    </div>
  );
});

ViewToggle.displayName = 'ViewToggle';

export default ViewToggle;