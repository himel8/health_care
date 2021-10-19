import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='custom-bg'>
            {/* banner section */}
            <div className='container'>
            <div className ='custom-text-size text-start'>
                {/* banner title */}
                <h1>Best medical services<br/> whole the country</h1>
                    {/* banner btn */}
                <Link to='/about'>
                <button className ='mt-3 btn btn-lg custom-btn' >Visit us</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Banner;