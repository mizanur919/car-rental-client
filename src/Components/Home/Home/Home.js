import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Services from "../../Home/Services/Services";
import "./Home.css";
import SingleBrand from "../SingleBrand/SingleBrand";
import FooterTop from "../../Shared/Footer/FooterTop";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <SingleBrand />
      <Services />
      <FooterTop />
    </div>
  );
};

export default Home;
