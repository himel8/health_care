import { faCheck, faEnvelope, faMapMarkerAlt, faPhoneAlt, faTimes, faTty } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='custom-login-bg text-light text-start'>
            <div className="container">
                <div className="row pb-5 custom-line">
                    {/* footer 1 part  */}
                    <div className="col-md-4">
                        <h1 className='my-3'>Health Care</h1>
                        <hr />
                        <p>Health Care is committed to render the possible standard service to the people of the country at an affordable cost. This will definitely reduce the burden of the government and will make the path of "Health for all".
                        </p>
                        <div className='d-flex justify-content-start align-items-center mb-2'>
                        <p className='me-2'><FontAwesomeIcon icon={faTty} /></p>
                        <p>+1 202 555 0191</p>
                        </div>
                        <div className='d-flex justify-content-start align-items-center mb-2'>
                        <p className='me-2'><FontAwesomeIcon icon={faPhoneAlt} /></p>
                        <p>+1 (201) 555-0123</p>
                        </div>
                        <div className='d-flex justify-content-start align-items-center mb-2'>
                        <p className='me-2'><FontAwesomeIcon icon={faEnvelope} /></p>
                        <p>info@domain.com</p>
                        </div>
                        <div className='d-flex justify-content-start align-items-center mb-2'>
                        <p className='me-2'><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                        <p>Flat 25, King Street, California.</p>
                        </div>
                    </div>
                     {/* footer 2 part  */}
                    <div className="col-md-4 depertment-link">
                        <div className="ms-4">
                        <h1 className='my-3'>Departments</h1>
                        <hr />
                        <Link to='/services'>
                         <p className='mb-3'>Blood Test Department</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Body Surgery Department</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Cardiology Department</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Corona Test Department</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Children’s Emergency</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Neurology Department</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Urology Department</p>
                        </Link>
                        <Link to='/services'>
                         <p className='mb-3'>Valve Diseases Department</p>
                        </Link>
                        </div>
                    </div>
                     {/* footer 3 part  */}
                    <div className="col-md-4">
                        <h1 className='my-3'>Opening Hours</h1>
                        <hr />
                        <div className='custom-time-bg px-5 pt-3 pb-2'>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faCheck} /></p>
                            <p>Mon : 9:00 AM - 9:00 PM</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faCheck} /></p>
                            <p>Tues : 9:00 AM - 9:00 PM</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faCheck} /></p>
                            <p>Wed : 9:00 AM - 9:00 PM</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faCheck} /></p>
                            <p>Thurs : 9:00 AM - 9:00 PM</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faCheck} /></p>
                            <p>Fri : 9:00 AM - 9:00 PM</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faCheck} /></p>
                            <p>Sat : 9:00 AM - 9:00 PM</p>
                            </div>
                            <div className='d-flex justify-content-start align-items-center mb-2'>
                            <p className='me-2'><FontAwesomeIcon icon={faTimes} /></p>
                            <p>Sunday : Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* little footer  */}
            <h5 className='py-3'>© 2021 Viscareo All Rights Reserved By Health Care</h5>
        </div>
    );
};

export default Footer;