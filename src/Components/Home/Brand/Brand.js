import React from 'react';
import './Brand.css';

const Brand = (props) => {
    const { img, description, brandName, origin } = props.brand;
    return (
        <div className="container brand">
            <img className="img-fluid" src={img} alt="" />
            <h2 className="mt-3">{brandName}</h2>
            <p className="card-description">{description}</p>
            <p className="card-description"><b>Country Origin</b> : {origin}</p>

        </div>
    );
};

export default Brand;