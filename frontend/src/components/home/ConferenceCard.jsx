import React from 'react'
export const ConferenceCard = () => {
    return (
        <div>
            <div className="row bg-light">
                <div className="col-sm">
                    <div
                        className="timing m-3 text-white card d-flex justify-content-center"
                        style={{ backgroundColor: "#ff4081", height: 170 }}
                    >
                        <p>8:00 AM - 9:00 AM</p>
                        <h4>Opening Ceremony</h4>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="event-details m-3">
                        <h3 className="text-primary">Introduce The Event</h3>
                        <p className="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <p className="text-primary">
                            📍 Exploration Hall | 📍 Hall 01
                        </p>
                    </div>
                </div>
                <div className="col-sm  d-flex  justify-content-center">
                    <div className="speaker-info m-3 d-flex align-items-center ">
                        <img
                            className="round-img"
                            src="./images/img-4.jpg"
                            alt="Speaker Image"
                        />
                        <div>
                            <h5 className="speaker-name">Jesus Holland</h5>
                            <p className="text-secondary">Host &amp; Speaker</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

