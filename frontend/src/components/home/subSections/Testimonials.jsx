import React from 'react'

export const Testimonials = () => {
    return (
        <>
            <div>
                <p className="event-section">Our Testimonials</p>
                <h1>
                    What Peoples's Says About <br /> <span className="clr">EVENTIZ</span>
                </h1>
            </div>
            <div className="row mt-5">
                <div className="col-sm d-flex justify-content-center align-items-center">
                    <div
                        id="carouselExampleSlidesOnly"
                        className="carousel slide"
                        data-bs-ride="carousel"
                        data-bs-interval={2000}
                    >
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active"
                                style={{ backgroundColor: "#eff6ff" }}
                            >
                                <div className="m-3">
                                    <p></p>
                                    <h1>"</h1>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem ipsum a simple Lorem Ipsum has
                                    been the industry's standard dummy hic et quidem.
                                    <p />
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="./images/img-4.jpg"
                                            alt="Author"
                                            className="round-img"
                                        />
                                        <div>
                                            <div className=" clr">Jared Erondu</div>
                                            <div className="">Supervisor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="carousel-item"
                                style={{ backgroundColor: "#eff6ff" }}
                            >
                                <div className="m-3">
                                    <p></p>
                                    <h1>"</h1>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem ipsum a simple Lorem Ipsum has
                                    been the industry's standard dummy hic et quidem.
                                    <p />
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="./images/img-5.jpg"
                                            alt="Author"
                                            className="round-img"
                                        />
                                        <div>
                                            <div className=" clr">Jared Erondu</div>
                                            <div className="">Supervisor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center mb-4">
    <img
        className="testimonial-1 w-100 h-auto"
        src="./images/testimonial-1.png"
        alt="Testimonial"
    />
</div>

            </div></>
    )
}
