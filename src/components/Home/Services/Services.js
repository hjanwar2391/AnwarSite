import React from 'react';
import icon1 from '../../../images/icons/service1.png'
import icon2 from '../../../images/icons/service2.png'
import icon3 from '../../../images/icons/service3.png'
import icon4 from '../../../images/icons/service4.png'
import icon5 from '../../../images/icons/service5.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web Design',
        img: icon1,
        title:"Web Design must be impotent for look beautyFull Web site so we can Design your won website"
    },
    {
        name: 'Web Development',
        img: icon2,
        title: "Web site can't be run without web Development , so is impotent and we solves it"
    },
    {
        name: 'Database',
        img: icon3,
        title: "Database must be need a good web site. We Can't store data without database so is more more impotent "
    },
    {
        name: 'Firebase',
        img: icon4,
        title: "Firebase is impotent for store our user login information so is must"
    },
    {
        name: 'Responsive',
        img: icon5,
        title: "Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size,  "
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;