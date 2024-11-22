import React from 'react'
import { EventSnapshots } from '../EventSnapshots'

export const EventGallery = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center text-center" style={{ marginTop: 120 }}>
                <div>
                    <p className="event-section">Event Gallery</p>
                    <h1 className="">
                        Beautiful Snapshot Of Recent <br />
                        <span className="clr">EVENTS</span>
                    </h1>
                </div>
            </div>
            <EventSnapshots /></>
    )
}
