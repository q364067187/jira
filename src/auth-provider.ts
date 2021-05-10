// 在真实环境中，如果使用firebase这种第三方auth服务的话，本文件不需要开发者开发
import { User } from "pages/project/list/list";

const localStorageKey = "__auth_provider_token__";
const apiUrl = process.env.REACT_APP_API_URL;

const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

// 获取token
export const getToken = () => window.localStorage.getItem(localStorageKey);

// 登录
export const login = async (param: { username: string; password: string }) => {
  const res = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  });
  if (res.ok) {
    return handleUserResponse(await res.json());
  } else {
    return Promise.reject(await res.json());
  }
};

// 注册
export const register = async (param: {
  username: string;
  password: string;
}) => {
  const res = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(param),
  });
  if (res.ok) {
    return handleUserResponse(await res.json());
  } else {
    return Promise.reject(await res.json());
  }
};

// 登出
export const logout = async () => localStorage.removeItem(localStorageKey);
