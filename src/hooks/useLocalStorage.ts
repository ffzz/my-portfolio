import { useState, useEffect } from 'react';

/**
 * Hook for storing and retrieving data using localStorage
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Get initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Failed to retrieve data from localStorage:', error);
      return initialValue;
    }
  });
  
  // Update localStorage when value changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Failed to store data in localStorage:', error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setStoredValue] as const;
} 