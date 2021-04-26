// import OldHome from "pages/old-home";
// import ProjectList from "pages/product-list-jsx/index";
import ProjectList from "pages/product-list/index";

// import PageUseArray from "pages/work-pages/use-array";

import { useAuth } from "contexts/auth";
import Login from "pages/account/login";

function App() {
  const { user } = useAuth();
  return (
    <div>
      {/* <OldHome /> */}
      {/* <PageUseArray /> */}
      {user ? <ProjectList /> : <Login />}
    </div>
  );
}

export default App;
