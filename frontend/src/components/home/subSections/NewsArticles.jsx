import React from 'react';
import { Link } from 'react-router-dom';

export const NewsArticles = () => {
    return (
        <>
            <div className='mb-5'>
                <div className="d-flex justify-content-center align-items-center text-center">
                    <div>
                        <p className="event-section">Our News &amp; Articles</p>
                        <h1 className="">
                            Our News &amp; <span className="clr">ARTICLES</span>
                        </h1>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-sm">
                        <div className="card text-start">
                            <div>
                                <img
                                    src="./images/article-1.jpg"
                                    className="card-img-top"
                                    alt="Blog Image"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    How To Optimize Your Blog For High Ranking
                                </h5>
                                <Link to="#" className="clr" style={{ textDecoration: "none" }}>
                                    CONTINUE READING
                                </Link>
                            </div>
                            <div className="card-footer">August 25, 2022 | No Comments</div>
                        </div>
                    </div>
                    {/* ----------------------- */}
                    <div className="col-sm">
                        <div className="card text-start">
                            <div>
                                <img
                                    src="./images/article-2.jpg"
                                    className="card-img-top"
                                    alt="Blog Image"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    How To Optimize Your Blog For High Ranking
                                </h5>
                                <Link to="#" className="clr" style={{ textDecoration: "none" }}>
                                    CONTINUE READING
                                </Link>
                            </div>
                            <div className="card-footer">August 25, 2022 | No Comments</div>
                        </div>
                    </div>
                    {/* ----------------------- */}
                    <div className="col-sm">
                        <div className="card text-start">
                            <div>
                                <img
                                    src="./images/article-1.jpg"
                                    className="card-img-top"
                                    alt="Blog Image"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    How To Optimize Your Blog For High Ranking
                                </h5>
                                <Link to="#" className="clr" style={{ textDecoration: "none" }}>
                                    CONTINUE READING
                                </Link>
                            </div>
                            <div className="card-footer">August 25, 2022 | No Comments</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
