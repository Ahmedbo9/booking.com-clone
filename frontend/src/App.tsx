import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/layout";
import Register from "./pages/register-page";
import SignIn from "./pages/sign-in";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout>
            <p>Home page</p>
          </Layout>}
        />


        <Route
          path="/register"
          element={<Layout>
            <Register />
          </Layout>}
        />  


          <Route
          path="/sign-in"
          element={<Layout>
            <SignIn />
          </Layout>}
        />  




         <Route
          path="/search"
          element={<Layout>
            <p>search page</p>
          </Layout>}
        />
    
          <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;