import React from 'react';
import './Indexs.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="mb-5 card-center services-card col-md-4  " style={{ height: 270 }}>
        <div className="card-body  text-center">
            
            <img style={{height: '90px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.title}</p>
        </div>
        </div>
        

        
    );
};

export default ServiceDetail;
