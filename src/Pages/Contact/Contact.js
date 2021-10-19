import {  faMapMarkedAlt, faPhone, faUserClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';

const Contact = () => {
    return (
        // contact section 
        <div className='custom-contact-margin'>
            <div className='container'>
                {/* contact title  */}
                <h1 className='mb-5 custom-header-text'>Contact</h1>
                <div className='row'>
                    {/* contact first column  */}
                    <div className='col-md-7 col-xs-12 col-sm-12 text-start'>
                        <h4>Send a Message</h4>
                        <from className=''>
                            <div className="from-group mb-3" controlId="formBasicEmail">
                                <input className='form-control' type="text" placeholder="Your name" />
                            </div>
                            <div className="from-group mb-3" controlId="formBasicEmail">
                                <input className='form-control' type="email" placeholder="Your email" />
                            </div>
                            <div className="from-group mb-3" controlId="formBasicPassword">
                                <textarea  className='form-control' type="textarea" rows={5} placeholder="Your massage" />
                            </div>
                            <button className=' btn btn-lg custom-btn'  type="submit">
                                Submit
                            </button>
                        </from>
                    </div>
                    {/* contact second column  */}
                    <div className='col-md-4 col-xs-12 col-sm-12 ms-5 mb-5 '>
                    <h4 className='text-start ms-5'>Contact Info</h4>
                    {/* contact info component  */}
                    <ContactInfo item1='Phone: +780 123 452' item2= 'Mail: contact@eduskill.com' icon={faPhone}>Contact Details
                    </ContactInfo>
                    {/* contact info component  */}
                    <ContactInfo item1='PO Box 97845 Baker st. 567' item2= 'Los Angeles, California, US.' icon={faMapMarkedAlt}>Location</ContactInfo>
                    {/* contact info component  */}
                    <ContactInfo item1='Monday-Friday' item2='10:30am-7:00pm' icon={faUserClock}>Opening Hours</ContactInfo>
            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;