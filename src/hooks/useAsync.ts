import { useState } from "react";

interface State<D> {
  data: D | null;
  error: Error | null;
  stat: "idle" | "loading" | "error" | "success";
}

const defaultInitialState: State<null> = {
  data: null,
  error: null,
  stat: "idle",
};

export const useAsync = <D>(initialState?: State<D>) => {
  const [state, setState] = useState<State<D>>({
    ...defaultInitialState,
    ...initialState,
  });

  const setData = (data: D) => {
    setState({
      data,
      error: null,
      stat: "success",
    });
  };

  const setError = (error: Error) => {
    setState({
      data: null,
      error,
      stat: "error",
    });
  };

  const run = async (promise: Promise<D>) => {
    if (!promise || !promise.then) {
      throw new Error("请传入 Promise 类型数据");
    }
    setState({
      ...state,
      error: null,
      stat: "loading",
    });
    try {
      const data = await promise;
      setData(data);
      return Promise.resolve(data);
    } catch (error) {
      setError(error);
      return Promise.reject(error);
    }
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isSuccess: state.stat === "success",
    isError: state.stat === "error",
    setData,
    setError,
    run,
    ...state,
  };
};
