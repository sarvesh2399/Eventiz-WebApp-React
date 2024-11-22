import React from 'react'

export const ShopTitle = ({subpage}) => {
  return (
    <div>
        <div className="container pt-5 pb-5">
            <div className="d-flex justify-content-center align-items-center text-center">
                <div>
                    <p className="event-section">
                        Eventiz
                    </p>
                    <h1 className="text-white">{subpage}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}
