import { useState, useEffect } from "react";

export const cleanObj = (obj: object) => {
  const o = Object.assign({}, obj);
  Object.keys(o).forEach((i) => {
    // @ts-ignore
    if (o[i] == null || o[i] === "") {
      // @ts-ignore
      delete o[i];
    }
  });
  return o;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: unknown, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};
