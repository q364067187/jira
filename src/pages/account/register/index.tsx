import { useAuth } from "contexts/auth";
import { FormEvent } from "react";
import { Button, Card, Form, Input } from "antd";

const Register = () => {
  const { register } = useAuth();
  const postRegister = (param: { username: string; password: string }) => {
    register(param);
  };

  const submitHandle = (values: { username: string; password: string }) => {
    postRegister(values);
  };

  return (
    <Card>
      <Form onFinish={submitHandle}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="用户名" type="text" id="username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input placeholder="密码" type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            注册
          </Button>
          <Button>切换到登录</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Register;
