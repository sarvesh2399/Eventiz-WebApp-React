import React from 'react'

export const ReachUs = () => {
    return (
        <>
            <div className="row mb-5">
                <div className="col-sm">
                    <div className="mb-5">
                        <p className="event-section">Reach Us</p>
                        <h1>
                            Get Direction To The <br />
                            Event <span className="clr">LOCATION</span>
                        </h1>
                    </div>
                    <div className="container row bg-light" style={{ height: 120 }}>
                        <div className="col-3 p-0 d-flex align-items-center justify-content-center bg-clr">
                            <i
                                className="fa fa-map-marker text-white"
                                style={{ fontSize: 50 }}
                            />
                        </div>
                        <div className="col">
                            <h3 className="text-primary">Galleria Mall Conference Center</h3>
                            <p className="text-secondary">
                                19 By Pass NR, Bali, Indonesia, BC 22196
                            </p>
                        </div>
                    </div>
                    <div className="container row bg-light mt-4" style={{ height: 120 }}>
                        <div className="col-3 p-0 d-flex align-items-center justify-content-center bg-clr">
                            <i
                                className="fa fa-map-marker text-white"
                                style={{ fontSize: 50 }}
                            />
                        </div>
                        <div className="col">
                            <h3 className="text-primary">Reception Info</h3>
                            <p className="text-secondary">
                                Phone Number: (+62) 1919-2022, (+62) 1919-2023
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                            style={{ height: 450, width: "100%" }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}
