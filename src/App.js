import "./App.css";
import Home from "./Components/Home/Home/Home";
import AddBrand from "./Components/Dashboard/AddBrand/AddBrand";
import NotFound from "./Components/Shared/NotFound/NotFound";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
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
import FooterTop from "./Components/Shared/Footer/FooterTop";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addBrand" element={<AddBrand />} />
            <Route path="/addServices" element={<AddServices />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <FooterTop />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
