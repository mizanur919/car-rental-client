import React from 'react';
import './SingleService.css';

const SingleService = (props) => {
    const { model, brand, rentCode, carImage, perDayAmount, rating, title, totalAvailable } = props.service;
    return (
        <div className="col">
            <div className="card h-100 pb-3">
                {/* <img className="img-fluid" src={img} alt="" />
                <h2 className="mt-3">{serviceName}</h2>
                <p className="card-description">{description}</p>
                <button className='btn btn-danger'>Order Now with ${price}</button> */}
                <img src={carImage} style={{ width: '200px', height: 'auto' }} className="card-img-top mx-auto" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Brand: {brand}</p>
                    <p className="card-text">Model: {model}</p>
                    <p className="card-text">Per Day Amount: {perDayAmount}</p>
                </div>
                <div className="d-flex justify-content-around">
                    {/* <Link to={`/productDetails/${_id}`} className="btn btn-danger text-white">View Details</Link>
                    <Link className="btn btn-danger text-white"><i class="far fa-heart"></i> Favorite</Link> */}
                    {/* <button onClick={() => {
                        user.uid
                            ?
                            addToCart(service)
                            :
                            history.push('/login');
                    }}>Book Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleService;