import React from 'react'
export const JoinExpoCard = ({ iconClass, text }) => {
    return (
        <div>
            <div className="row mb-4">
                <div className="col-lg-6 mx-auto">
                    {/* Card 1 */}
                    <div className="card p-0 d-flex flex-row align-items-center">
                        <div className="icon-box">
                            <i className={iconClass} style={{ fontSize: 40 }} />
                        </div>
                        <div className="me-4">
                            <p className="mb-0">{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


