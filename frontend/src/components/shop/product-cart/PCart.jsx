import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PCart() {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        loadCart();
    }, []);

    const loadCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Ensure minimum quantity of 1 for each item
        const updatedCart = savedCart.map(item => ({
            ...item,
            quantity: item.quantity ? Math.max(1, item.quantity) : 1 // Set to 1 if quantity is missing
        }));

        setCart(updatedCart);
        calculateTotalPrice(updatedCart);
    };

    const calculateTotalPrice = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const removeItem = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotalPrice(updatedCart);
    };

    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cart];
        // Ensure minimum quantity of 1
        updatedCart[index].quantity = Math.max(1, quantity);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotalPrice(updatedCart);
    };

    return (
        <div className="container my-5">
            <div className="row">
                {/* Cart Table */}
                <div className="col-lg-8">
                    <div className="card">
                        <h5 className="card-title mt-0">Cart Items</h5>
                        <div className="card-body">
                            <div className="table-responsive cart-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>Product Image</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item, index) => (
                                            <tr key={index}>
                                                <td className="align-middle">
                                                    <button
                                                        className="btn remove-item"
                                                        onClick={() => removeItem(index)}
                                                    >
                                                        <i className="fa fa-close"></i>
                                                    </button>
                                                </td>
                                                <td className="align-middle">
                                                    <img src={item.product_image} className="img-fluid" alt={item.product_name} />
                                                </td>
                                                <td className="align-middle">{item.product_name}</td>
                                                <td className="align-middle">${item.price}</td>
                                                <td className="align-middle">
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        min="1"
                                                        className="form-control quantity"
                                                        style={{ width: "60px" }}
                                                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                    />
                                                </td>
                                                <td className="align-middle">${(item.price * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Link
                                to="/product-list"
                                className="btn text-white text-start"
                                style={{ backgroundColor: "#F8669E" }}
                            >
                                Update Cart
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cart Totals */}
                <div className="col-lg-4">
                    <div className="card pt-0">
                        <div className="card-body">
                            <h5 className="card-title">Cart Totals</h5>
                            <div className="d-flex justify-content-between">
                                <p>Total</p>
                                <p id="final-price">${totalPrice.toFixed(2)}</p>
                            </div>
                            <Link
                                to="/product-checkout"
                                className="btn text-white"
                                style={{ backgroundColor: "#F8669E" }}
                            >
                                Proceed To Checkout
                            </Link>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Coupon code"
                                />
                                <a
                                    href="#"
                                    className="btn text-white"
                                    style={{ backgroundColor: "#F8669E" }}
                                >
                                    Apply Coupon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PCart;
