import React from 'react';

const Team = ({team}) => {
    const { name, img, position, description} = team;
    return (
        
            <div className="col-md-4">
                <div className="card h-100 px-2 pt-5 pb-2 custom-service-box">
                    <img src={img} className="mx-auto custom-service-img card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h5 className="card-title">{position}</h5>
                        <h6 className="card-text text-muted">{description}</h6>
                        
                    </div>
                </div>
            </div>
    );
};

export default Team;