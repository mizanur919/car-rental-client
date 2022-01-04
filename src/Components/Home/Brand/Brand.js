import React from 'react';
import './Brand.css';

const Brand = (props) => {
    const { name, image, origin } = props.brand;
    return (
        // <div className="container brand">
        //     <img className="img-fluid" src={img} alt="" />
        //     <h2 className="mt-3">{brandName}</h2>
        //     <p className="card-description">{description}</p>
        //     <p className="card-description"><b>Country Origin</b> : {origin}</p>

        // </div>

        <div className="col">
            <div className="card h-100 pb-3">
                <img src={image} style={{ width: '200px', height: 'auto' }} className="card-img-top mx-auto" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Brand: {name}</h5>
                    <p className="card-text">Origin: {origin}</p>
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

export default Brand;