import { useAuth } from "contexts/auth";
import { FormEvent } from "react";

const Register = () => {
  const { register } = useAuth();
  const postRegister = (param: { username: string; password: string }) => {
    register(param);
  };

  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (event.currentTarget.elements[1] as HTMLFormElement).value;
    postRegister({ username, password });
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
        <button type="submit">注册</button>
        <button>切换到登录</button>
      </div>
    </form>
  );
};

export default Register;
