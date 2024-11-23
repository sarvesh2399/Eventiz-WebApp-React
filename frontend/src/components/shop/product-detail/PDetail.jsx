import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';  // Added axios import
import { ServerUrl } from '../../reusables/ServerUrl';

function PDetail() {
    const [product, setProduct] = useState(null);
    const [messageVisible, setMessageVisible] = useState(false);
    const [mainImage, setMainImage] = useState('');

    const location = useLocation();
    const productId = new URLSearchParams(location.search).get('id'); // Extract `id` from the URL query string.

    useEffect(() => {
        if (!productId) {
            setProduct(null);
            return;
        }

        // Updated Start: Replaced fetch with axios
        axios.get(`${ServerUrl}/products/${productId}`)
            .then(response => {
                setProduct(response.data);
                setMainImage(response.data.product_image); // Set main image to product's main image
            })
            .catch(error => {
                console.error('Error loading product:', error);
                setProduct(null);  // Clear product state on error
            });
        // Updated End
    }, [productId]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ ...product });
        localStorage.setItem('cart', JSON.stringify(cart));
        setMessageVisible(true);
        setTimeout(() => setMessageVisible(false), 2000);
    };

    const handleThumbnailClick = (image) => {
        setMainImage(image); // Change main image on thumbnail click
    };

    if (!product) {
        return <div className="container mt-5">Product not found or loading...</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <div id="product-image-section">
                        <img src={mainImage} alt={product.product_name} className="main-product-image" width={300} />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        {/* Thumbnails */}
                        {product.additional_images && product.additional_images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className="thumbnail-img"
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>
                </div>

                <div className="col-md-6">
                    <h1 className="product-title">{product.product_name}</h1>
                    <p>{product.description}</p>
                    <p id="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <hr />
                    <p>
                        <strong>Category:</strong> {product.category || 'Clothes'}
                    </p>
                    <p className="product-price clr">${product.price}</p>
                    <div className="input-group my-3">
                        <div className="input-group-append">
                            <button
                                onClick={addToCart}
                                className="btn text-white font-weight-bold"
                                style={{ backgroundColor: "#F8669E" }}
                            >
                                Add To Cart
                            </button>
                        </div>
                        <div className="cart-btn">
                            <Link to="/product-cart">
                                <button
                                    className="btn text-white font-weight-bold ms-3"
                                    style={{ backgroundColor: "#F8669E" }}
                                >
                                    View Cart
                                </button>
                            </Link>
                        </div>
                    </div>
                    {messageVisible && (
                        <div id="message" className="text-success font-weight-bold">
                            <h6>Product Added Successfully!</h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PDetail;
