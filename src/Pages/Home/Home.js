import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Teams from './Teams/Teams';
import WhyUs from './WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhyUs/>
            <Services/>
            <Teams/>
        </div>
    );
};

export default Home;