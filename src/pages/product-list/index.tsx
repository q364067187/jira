import { useState, useEffect } from "react";
import Search from "pages/product-list-jsx/search";
import List from "pages/product-list-jsx/list";
import { cleanObj, useMount, useDebounce } from "utils/";
import qs from "qs";
import { useAuth } from "contexts/auth";

const apiUrl = process.env.REACT_APP_API_URL;

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
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(param))}`).then(
      async (res) => {
        if (res.ok) {
          const results = await res.json();
          setList(results);
        }
      }
    );
  }, [debounceParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        const results = await res.json();
        setUsers(results);
      }
    });
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
