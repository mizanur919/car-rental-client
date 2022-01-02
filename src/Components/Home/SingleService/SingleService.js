import React from 'react';
import './SingleService.css';

const SingleService = (props) => {
    const { img, description, serviceName, price } = props.service;
    return (
        <div className="container service">
            <img className="img-fluid" src={img} alt="" />
            <h2 className="mt-3">{serviceName}</h2>
            <p className="card-description">{description}</p>
            <button className='btn btn-danger'>Order Now with ${price}</button>

        </div>
    );
};

export default SingleService;