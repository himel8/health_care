import React from 'react';
import useService from '../../../Hooks/useService';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useService();
    return (
        <div className='custom-service-bg py-5'>
            <div className='container'>
            <div className="row mb-2">
                <div className="col">
                    <h5 className="text-muted">Services</h5>
                    <h1 className='custom-whyus-heding'>Our Departments</h1>
                    <p className="text-muted">It has survived not only five centuries, but also the leap into electronic<br/> typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <div className="row g-3 mb-5">
                {
                    services.map(service => <Service key={service.id} service={service}/>)
                }
            </div>

        </div>
        </div>
    );
};

export default Services;