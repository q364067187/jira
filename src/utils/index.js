import { useState, useEffect } from "react";

export const cleanObj = (obj) => {
  const o = Object.assign({}, obj);
  Object.keys(o).forEach((i) => {
    if (obj[i] == null || obj[i] === "") {
      delete o[i];
    }
  });
  return o;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};
