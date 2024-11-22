import React from 'react'

export const Partners = () => {
    return (
        <>
    {/* Header Section */}
    <div className="container mt-5">
        <div className="d-flex justify-content-center align-items-center text-center">
            <div>
                <p className="event-section">Our Partners</p>
                <h1>
                    Our Perfect Partners &amp; <span className="clr">SPONSORS</span>
                </h1>
            </div>
        </div>

        {/* Partners Grid Section */}
        <div className="row mt-3">
            {/* Partner Columns */}
            {Array(4).fill(0).map((_, colIndex) => (
                <div className="col-12 col-md-6 col-lg-3" key={colIndex}>
                    {[...Array(2)].map((_, rowIndex) => (
                        <div
                            className="mb-4 partner-div d-flex align-items-center justify-content-center border"
                            key={rowIndex}
                        >
                            <img
                                className="partners-img w-100 h-auto"
                                src={`./images/Partners-img-${(rowIndex % 2) + 1}.png`}
                                alt={`Partner Image ${rowIndex + 1}`}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
</>

    )
}
