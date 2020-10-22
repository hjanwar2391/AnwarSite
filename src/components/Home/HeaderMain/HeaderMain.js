import React from 'react';
import { Link } from 'react-router-dom';
// import chair from '../../../images/chair.png';
import chair1 from '../../../images/carousel-1.png';
import chair3 from '../../../images/carousel-2.png';
import chair2 from '../../../images/carousel-4.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Hello <br/> I am Aanwa</h1>
                <p className=" text-white"> I am a full-stack Web Application Developer and Software Developer, currently living in Dhaka, Bangladesh. My primary focus and inspiration for my studies is Web Development. In my free time, I study human computer interface and the psychology of human computer interaction. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.</p>
                <Link to="/" className="btn btn-brand">HIRE ME</Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={chair1} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={chair2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={chair3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;