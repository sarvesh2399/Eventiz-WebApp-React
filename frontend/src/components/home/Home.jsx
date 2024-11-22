import React from 'react';
import { CountDown } from './subSections/CountDown';
import { EventCards } from './subSections/EventCards';
import { ConfOrg } from './subSections/ConfOrg';
import { EventConfOrg } from './subSections/EventConfOrg';
import { FeatSpeaker } from './subSections/FeatSpeaker';
import { PricingTable } from './subSections/PricingTable';
import { JoinExpo } from './subSections/JoinExpo';
import { EventGallery } from './subSections/EventGallery';
import { Testimonials } from './subSections/Testimonials';
import { Partners } from './subSections/Partners';
import { NewsArticles } from './subSections/NewsArticles';
import { ReachUs } from './subSections/ReachUs';
import { StatsSection } from './subSections/StatsSection';

function home() {

    return (
        <div>
            <CountDown />;
            <main>
                <div className="container">
                    {/* event section start */}
                    <EventCards />
                    {/* Conference section Start */}
                    <ConfOrg />
                    {/* Stats section start */}
                    <StatsSection />
                    {/* Event Conference Organisation Start */}
                    <EventConfOrg />
                    {/* Featured Speaker Start */}
                    <FeatSpeaker />
                    {/* Pricing Table Start */}
                    <PricingTable />
                </div>
                {/* Join Expo 2024 Start */}
                <JoinExpo />
                <div className="container">
                    {/* Event Gallery Start */}
                    <EventGallery />
                    {/* Our Testimonials Start */}
                    <Testimonials />
                    {/* Our Partners Start */}
                    <Partners />
                    <hr style={{ borderTop: "dotted 1px" }} />
                    {/* Our News & Articles Start */}
                    <NewsArticles />
                    {/* Reach Us Start */}
                    <ReachUs />
                </div>
            </main>
        </div>
    )
}
export default home