import { useAuth } from "contexts/auth";
import { Button, Card, Divider, Form, Input, Typography } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";
import { useAsync } from "hooks/useAsync";
import { useDocumentTitle } from "hooks/useDocumentTitle";

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
      <ShadowCade>
        <Title>请登录</Title>
        {error ? (
          <Typography.Text type="danger">{error.message}</Typography.Text>
        ) : null}
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
            <LongButton loading={isLoading} htmlType="submit" type="primary">
              登录
            </LongButton>
          </Form.Item>
          <Divider />
          <Button type="link">没有账号？注册新账号</Button>
        </Form>
      </ShadowCade>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const ShadowCade = styled(Card)`
  width: 40rem;
  min-height: 46rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export default Login;
