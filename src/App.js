import "./App.css";
import Home from "./Components/Home/Home/Home";
import SingleBrand from "./Components/Home/SingleBrand/SingleBrand";
import AuthProvider from "./Context/AuthProvider";
import Login from "../src/Components/Shared/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
