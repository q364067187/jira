import { useState, useEffect } from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { useHttp } from "hooks/useHttp";
import { useMount, useDebounce } from "utils/";
import Search from "./search";
import List from "./list";

const ProductList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 200);

  const client = useHttp();

  useEffect(() => {
    setLoading(true);
    setError(null);
    client("projects", {
      data: param,
    })
      .then(setList)
      .catch((e) => {
        setError(e);
        setList([]);
      })
      .finally(() => setLoading(false));
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
        <List loading={loading} dataSource={list} users={users} />
      )}
    </Container>
  );
};

const Container = styled.div``;

export default ProductList;
