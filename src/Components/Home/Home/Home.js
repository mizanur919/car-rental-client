import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Services from "../../Home/Services/Services";
import "./Home.css";
import SingleBrand from "../SingleBrand/SingleBrand";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <SingleBrand />
      <Services />
    </div>
  );
};

export default Home;
