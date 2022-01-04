import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Navigation from "../../Shared/Navigation/Navigation";
import "./AddBrand.css";

const AddBrand = () => {
  const [brand, setBrand] = useState({});
  const [getAllBrands, setGetAllBrands] = useState([]);

  fetch("http://localhost:5000/brands")
    .then((res) => res.json())
    .then((data) => setGetAllBrands(data));

  // Handler
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBrand = { ...brand };
    newBrand[field] = value;
    setBrand(newBrand);
  };

  // Add Brand
  const handleBrandSubmit = (e) => {
    fetch("http://localhost:5000/brands/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(brand),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Brand Added Successfully");
          fetch("http://localhost:5000/brands")
            .then((res) => res.json())
            .then((data) => setGetAllBrands(data));
        } else {
          alert("Something went wrong");
        }
      });
    e.preventDefault();
  };

  // Update Brand
  // const handleUpdateBrand = (id) => {
  //   const url = `http://localhost:5000/brands/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(brand),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         alert("User updated successfully.");
  //         setBrand({});
  //       }
  //     });
  // };

  // Fill Data To Update
  // const fillDate = (id) => {
  //   const singleBrandFind = getAllBrands.filter(
  //     (singleOne) => singleOne._id === id
  //   );
  //   document.getElementById("brandName").value = singleBrandFind[0].name;
  //   document.getElementById("brandImage").value = singleBrandFind[0].image;
  //   document.getElementById("origin").value = singleBrandFind[0].origin;

  //   if (singleBrandFind) {
  //     document.getElementById("btn-edit").removeAttribute("disabled");
  //     document.getElementById("btn-add").disabled = true;
  //   } else {
  //     document.getElementById("btn-edit").attributes("disabled");
  //   }
  // };

  // Data Clear From Text Box
  const clearData = () => {
    document.getElementById("brandName").value = "";
    document.getElementById("brandImage").value = "";
    document.getElementById("origin").value = "";

    document.getElementById("btn-edit").disabled = true;
    document.getElementById("btn-add").disabled = false;
  };

  // Delete Brand
  const handleDelete = (id) => {
    const url = `http://localhost:5000/brands/${id}`;
    if (window.confirm("Are you sure?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted");
            const remainingBrands = brand.filter((brand) => brand._id !== id);
            setBrand(remainingBrands);
          }
        });
    }
  };

  // Main
  return (
    <div>
      <Navigation />
      <h2 className="mt-4 mb-5">Add Brand</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Brand Name
                </label>
                <input
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  className="form-control brand-name"
                  id="brandName"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Image Link
                </label>
                <input
                  type="text"
                  name="image"
                  onBlur={handleOnBlur}
                  className="form-control brand-image"
                  id="brandImage"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Origin
                </label>
                <input
                  type="text"
                  name="origin"
                  onBlur={handleOnBlur}
                  className="form-control origin"
                  id="origin"
                />
              </div>
            </form>
            <Button
              onClick={handleBrandSubmit}
              id="btn-add"
              className="btn btn-danger text-white w-100 text-uppercase"
            >
              <i class="fas fa-location-arrow"></i> Add
            </Button>
            <Button
              onClick={() => clearData()}
              id="btn-edit"
              className="btn btn-danger mt-3 text-white w-100 text-uppercase"
            >
              <i class="fas fa-location-arrow"></i> Clear
            </Button>
          </div>
          <div className="col-md-8 mt-1">
            <table className="table border shadow table-hover">
              <thead>
                <tr>
                  <th>Brand Name</th>
                  <th>Image</th>
                  <th>Origin</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {getAllBrands.map((singleBrand) => (
                  <tr key={singleBrand._id}>
                    <td>{singleBrand.name}</td>
                    <td>
                      <img
                        style={{ width: "100px", height: "auto" }}
                        src={singleBrand.image}
                        alt=""
                      />
                    </td>
                    <td>{singleBrand.origin}</td>
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
                        onClick={() => handleDelete(singleBrand._id)}
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

export default AddBrand;
