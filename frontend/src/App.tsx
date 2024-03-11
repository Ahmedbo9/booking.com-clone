import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./layout/layout";

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
          path="/search"
          element={<Layout>
            <p>search page</p>
          </Layout>}
        />
      </Routes>
    </Router>
  );
};

export default App;