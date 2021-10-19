import React from 'react';

import AboutSection from '../AboutSection/AboutSection';
import Teams from '../Home/Teams/Teams';
import './About.css'

const About = () => {
    const img1='https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
    const img2 ='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80';

    // toggle flex  
    const displayFlex = 'custom-flex'
    return (
        <div className='container'>
            
                {/* about title  */}
                <h1 className='my-3 custom-header-text'>About us</h1>
                <Teams/>
                {/* First About section  */}
                <AboutSection img={img2}>Who We Are</AboutSection>
                {/* second About section  */}
                <AboutSection img={img1} display={displayFlex}>Our Vision</AboutSection>
            
        </div>
    );
};

export default About;