// 总页面
import ErrorBoundary from "components/ErrorBoundary";
import { FullpageError } from "components/lib";
import { useAuth } from "contexts/auth";
import Login from "pages/account/login";
import Project from "pages/project";

const App = () => {
  const { user } = useAuth();
  return (
    <div className="app">
      <ErrorBoundary fallbackRender={FullpageError}>
        {user ? <Project /> : <Login />}
      </ErrorBoundary>
    </div>
  );
};

export default App;
