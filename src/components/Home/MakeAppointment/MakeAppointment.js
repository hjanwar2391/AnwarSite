import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/logos/Frame.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary text-uppercase ">Hello</h5>
                        <h1 className="my-4">I am James</h1>
                        <p> I am a full-stack Web Application Developer and Software Developer, currently living in Philadelphia, PA. I have a Bachelor of Science in Computer Science from Northeastern University, and my primary focus and inspiration for my studies is Web Development. In my free time, I study human computer interface and the psychology of human computer interaction. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole</p>
                    
                    <Link to='/about'>
                        <button className="btn btn-brand">Learn More</button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;