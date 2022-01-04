import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import SingleBrand from "../SingleBrand/SingleBrand";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <SingleBrand />
    </div>
  );
};

export default Home;
