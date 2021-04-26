import { useAuth } from "contexts/auth";
import qs from "qs";
// import { useState } from "react";
import { cleanObj } from "utils";
const apiUrl = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = async (
  url: string,
  { token, data, headers, ...customConfig }: Config = {}
) => {
  if (!token) {
    token = localStorage.getItem("__auth_provider_token__") || "";
  }
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
  return res;
};
