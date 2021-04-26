import { useAuth } from "contexts/auth";
import { FormEvent } from "react";

const Login = () => {
  const { login } = useAuth();
  const postLogin = (param: { username: string; password: string }) => {
    login(param);
  };

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    postLogin({ username, password });
  };

  return (
    <form onSubmit={submitHandle}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">登录</button>
        <button>切换到注册</button>
      </div>
    </form>
  );
};

export default Login;
