import { useState, useEffect } from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { useHttp } from "hooks/useHttp";
import { useAsync } from "hooks/useAsync";
import { useMount, useDebounce } from "utils/";
import Search from "./search";
import List, { Project } from "./list";

const ProductList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 200);

  const client = useHttp();

  const { run, isLoading, error, data: list } = useAsync<Project[]>();

  useEffect(() => {
    run(
      client("projects", {
        data: param,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);

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
