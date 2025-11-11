import React, { useState, memo, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useCountrySearch } from "../../hooks/useCountrySearch";

const SearchBar = memo(({ onSearch, existingCities }) => {
  const [city, setCity] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  
  const { suggestions, isLoading, hasSuggestions } = useCountrySearch(city);

  useEffect(() => {
    setShowSuggestions(city.length >= 2 && hasSuggestions);
    setSelectedIndex(-1);
  }, [city, hasSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) &&
          inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          e.preventDefault();
          selectSuggestion(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const selectSuggestion = (suggestion) => {
    setCity(suggestion);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
    if (suggestion.trim()) {
      const cityExists = existingCities.some(
        existingCity => existingCity.name.toLowerCase() === suggestion.trim().toLowerCase()
      );
      if (cityExists) {
        toast.error("Esta ciudad ya ha sido agregada", {
          position: 'top-right',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
        });
        return;
      }
      onSearch(suggestion.trim());
      setCity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      toast.error("Por favor ingresa el nombre de una ciudad", {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    const cityExists = existingCities.some(
      existingCity => existingCity.name.toLowerCase() === city.trim().toLowerCase()
    );
    if (cityExists) {
      toast.error("Esta ciudad ya ha sido agregada", {
        position: 'top-right',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }
    onSearch(city.trim());
    setCity("");
  };

  return (
    <div className="relative">
      <form className="flex p-1 px-3 space-x-4 bg-white dark:bg-dark-secondary rounded-lg transition-colors duration-300" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-2">
          <label>🔎</label>
          <input
            ref={inputRef}
            className="px-4 py-1 font-normal no-underline bg-gray-100 dark:bg-gray-700 dark:text-dark-text rounded-lg outline-none w-28 md:w-auto transition-colors duration-300"
            type="text"
            id="city"
            placeholder="Ciudad"
            value={city}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </div>
        <input
          className="px-4 py-2 text-black dark:text-dark-text transition-colors bg-white dark:bg-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500"
          type="submit"
          value="Agregar"
        />
      </form>
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute left-0 right-0 z-50 mt-1 overflow-y-auto bg-white dark:bg-dark-secondary border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg top-full max-h-60 transition-colors duration-300"
        >
          {isLoading ? (
            <div className="px-4 py-2 text-sm text-gray-500 dark:text-dark-text-secondary">
              Buscando...
            </div>
          ) : (
            suggestions.map((suggestion, index) => (
              <div
                key={suggestion}
                className={`px-4 py-2 cursor-pointer text-sm transition-colors ${
                  index === selectedIndex 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => selectSuggestion(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {suggestion}
              </div>
            ))
          )}
          {!isLoading && suggestions.length === 0 && city.length >= 2 && (
            <div className="px-4 py-2 text-sm text-gray-500 dark:text-dark-text-secondary">
              No se encontraron países
            </div>
          )}
        </div>
      )}
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;