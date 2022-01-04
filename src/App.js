import "./App.css";
<<<<<<< HEAD
import Home from "./Components/Home/Home/Home";
import AddBrand from "./Components/Dashboard/AddBrand/AddBrand";
import NotFound from "./Components/Shared/NotFound/NotFound";
import AddServices from "./Components/Dashboard/AddServices/AddServices";
=======
import About from "./Components/AboutUs/About";
import Choose from "./Components/Home/Choose/Choose";
import ContactUs from "./Components/Home/ContactUs/ContactUs";
import Services from "./Components/Home/Services/Services";
>>>>>>> alamgir
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
<<<<<<< HEAD
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
        </Router>
      </AuthProvider>
=======
      <Navigation />
      <About />
      <Services />
      <SingleBrand />
      <ContactUs />
      <Choose />
>>>>>>> alamgir
    </div>
  );
}

export default App;
