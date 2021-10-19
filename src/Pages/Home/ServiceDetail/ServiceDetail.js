import React from 'react';
import { useParams } from 'react-router';
import useService from '../../../Hooks/useService';
import './ServiceDetail.css';
const ServiceDetail = () => {
    
    const [services] = useService();
    const {serviceId} = useParams();
    return (
        <div className='container'>
            {services.filter(pd => pd.id == serviceId).map(
                service=>(
                    <div><img className='custom-detail-img' src={service.img} alt="" />
                    <div>
                        <h1>{service.name}</h1>
                        <p>{service.detailed_description}</p>
                    </div>
                    </div>
                    
                )
            )}
        </div>
    );
};

export default ServiceDetail;