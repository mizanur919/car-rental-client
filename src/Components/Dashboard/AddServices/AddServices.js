import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import "./AddServices.css";

const AddServices = () => {
  const [service, setService] = useState({});
  const [getAllServices, setGetAllServices] = useState([]);

  fetch("https://secure-ocean-93032.herokuapp.com/services")
    .then((res) => res.json())
    .then((data) => setGetAllServices(data));

  // Handler
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  // Add Brand
  const handleServiceSubmit = (e) => {
    fetch("https://secure-ocean-93032.herokuapp.com/services/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Service Added Successfully");
          fetch("https://secure-ocean-93032.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setGetAllServices(data));
        } else {
          alert("Something went wrong");
        }
      });
    e.preventDefault();
  };

  // Delete Brand
  const handleDelete = (id) => {
    const url = `https://secure-ocean-93032.herokuapp.com/services/${id}`;
    if (window.confirm("Are you sure?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted");
            const remainingServices = service.filter(
              (brand) => brand._id !== id
            );
            setService(remainingServices);
          }
        });
    }
  };

  //Main
  return (
    <div>
      <Navigation />
      <h2 className="mt-4 mb-5">Add Rental Services</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  onBlur={handleOnBlur}
                  className="form-control brand-name"
                  id="brandName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  onBlur={handleOnBlur}
                  className="form-control brand-name"
                  id="modelName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  onBlur={handleOnBlur}
                  className="form-control brand-name"
                  id="brandName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Rent Code
                </label>
                <input
                  type="text"
                  name="rentCode"
                  onBlur={handleOnBlur}
                  className="form-control brand-image"
                  id="rentCode"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  name="carImage"
                  onBlur={handleOnBlur}
                  className="form-control brand-image"
                  id="carImage"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  name="perDayAmount"
                  onBlur={handleOnBlur}
                  className="form-control brand-image"
                  id="perDayAmount"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="rating"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Total Available
                </label>
                <input
                  type="text"
                  name="totalAvailable"
                  onBlur={handleOnBlur}
                  className="form-control"
                  id="totalAvailable"
                />
              </div>
            </form>
            <Button
              onClick={handleServiceSubmit}
              id="btn-add"
              className="btn btn-danger text-white w-100 text-uppercase"
            >
              <i class="fas fa-location-arrow"></i> Add
            </Button>
          </div>
          <div className="col-md-8 mt-1">
            <table className="table border shadow table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Is Available</th>
                </tr>
              </thead>
              <tbody>
                {getAllServices.map((singleService) => (
                  <tr key={singleService._id}>
                    <td>{singleService.title}</td>
                    <td>
                      <img
                        style={{ width: "100px", height: "auto" }}
                        src={singleService.carImage}
                        alt=""
                      />
                    </td>
                    <td>{singleService.brand}</td>
                    <td>{singleService.perDayAmount}</td>
                    <td>
                      {singleService.totalAvailable > 0
                        ? "Available"
                        : "Not Available"}
                    </td>
                    <td>
                      {/* <button
                        className="btn btn-warning mx-2"
                        onClick={() => fillDate(singleBrand._id)}
                      >
                        Edit
                      </button> */}
                      {/* <button
                        disabled
                        className="btn btn-success mx-2"
                        id="btn-edit"
                        onClick={() => handleUpdateBrand(singleBrand._id)}
                      >
                        Update
                      </button> */}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(singleService._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
