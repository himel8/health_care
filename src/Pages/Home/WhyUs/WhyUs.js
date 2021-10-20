import React from 'react';
import './WhyUs.css'

const WhyUs = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid custom-whyus-height' src="http://denthemes.com/themes/wp/viscareo/wp-content/uploads/2021/03/about-img-1.jpg" alt="" />
                    <h3>Dr. Andrew C</h3>
                    <p>Hospital Head</p>
                    <hr />
                </div>
                <div className="col-md-6 text-start">
                <h3>Who We Are</h3>
            <h1 className='custom-whyus-heding'>We are Achieve the Success of Treatment</h1>
            <p className='my-4 custom-whyus-description'>Clinical excellence must be the priority for any health care service provider. SQUARE Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.</p>
            <div>
            <div className="row">
                <div className="col-6">
                    <div className='d-flex justify-content-start align-items-center'>
                        <img className='custom-whyus-img me-3' src="https://i.ibb.co/BcTvDCW/doctor.png" alt="" />
                        <h5>Specialist Doctor</h5>
                    </div>
                </div>
                <div className="col-6">
                <div className='d-flex justify-content-start align-items-center'>
                        <img className='custom-whyus-img me-3' src="https://i.ibb.co/tq1Rg1z/pills.png" alt="" />
                        <h5>Certified Medicine</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <div className='d-flex justify-content-start align-items-center'>
                        <img className='custom-whyus-img me-3' src="https://i.ibb.co/d5SQQ1S/ambulance.png" alt="" />
                        <h5>Emergency Cases</h5>
                    </div>
                </div>
                <div className="col-6">
                <div className='d-flex justify-content-start align-items-center'>
                        <img className='custom-whyus-img me-3' src="https://i.ibb.co/CbcFDtD/support.png" alt="" />
                        <h5>24x7 Support</h5>
                    </div>
                </div>
            </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;