import "./App.css";
import Brand from "./Components/Home/Brand/Brand";
import SingleBrand from "./Components/Home/SingleBrand/SingleBrand";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SingleBrand></SingleBrand>
    </div>
  );
}

export default App;
