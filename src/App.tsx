// 总页面
import { useAuth } from "contexts/auth";
import Login from "pages/account/login";
import Project from "pages/project";

const App = () => {
  const { user } = useAuth();
  return <div>{user ? <Project /> : <Login />}</div>;
};

export default App;
