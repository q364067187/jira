import { useAuth } from "contexts/auth";
import { Button, Divider, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useAsync } from "hooks/useAsync";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import { ErrorBox } from "components/lib";
import {
  Header,
  Background,
  ShadowCard,
  Title,
  Container,
} from "../common/lib";

const Login = () => {
  const { login } = useAuth();
  const { run, isLoading, error } = useAsync();

  useDocumentTitle("登录");

  const submitHandle = (values: { username: string; password: string }) => {
    run(login(values));
  };

  return (
    <Container>
      <Header />
      <Background />
      <ShadowCard>
        <Title>请登录</Title>
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
          <Form.Item>
            <Button loading={isLoading} htmlType="submit" type="primary" block>
              登录
            </Button>
          </Form.Item>
          <Divider />
          <Link to="/register">没有账号？注册新账号</Link>
        </Form>
      </ShadowCard>
    </Container>
  );
};

export default Login;
