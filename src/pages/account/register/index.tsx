import { useAuth } from "contexts/auth";
import { Button, Divider, Form, Input } from "antd";

import { useAsync } from "hooks/useAsync";
import { ErrorBox } from "components/lib";
import {
  Header,
  Background,
  ShadowCard,
  Title,
  Container,
} from "../common/lib";

const Register = () => {
  const { register } = useAuth();
  const { run, isLoading, error, setError } = useAsync();

  const goBack = () => {
    window.history.back();
  };

  const submitHandle = ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      setError(new Error("请确认两次输入的密码相同"));
      return;
    }
    run(register(values)).then(goBack);
  };

  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>请注册</Title>
        <ErrorBox error={error} />
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
          <Form.Item
            name="cpassword"
            rules={[{ required: true, message: "请再次输入密码" }]}
          >
            <Input placeholder="确认密码" type="password" id="cpassword" />
          </Form.Item>
          <Form.Item>
            <Button loading={isLoading} htmlType="submit" type="primary" block>
              注册
            </Button>
          </Form.Item>
          <Divider />
          <Button type="link" onClick={goBack}>
            切换到登录
          </Button>
        </Form>
      </ShadowCard>
    </Container>
  );
};

export default Register;
