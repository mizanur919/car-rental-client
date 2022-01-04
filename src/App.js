import "./App.css";
import Home from "./Components/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBrand from "./Components/Dashboard/AddBrand/AddBrand";
import NotFound from "./Components/Shared/NotFound/NotFound";
import AddServices from "./Components/Dashboard/AddServices/AddServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addBrand" element={<AddBrand />} />
          <Route path="/addServices" element={<AddServices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
