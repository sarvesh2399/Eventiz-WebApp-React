import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Added axios import
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ServerUrl } from '../reusables/ServerUrl';

function Update() {
    const [product, setProduct] = useState({
        product_name: '',
        price: '',
        product_image: '',
    });

    const [searchParams] = useSearchParams(); // Using useSearchParams for query string
    const navigate = useNavigate();

    const productId = searchParams.get('id'); // Extract product ID from query string

    // Fetch the product data based on the product ID
    // Updated Start
    useEffect(() => {
        if (productId) {
            axios
                .get(`${ServerUrl}/${productId}`)
                .then((response) => setProduct(response.data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productId]);
    // Updated End

    // Handle form submission to update the product
    const handleSubmit = (e) => {
        e.preventDefault();

        // Updated Start
        axios
            .put(`http://localhost:5000/api/products/${productId}`, product, {
                headers: { 'Content-Type': 'application/json' },
            })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/view-all'); // Redirect to the product list page after updating
                } else {
                    console.error('Error updating product');
                }
            })
            .catch((error) => console.error('Error:', error));
        // Updated End
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    return (
        <div className="container mt-4 mb-4">
            <h3>Update Product</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="product_name" className="form-label">Product Name</label>
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
                    <label htmlFor="price" className="form-label">Product Price ($)</label>
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
                    <label htmlFor="product_image" className="form-label">Product Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product_image"
                        name="product_image"
                        value={product.product_image}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn text-white" style={{ backgroundColor: '#F8669E' }}>
                    Update Product
                </button>
            </form>
        </div>
    );
}

export default Update;
