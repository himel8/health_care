import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    
    const {id, name, img, short_description} = service;
    return (
            <div className="col-md-4">
                <div className="card h-100 px-2 pt-5 pb-2 custom-service-box">
                    <img src={img} className="mx-auto custom-service-img card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-text text-muted">{short_description}</h6>
                        <Link to={`/service/${id}`}><button className='mt-3 btn btn-lg custom-btn'>Learn more</button></Link>
                    </div>
                </div>
            </div>
    
    );
};

export default Service;