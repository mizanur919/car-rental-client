import "./App.css";
import Choose from "./Components/Home/Choose/Choose";
import SingleBrand from "./Components/Home/SingleBrand/SingleBrand";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <SingleBrand />
      <Choose />
    </div>
  );
}

export default App;
