import "./App.css";
import About from "./Components/AboutUs/About";
import Choose from "./Components/Home/Choose/Choose";
import Services from "./Components/Home/Services/Services";
import SingleBrand from "./Components/Home/SingleBrand/SingleBrand";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Services />
      <SingleBrand />
      <Choose />
    </div>
  );
}

export default App;
