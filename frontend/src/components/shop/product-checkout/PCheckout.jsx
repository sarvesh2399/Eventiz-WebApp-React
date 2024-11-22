import React, { useEffect, useState } from 'react';

function PCheckout() {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        loadOrderSummary();
    }, []);

    const loadOrderSummary = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateSubtotal(savedCart);
    };

    const calculateSubtotal = (cartItems) => {
        const subtotalAmount = cartItems.reduce((acc, item) => {
            // Ensure that both price and quantity are valid numbers before adding
            const price = parseFloat(item.price);
            const quantity = parseInt(item.quantity, 10);

            // If either price or quantity is invalid, default them to 0
            if (!isNaN(price) && !isNaN(quantity)) {
                return acc + (price * quantity);
            }
            return acc;
        }, 0);

        setSubtotal(subtotalAmount);
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    {/* Billing Details */}
                    <div className="col-md-8 border p-3">
                        <h4 className="mb-4">Billing Details</h4>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">
                                    Country / Region <span className="text-danger">*</span>
                                </label>
                                <select className="form-select" id="country" defaultValue="India">
                                    <option value="India">India</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Street address <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    id="address"
                                    placeholder="House number and street name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="eMail" className="form-label">
                                    E-Mail <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="companyName"
                                    placeholder="abc@gmail.com"
                                />
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">
                                        Town / City <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="state" className="form-label">
                                        State <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        placeholder="State"
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label htmlFor="zipCode" className="form-label">
                                        ZIP Code <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="zipCode"
                                        placeholder="ZIP Code"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">
                                        Phone <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Order Summary */}
                    <div className="col-md-4">
                        <div className="border p-3 mb-3">
                            <h5>Your Order</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody id="order-summary">
                                    {cart.map((item, index) => {
                                        // Parse price and quantity to ensure no NaN value
                                        const price = parseFloat(item.price);
                                        const quantity = parseInt(item.quantity, 10);
                                        // Check for valid price and quantity
                                        const itemSubtotal = (!isNaN(price) && !isNaN(quantity)) ? (price * quantity) : "0.00";
                                        return (
                                            <tr key={index}>
                                                <td>{item.product_name} × {item.quantity}</td>
                                                <td>${itemSubtotal}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Subtotal</th>
                                        <th id="subtotal-price">${subtotal}</th>
                                    </tr>
                                    <tr>
                                        <th>Total</th>
                                        <th id="total-price">${subtotal}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="border p-3 text-center">
                            <a
                                href="/product-list"
                                className="btn text-white text-start"
                                style={{ backgroundColor: "#F8669E" }}
                            >
                                Purchase More
                            </a>
                        </div>
                        <div className="border p-3 text-center mt-3">
                            <a
                                href="#"
                                className="btn text-white text-start"
                                style={{ backgroundColor: "#F8669E" }}
                            >
                                Place Order
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PCheckout;
