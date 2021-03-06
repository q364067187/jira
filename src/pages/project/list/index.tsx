import { useState } from "react";
import { Typography } from "antd";
import styled from "@emotion/styled";
import { useDebounce } from "utils/";
import Search from "./search";
import List from "./list";
import { useProjects } from "hooks/biz/useProjects";
import { useUsers } from "hooks/biz/useUsers";
import { useDocumentTitle } from "hooks/useDocumentTitle";
import useProjectSearchParams from "./utils/useProjectSearchParams";

const ProductList = () => {
  const [param, setParam] = useProjectSearchParams();
  const debounceParam = useDebounce(param, 200);

  useDocumentTitle("项目列表");

  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { isLoading: isLoadingUsers, data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <Search
        loading={isLoadingUsers}
        users={users || []}
        param={param}
        setParam={setParam}
      />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : (
        <List loading={isLoading} dataSource={list || []} users={users || []} />
      )}
    </Container>
  );
};

ProductList.whyDidYouRender = false;

const Container = styled.div``;

export default ProductList;
