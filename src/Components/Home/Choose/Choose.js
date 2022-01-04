import React from 'react';

const Choose = () => {
    return (
        <div className="container-fluid bg-primary py-5">
            <h1 className="text-center text-white">Why Choose Us</h1>
            <h6 className="text-white">Explore our first class limousine and car rental services</h6>
            <div className="container mt-5">
                <div className="row text-white">
                    <div className="col-md-4">
                        <i className="fas fa-car-side fs-1 mb-4"></i>
                        <h3>variety of Car Brands</h3>
                        <p>There are currently at least 42 automotive brands sold in the U.S., each with a lineup of vehicles for sale.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="far fa-smile fs-1 mb-4"></i>
                        <h3>Best Rate Guarantee</h3>
                        <p>You've come to the right place. You know you're getting the best rates at any Hyatt hotel or resort worldwide.</p>
                    </div>
                    <div className="col-md-4">
                        <i className="far fa-heart fs-1 mb-4"></i>
                        <h3>Awesome Customer Support</h3>
                        <p>We are providing the awesome custome support. We are following the best practices to valuied customers.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Choose;