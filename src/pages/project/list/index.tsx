import { useState, useEffect } from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { useHttp } from "hooks/useHttp";
import { useMount, useDebounce } from "utils/";
import Search from "./search";
import List, { Project } from "./list";
import { useProject } from "hooks/biz/useProject";

const ProductList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 200);

  const client = useHttp();

  const { isLoading, error, data: list } = useProject(debounceParam);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <Search users={users} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : (
        <List loading={isLoading} dataSource={list || []} users={users} />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default ProductList;
