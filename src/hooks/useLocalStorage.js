import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [isMounted, setIsMounted] = useState(false);
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    setIsMounted(true);
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.log('Error al leer localStorage:', error);
    }
  }, [key]);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isMounted && typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log('Error al escribir en localStorage:', error);
    }
  };
  if (!isMounted) {
    return [initialValue, setValue];
  }
  return [storedValue, setValue];
}