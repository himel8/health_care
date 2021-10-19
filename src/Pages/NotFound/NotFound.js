import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='mb-5'>
           <div>
           <img className='custom-404-img' src="https://www.boostability.com/content/wp-content/uploads/sites/2/2012/10/BOOST_BLOG_IMAGE_RB_SET_10_404_PAGE_1200x628px_v1_3.jpg" alt="" />
           </div>
           <Link to='/home'>
            <button className='btn btn-primary px-5 fw-bold'>Return Home</button>
           </Link> 
        </div>
    );
};

export default NotFound;