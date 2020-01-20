import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setItem = (newValue) => {
    setValue(newValue);
    return newValue
      ? window.localStorage.setItem(key, JSON.stringify(newValue))
      : window.localStorage.removeItem(key);
  };

  return [value, setItem];
};

export default useLocalStorage;
