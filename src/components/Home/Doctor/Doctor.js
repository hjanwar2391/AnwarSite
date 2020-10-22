import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Doctor = ({service}) => {
    return (
        <div className=" mb-5 pb-5 card-center services-card col-md-3 " style={{ height: 340 }}>
        <div className="card-body  text-center">
            
            <img style={{height: '90px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.title}</p>
            <Link  to="/myWork">
                <button className="btn btn-brand">See My Work</button>
            </Link>
        </div>
        </div>
    );
};

export default Doctor;