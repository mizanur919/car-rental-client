import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import "./SingleBrand.css";

const SingleBrand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("./brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="my-2">
      <h2 className="text-primary text-center">Our Brands</h2>
      <div className="container brand-container my-3">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default SingleBrand;
