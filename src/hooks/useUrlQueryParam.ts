import { useMemo } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { cleanObj } from "utils";

export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParam, setSearchParam] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParam.get(key) || "" };
      }, {} as { [key in K]: string });
    }, [searchParam]),
    (params: Partial<{ [key in K]: unknown }>) => {
      const o = cleanObj({
        ...Object.fromEntries(searchParam),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParam(o);
    },
  ] as const;
};

/**
 * 当返回一个不同类型的数组，如['str', 123, {a: 'aa'}]时
 * 用ts查看此类型时，会发现是 (string | number | {a: string})[]
 * 原因是ts认为这是一个数组，每一项可能是字符串/数字/对象
 * 如果要返回想要的自己定义的类型时，只需在此数组后加上 as const 即可
 *
 * reduce的类型返回默认是默认值的类型
 * 如果只设置了{}为默认值，则查看此类型时会发现变成了{}
 * 如果要设置为键值对象，则在{}后面加上 as { [key in string]: string } 即可
 *
 * searchParam的get方法返回的类型是 string | null ,使用在返回的键值对象上会报错
 * 所以一定要在get方法后加上空字符串类型
 */
