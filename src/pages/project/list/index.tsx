import { useState, useEffect } from "react";
import Search from "./search";
import List from "./list";
import { useMount, useDebounce } from "utils/";
import { useHttp } from "hooks/useHttp";
import { Row } from "components/lib";
import styled from "@emotion/styled";

const ProductList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 200);

  const client = useHttp();

  useEffect(() => {
    client("projects", {
      data: param,
    }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <Search users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </Container>
  );
};

const Container = styled.div``;

export default ProductList;
