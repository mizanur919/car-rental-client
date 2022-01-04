import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import "./SingleBrand.css";

const SingleBrand = () => {
<<<<<<< HEAD
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
=======
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://secure-ocean-93032.herokuapp.com/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="p-5" id="services">

            <div className="container brand-container my-5">
                <h2 className="text-primary text-center">Our Brands</h2>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
                    {
                        brands.map(brand => <Brand
                            key={brand.id}
                            brand={brand}
                        ></Brand>)
                    }
                </div>
            </div>
        </div>
    );
>>>>>>> alamgir
};

export default SingleBrand;
