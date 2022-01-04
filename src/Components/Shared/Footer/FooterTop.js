import React from "react";

const FooterTop = () => {
  return (
    <div className=" mt-5">
      <footer className="text-white text-center text-lg-start bg-dark">
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Get-Car</h5>
              <p>
                Rent-Car is a #1 Car Rental Company In Bangladesh. We Provide
                Luxurias Car Rent Servic.
              </p>
              <p>
                You will get you dream car as rental with you resonable budget.
              </p>
              <div className="mt-4">
                <a
                  type="button"
                  className="btn btn-floating btn-light btn-lg me-2"
                >
                  <i className="fab fa-facebook-f text-black"></i>
                </a>
                <a
                  type="button"
                  className="btn btn-floating btn-light btn-lg me-2"
                >
                  <i className="fab fa-dribbble text-black"></i>
                </a>
                <a
                  type="button"
                  className="btn btn-floating btn-light btn-lg me-2"
                >
                  <i className="fab fa-twitter text-black"></i>
                </a>
                <a type="button" className="btn btn-floating btn-light btn-lg">
                  <i className="fab fa-google-plus-g text-black"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Our Address</h5>
              <p>
                Dhaka, 1000, Bangladesh. <br />
                contact@rentcar.com, <br />
                +8801800000000.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Physical Office Hours</h5>

              <table className="table text-center text-white">
                <tbody className="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://rentcar.com">
            <span> Rent Car</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default FooterTop;
