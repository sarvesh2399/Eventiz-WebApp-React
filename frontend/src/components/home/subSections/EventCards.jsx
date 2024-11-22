import React from 'react';
import { EventCardsCard } from './HomeReusables/EventCardsCard';
import { Link } from 'react-router-dom';

export const EventCards = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm">
                    <EventCardsCard
                        icon="👥"
                        title="Event Conferences"
                        text="Duis aute irure dolor in reprehenderit"
                        linkText="Learn More"
                        linkHref="#"
                    />
                    <EventCardsCard
                        icon="🚩"
                        title="Culture Leadership"
                        text="Duis aute irure dolor in reprehenderit"
                        linkText="Learn More"
                        linkHref="#"
                        className="mt-4 mb-4"
                    />
                </div>
                {/* Column with a single centered card */}
                <div className="col-sm mb-4 d-flex align-items-center justify-content-center">
                    <EventCardsCard
                        icon="⚙️"
                        title="Digital Marketing"
                        text="Duis aute irure dolor in reprehenderit"
                        linkText="Learn More"
                        linkHref="#"
                    />
                </div>
                <div className="col-sm d-flex align-items-center justify-content-center">
                    <div>
                        <h1>
                            Why You Should Join The <span className="clr">EVENTS?</span>
                        </h1>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="d-flex justify-content-center mt-5 mb-4">
                            <Link to="#" className="a-tag">
                                Join Event &gt;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
