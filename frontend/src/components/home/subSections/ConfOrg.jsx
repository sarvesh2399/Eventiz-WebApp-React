import React from 'react';
import { Link } from 'react-router-dom';

export const ConfOrg = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Text Section */}
                <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                    <div>
                        <p className="event-section">Conference Organisation</p>
                        <h1 className="mb-4">
                            Conference,
                            <br />
                            Seminars &amp; <span className="clr">EVENTS</span>
                        </h1>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ip suspendisse ultrices gravida. Risus commodo.
                        </p>
                        <div className="d-flex justify-content-center mt-5 mb-4">
                            <Link to="#" className="a-tag">
                                Discover Now &gt;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Image Section 1 */}
                <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                    <div className="image-section">
                        <img className="one w-100 h-auto" src="./images/img-1.jpg" alt="Event Image 1" />
                    </div>
                </div>

                {/* Image Section 2 */}
                <div className="col-12 col-lg-4">
                    <div className="image-section d-flex align-items-center justify-content-center mb-4">
                        <img className="two w-100 h-auto" src="./images/img-2.jpg" alt="Event Image 2" />
                    </div>
                    {/* Secondary Image */}
                    <div className="image-section d-flex align-items-center justify-content-center">
                        <img className="three w-100 h-auto" src="./images/img-3.jpg" alt="Event Image 3" />
                    </div>
                </div>
            </div>
        </div>
    );
};
