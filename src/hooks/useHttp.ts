import qs from "qs";
import { useAuth } from "contexts/auth";
import { cleanObj } from "utils";
import { config } from "node:process";
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  url: string,
  { token, data, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-type": "application/json",
    },
    ...customConfig,
  };

  // url加base路径
  url = `${apiUrl}/${url}`;

  // 处理get方式参数
  if (config.method.toUpperCase() === "GET") {
    if (data) {
      url += `?${qs.stringify(cleanObj(data))}`;
    }
  }

  const res = await window.fetch(url, config);
  const result = await res.json();
  if (res.ok) {
    return result;
  } else {
    return Promise.reject(result);
  }
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[url, config]: Parameters<typeof http>) =>
    http(url, { ...config, token: user?.token });
};
