
import { useState } from 'react';

function useLocalStorage(key, initialValue){
    // THIS IS THE VALUE PART OF THE HOOK
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
          return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      });
    //THIS IS THE SETTER PART OF THE HOOK
    const setValue = value => {
        // Saves state
        setStoredValue(value);
        // Saves to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
      };

    return [storedValue, setValue];
} 
export default useLocalStorage