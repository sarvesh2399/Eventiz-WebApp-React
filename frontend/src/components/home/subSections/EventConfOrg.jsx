import React from 'react'
import { ConferenceCard } from '../ConferenceCard'

export const EventConfOrg = () => {
    return (
        <div className="event-conf">
            <p className="event-section">Event Conference Organisation</p>
            <h1>
                List Of Planned Events That <br /> Are{" "}
                <span className="clr">EXPECTED</span>
            </h1>
            <ConferenceCard />
            <hr />
            <ConferenceCard />
            <hr />
            <ConferenceCard />
        </div>
    )
}
