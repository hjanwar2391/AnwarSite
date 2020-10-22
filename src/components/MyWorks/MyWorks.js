import React from 'react';
import { Link } from 'react-router-dom';

const MyWorks = ({mySkills}) => {

    return (
        <div className=" mb-5 pb-5 card-center services-card col-md-4 " style={{ height: 340 }}>
            <div className="card-body  text-center">
                <img style={{height: '100px'}} src={mySkills.img} alt="" />
                <h5 className="mt-3 mb-3">{mySkills.name}</h5>
                <p className="text-secondary">{mySkills.title}</p>
                <Link  to="/myWork">
                    <button className="btn btn-brand">..Live Link..</button>
                </Link>
            </div>
        </div>
     );
};

export default MyWorks;