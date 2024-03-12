import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/layout";
import Register from "./pages/register-page";

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



          path="/search"
          element={<Layout>
            <p>search page</p>
          </Layout>}
        />
        <Route
          path="/register"
          element={<Register />}
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