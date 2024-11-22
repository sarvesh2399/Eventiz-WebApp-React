import React, { useState, useEffect } from 'react';

export const CountDown = ({ timeLeft: initialTimeLeft }) => {
    const targetDate = new Date("2027-12-31T23:59:59"); // Set your target date here

    const calculateTimeLeft = () => {
        const now = new Date();
        const timeDifference = targetDate - now;

        if (timeDifference <= 0) return null;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            {/* TIMER START */}
            <div className="container-fluid" style={{ position: "relative", top: "-50px", overflowX: "hidden" }}>
                <div className="row">
                    <div className="col-md-8 bg-clr">
                        <div className="row timer bg-clr d-flex align-items-center">
                            <div className="col-sm countdown-item">
                                <span className="time">{timeLeft ? String(timeLeft.days).padStart(2, '0') : '00'}</span>
                                <span className="label">Days</span>
                            </div>
                            <div className="col-sm countdown-item">
                                <span className="time">{timeLeft ? String(timeLeft.hours).padStart(2, '0') : '00'}</span>
                                <span className="label">Hours</span>
                            </div>
                            <div className="col-sm countdown-item">
                                <span className="time">{timeLeft ? String(timeLeft.minutes).padStart(2, '0') : '00'}</span>
                                <span className="label">Minutes</span>
                            </div>
                            <div className="col-sm countdown-item">
                                <span className="time">{timeLeft ? String(timeLeft.seconds).padStart(2, '0') : '00'}</span>
                                <span className="label">Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">{/* One of three columns */}</div>
                </div>
            </div>
            {/* TIMER END */}
        </div>
    )
}