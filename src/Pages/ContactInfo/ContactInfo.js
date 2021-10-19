
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// data staructuring 
const ContactInfo = (props) => {
    return (
        <div className='mt-3'>
            <div className='row'>
                <div className='col d-flex align-items-center justify-content-start'>
                    {/* icon  */}
                    <FontAwesomeIcon className='custom-icon custom-color custom-icon-size me-3' icon={props.icon}/>
                    {/* description */}
                        <div className='text-start ms-3'>
                            <h5>{props.children}</h5>
                            <p className='my-1'>{props.item1}</p>
                            <p className='my-1'>{props.item2}</p>
                        </div>
                        </div>
                        
                    </div>
        </div>
    );
};

export default ContactInfo;