import React from 'react';
import { Link } from 'react-router-dom';

export const FeatSpeaker = () => {
    return (
        <div className="container">
            <div className="col-sm d-flex align-items-center justify-content-center mb-4 mt-5">
                <div>
                    <p className="event-section">Featured Speaker</p>
                    <h1 className="mb-4">
                        Experience Speaker With <br />{" "}
                        <span className="clr">KNOWLEDGE</span>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm d-flex align-items-center justify-content-center">
                    <div className="image-section">
                        <img
                            className="speak-1"
                            src="./images/speaker-1.jpg"
                            alt="Event Image 1"
                        />
                    </div>
                </div>
                <div className="col-sm">
                    <div className="image-section d-flex align-items-center justify-content-center">
                        <img
                            className="speak-2"
                            src="./images/speaker-2.jpg"
                            alt="Event Image 2"
                        />
                    </div>
                    {/* ----------------------- */}
                    <div className="mt-4 image-section d-flex align-items-center justify-content-center">
                        <img
                            className="speak-3"
                            src="./images/speaker-3.jpg"
                            alt="Event Image 3"
                        />
                    </div>
                </div>
                <div className="col-sm">
                    <div className="image-section d-flex align-items-center justify-content-center">
                        <img
                            className="speak-4"
                            src="./images/speaker-4.jpg"
                            alt="Event Image 2"
                        />
                    </div>
                    {/* ----------------------- */}
                    <div className="mt-4 image-section d-flex align-items-center justify-content-center">
                        <img
                            className="speak-5"
                            src="./images/speaker-5.jpg"
                            alt="Event Image 3"
                        />
                    </div>
                </div>
                <div className="col-sm d-flex align-items-center justify-content-center">
                    <div className="image-section">
                        <img
                            className="speak-6"
                            src="./images/speaker-6.jpg"
                            alt="Event Image 1"
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5 mb-4">
                    <Link to="#" className="a-tag">
                        View All Speakers &gt;
                    </Link>
                </div>
            </div>
        </div>
    );
};
