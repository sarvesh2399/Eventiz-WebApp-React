import React, { useState } from "react";
import axios from "axios"; // Added axios import
import { useNavigate } from "react-router-dom";
import { ServerUrl } from "../reusables/ServerUrl";

function Create() {
  const [product, setProduct] = useState({
    id: "", // Ensure this is a number by setting it through the form field type
    product_name: "",
    price: "",
    product_image: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Updated Start
    axios
      .post(`${ServerUrl}/products`, {
        ...product,
        id: Number(product.id), // Convert ID and Price to numbers
        price: Number(product.price),
      })
      .then((response) => {
        if (response.status === 201) {
          // Assuming 201 is the success status for creation
          navigate("/view-all");
        } else {
          console.error("Error adding product", response.status);
        }
      })
      .catch((error) => console.error("Error:", error));
    // Updated End
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="container mt-4 mb-4">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Product ID
          </label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            value={product.id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Product Price ($)
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="product_image" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="product_image"
            name="product_image"
            value={product.product_image}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn text-white"
          style={{ backgroundColor: "#F8669E" }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Create;
