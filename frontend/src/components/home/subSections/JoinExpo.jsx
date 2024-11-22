import React from 'react'
import { JoinExpoCard } from './HomeReusables/JoinExpoCard'

export const JoinExpo = () => {
    return (
        <div className='background-expo'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center text-center">
                    <div>
                        <p className="event-section">Join Expo 2024</p>
                        <h1 className="text-white">
                            Join Us At 20th Hero Nada <br /> Expo{" "}
                            <span className="clr">2024</span>
                        </h1>
                    </div>
                </div>
                <div className="mt-5">
                    <JoinExpoCard
                    iconClass="fa fa-calendar"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis" />
                    <JoinExpoCard
                    iconClass="fa fa-phone"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis" />
                </div>
            </div>
            <div className="container video-container">
                {/* Card 3 */}
                <div className="d-flex justify-content-center">
                    <video
                        src="./images/video1.mp4"
                        className="w-75"
                        style={{ border: "10px solid white" }}
                        controls="true"
                    />
                </div>
            </div>
        </div>)
}
