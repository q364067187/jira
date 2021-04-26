import { useState, useEffect } from "react";
import Search from "pages/product-list-jsx/search";
import List from "pages/product-list-jsx/list";
import { useMount, useDebounce } from "utils/";
import { useAuth } from "contexts/auth";
import { http } from "hooks/useHttp";

const ProductList = () => {
  const { user, logout } = useAuth();
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debounceParam = useDebounce(param, 200);

  useEffect(() => {
    http("projects", {
      data: param,
    }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    http("users").then(setUsers);
  });

  return (
    <div>
      {user && (
        <div>
          Hi! {user.name} <button onClick={logout}>登出</button>
        </div>
      )}
      <Search users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProductList;
