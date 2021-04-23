import { FormEvent } from "react";

const Login = () => {
  const submitHandle = (event: FormEvent) => {};

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
    </form>
  );
};

export default Login;
