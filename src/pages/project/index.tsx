// 项目框架
import { Button, Dropdown, Menu } from "antd";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "@emotion/styled";

import { useAuth } from "contexts/auth";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";

import ProjectList from "./list/index";
import ProjectDetail from "./detail/index";
// 一些测试页面
// import ProjectList from "./list-jsx/index";
// import OldHome from "./old-home";
// import PageUseArray from "./work-pages/use-array";

const PageHeader = () => {
  const { user, logout } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftwareLogo width="20rem" />
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HederRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button onClick={logout} type="link">
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi! {user?.name}
          </Button>
        </Dropdown>
      </HederRight>
    </Header>
  );
};

const Project = () => {
  return (
    <Container>
      <PageHeader />
      <Main>
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:projectId/*" element={<ProjectDetail />} />
          {/* <OldHome /> */}
          {/* <PageUseArray /> */}
          <Navigate to="/projects" />
        </Routes>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;
const HederRight = styled.div``;
const Main = styled.main`
  padding: 3.2rem;
`;

export default Project;
