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

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

// 4-6 作业练习 - 用 Hook + TS + TS泛型实现useArray
export const useArray = <V>(persons: V[]) => {
  const [newPersons, setNewPersons] = useState(persons);
  const clear = () => {
    setNewPersons([]);
  };
  const removeIndex = (index: number) => {
    const values = [...newPersons];
    values.splice(index, 1);
    setNewPersons(values);
  };
  const add = (person: V) => {
    setNewPersons([...newPersons, person]);
  };
  return {
    value: newPersons,
    clear,
    removeIndex,
    add,
  };
};
