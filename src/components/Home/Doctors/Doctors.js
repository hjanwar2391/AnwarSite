import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])


    // useEffect( () => {
    //     fetch('https://salty-plateau-71286.herokuapp.com/doctors')
    //     .then(res => res.json())
    //     .then(data => setDoctors(data))
    // }, [])

    return (
        <section className="doctors">
            <div className="container">
                    <h2 className="text-center  text-primary mb-5">Our Work</h2>
                <div className="row">
                    {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Doctors;