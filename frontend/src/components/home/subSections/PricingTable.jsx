import React from 'react';
import { Link } from 'react-router-dom';

export const PricingTable = () => {
    return (
        <div>
            <div>
                <p className="event-section">Pricing Table</p>
                <h1>
                    Explore Flexible Our Pricing <br /> <span className="clr">PLANS</span>
                </h1>
            </div>
            <div className="mt-5">
                <div className="row justify-content-center">
                    {/* Basic Ticket */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card text-center border-0 shadow">
                            <div className="card-body">
                                <h2 className="card-title">Basic Ticket</h2>
                                <p className="card-subtitle mb-2 text-muted">
                                    Standard Package
                                </p>
                                <h1 className="price clr">
                                    $39.<span>99</span>
                                </h1>
                                <p className="">Person</p>
                                <ul className="list-unstyled">
                                    <li>Second Balcony Seat</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Snack &amp; Softdrink</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Certificates</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Private Access</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="#" className="a-tag mb-2">
                                        Purchase
                                    </Link>
                                </div>
                                <p className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
                                    *Please read our terms and conditions before ordering a ticket
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Silver Ticket */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card text-center border-0 shadow bg-primary text-white">
                            <div className="card-body">
                                <h2 className="card-title">Silver Ticket</h2>
                                <p className="card-subtitle mb-2">Pro Package</p>
                                <h1 className="price clr">
                                    $59.<span>99</span>
                                </h1>
                                <p className="">Person</p>
                                <ul className="list-unstyled">
                                    <li>Second Balcony Seat</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Snack &amp; Softdrink</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Certificates</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Printed Materials</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Private Access</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="#" className="a-tag mb-2">
                                        Purchase
                                    </Link>
                                </div>
                                <p className="mt-2 text-light" style={{ fontSize: "0.8rem" }}>
                                    *Please read our terms and conditions before ordering a ticket
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Gold Ticket */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card text-center border-0 shadow">
                            <div className="card-body">
                                <h2 className="card-title">Gold Ticket</h2>
                                <p className="card-subtitle mb-2 text-muted">
                                    Enterprise Package
                                </p>
                                <h1 className="price clr">
                                    $199.<span>99</span>
                                </h1>
                                <p className="">Person</p>
                                <ul className="list-unstyled">
                                    <li>Second Balcony Seat</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Snack &amp; Softdrink</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Certificates</li>
                                    <hr style={{ borderTop: "dotted 1px" }} />
                                    <li>Private Access</li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <Link to="#" className="a-tag mb-2">
                                        Purchase
                                    </Link>
                                </div>
                                <p className="mt-2 text-muted" style={{ fontSize: "0.8rem" }}>
                                    *Please read our terms and conditions before ordering a ticket
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
