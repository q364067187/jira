import { useState, useEffect } from "react";

export const cleanObj = (obj?: { [key: string]: unknown }) => {
  if (!obj) {
    return {};
  }
  const o = { ...obj };
  Object.keys(o).forEach((i) => {
    if (o[i] == null || o[i] === "") {
      delete o[i];
    }
  });
  return o;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

// 重置路由
export const resetRouter = () => {
  window.location.href = window.location.origin;
};
