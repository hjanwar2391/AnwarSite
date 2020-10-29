import React from 'react';
import project3 from "../../../img/CREA.png";
import project4 from "../../../img/DOCTOR.png";


import skill1 from "../../../img/html5.png";
import skill2 from "../../../img/react.png";
import skill3 from "../../../img/haml.png";
import skill4 from "../../../img/jade.png";
import skill5 from "../../../img/jekyll.png";
import skill6 from "../../../img/ruby.png";
import skill7 from "../../../img/rails.png";
import skill8 from "../../../img/minitest.png";
import skill9 from "../../../img/postgresql.png";
import skill10 from "../../../img/mongodb.png";
import skill11 from "../../../img/css3.png";
import skill12 from "../../../img/sass.png" ;
import skill13 from "../../../img/bootstrap.png";
import skill14 from "../../../img/foundation.png";
import skill15 from "../../../img/materialize.png";
import skill16 from "../../../img/react.png";
import skill17 from "../../../img/javascript.png";
import skill18 from "../../../img/jquery.png";
import skill19 from "../../../img/angular.png";
import skill20 from "../../../img/nodejs.png" ;
import skill21 from "../../../img/ionic.png";
import skill22 from "../../../img/heroku.png";
import skill23 from "../../../img/photoshop.png" ;
import skill24 from "../../../img/fcpx.png"  ;



       



 
 













                            
                            
                            


const Home = () => {
    return (
        <div>
            <section id="intro" className="section scrollspy full-height">
                <div className="overlay"></div>
                <div className="container">
                    <h1>
                        I want to <span className="teal">make Newthings</span><br/>that
                        <span className="underline">make a difference</span>.
                    </h1>
                </div>
            </section>
            <section id="about" className="section scrollspy">
                <h3 className="page-title white-text teal">About</h3>
                <div className="container flow-text">
                    <blockquote>
                        <h2>
                            Mission-driven full stack developer with a passion for thoughtful
                            Design, React, and MongoDb.
                        </h2>
                    </blockquote>
                    <p>
                    I am a full-stack Web Application Developer and Software Developer, currently living in Dhaka, Bangladesh. My primary focus and inspiration for my studies is Web Development. and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
                    </p>
                    <p>
                        As a web developer, I enjoy using my obsessive attention to detail,
                        my unequivocal love for making things, and my mission-driven work
                        ethic to literally change the world. That's why I’m excited to make
                        a big impact at a high growth company.
                    </p>
                    <p>
                        <strong>Current Focus</strong>:&nbsp;<a aria-label="Navigate to the Full Stack React homepage" href="/">React</a>&nbsp;//&nbsp;<a aria-label="Navigate to the article &quot;Scalable CSS&quot;" href="/">Design Systems</a>
                    </p>
                </div>
            </section>
            {/* <section id="experience" className="section scrollspy">
                <h3 className="page-title white-text teal">Experience</h3>
                <div className="container ">
                    <div className="card ">
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12 m2">
                                    <a href="http://wespire.com" target="_blank"><img alt="WeSpire logo" src={img1} className="responsive-img center-block"/></a>
                                </div>
                                <div className="col s12 m10">
                                    <p>
                                        <span className="card-title"><a href="http://wespire.com" target="_blank" className="teal-text hoverline">Wespire</a></span>
                                    </p>
                                </div>
                            </div>
                            <div className="role brown-text">Full-Stack React Developer</div>
                                    <p>
                                        <em className="grey-text">SaaS platform that enables enterprise companies to build,
                                        run, and measure their positive impact campaigns</em>
                                    </p>
                                <h6>Develop Product</h6>
                                <ul>
                                    <li>
                                        Contribute core features across entire stack (20k+ lines of
                                        code, 250+ pulls)
                                    </li>
                                    <li>
                                        Lead front-end development, creating and documenting app-wide
                                        design system
                                    </li>
                                    <li>
                                        Oversee transition from page-based styles to modular component
                                        styles
                                    </li>
                                    <li>
                                        Guide best practices around accessible, semantic UI/UX

                                    </li>
                                    <li>
                                        Tools:  React, JS, jQuery // Sass //
                                        HTML, CSS3.
                                    </li>
                                </ul>
                                <h6>Accomplishments</h6>
                                <ul>
                                    <li>
                                        Dramatically increased speed of UI development using atomic,
                                        scalable CSS
                                    </li>
                                    <li>
                                        Built tool to convert HRIS data into user accounts to simplify
                                        onboarding
                                    </li>
                                    <li>
                                        Implemented inline @tagging feature to increase app
                                        share-ability
                                    </li>
                                </ul>
                        </div>
                        <div className="card-action">
                            <span>Agu 2020 - Present | Dhaka, BD</span>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id="projects" className="section scrollspy">
                <h3 className="page-title white-text teal">Projects</h3>
                
                <div className="container ">
                    <div className="row">
                        <div classNameName="col-12">
                            
                            <div className="col s12 m6 l4">
                                <div className="card medium">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Code Island logo" src={project3} className="activator"/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator teal-text hoverline">Doctor Portal<i className="mdi-navigation-more-vert right"></i></span>
                                        <p>
                                        Beautiful layout and responsive design. So that the user is fascinated. 
                                        </p>
                                       <a href="https://doctors-protal.web.app/" className="fa fa-external-link"></a> <a href="https://github.com/HJAnwar/doctors-portal-server" className="fa fa-github font-dark"></a>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title brown-text">Accomplishments<i className="mdi-navigation-close right"></i></span>
                                    <ul>
                                        <li>
                                        Integrated “Next Meeting” via <strong>Meetup API</strong>
                                        </li>
                                        <li>
                                        Developed <strong>CSS and JS</strong> responsive menu
                                        </li>
                                        <li>Created member list via <strong>GitHub API</strong></li>
                                        <li>Refreshed branding and layout</li>
                                        <li>
                                        Refactored all existing code (<strong>Jekyll</strong>)
                                        </li>
                                    </ul>
                                        <div className="card-action">
                                            <a aria-label="Visit Code Island website" href="http://code-island.org" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-external-link"></i></a><a aria-label="Visit the GitHub repo for Code Island project" href="http://github.com/andrewborstein/code-island.org" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            <div className="col s12 m6 l4">
                                <div className="card medium">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img alt="Zach Morris from Saved by the Bell, on his clunky cell phone" src={project4} className="activator"/>
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator teal-text hoverline">Creative Agency<i className="mdi-navigation-more-vert right"></i></span>
                                        <p>
                                        This is the IT service center. Where anyone can buy the service he/she
                                        </p>
                                        <a href="https://creative-agency2391.web.app/" className="fa fa-external-link"></a> <a href="https://github.com/HJAnwar/creative-agency-clientr" className="fa fa-github font-dark"></a>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title brown-text">Accomplishments<i className="mdi-navigation-close right"></i></span>
                                        <ul>
                                            <li>Built with Ruby on <strong>Rails</strong></li>
                                            <li>Integrated <strong>Twilio API</strong></li>
                                            <li>Designed in <strong>Bootstrap</strong></li>
                                            <li><strong>Javascript</strong> input validation</li>
                                        </ul>
                                        <div className="card-action">
                                            <a aria-label="Visit Saved By The Test web app" href="http://savedbythetext.herokuapp.com" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-external-link"></i></a><a aria-label="Visit the GitHub repo for Saved By the Text project" href="http://github.com/andrewborstein/saved-by-the-text" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="section scrollspy">
                <h3 className="page-title white-text teal">Skills</h3>
                <div className="container">
                    <div className="card">
                        <div className="card-content">
                            <h4 className="brown-text light">HTML</h4>
                            <div className="row text-center">
                                <div className="col s4 m2">
                                    <img alt="" src={skill1} className="responsive-img"/>HTML5
                                </div>
                                <div className="col s4 m2">
                                    <img alt="" src={skill2} className="responsive-img"/>JSX
                                </div>
                                {/* <div className="col s4 m2">
                                    <img alt="" src={skill3} className="responsive-img"/>Haml
                                </div>
                                <div className="col s4 m2">
                                    <img alt="" src={skill4} className="responsive-img"/>Jade
                                </div>
                                <div className="col s4 m2">
                                    <img alt="" src={skill5} className="responsive-img"/>Jekyll
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                        <h4 class="brown-text light">CSS</h4>
                        <div class="row text-center">
                            <div class="col s4 m2">
                            <img alt="" src={skill11} class="responsive-img"/>CSS3
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill12} class="responsive-img"/>SASS
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill13} class="responsive-img"/>Bootstrap
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill14} class="responsive-img"/>Foundation
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill15} class="responsive-img"/>Materialize
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                        <h4 class="brown-text light">Javascript</h4>
                        <div class="row text-center">
                            <div class="col s4 m2">
                            <img alt="" src={skill16} class="responsive-img"/>React
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill17} class="responsive-img"/>Javascript
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill18} class="responsive-img"/>jQuery
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill19} class="responsive-img"/>Angular
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill20} class="responsive-img"/>Node
                            </div>
                            
                        </div>
                        </div>
                    </div>             
                    <div className="card">
                        <div className="card-content">
                        <h4 className="brown-text light">Back-End</h4>
                            <div className="row text-center">
                                {/* <div className="col s4 m2">
                                    <img alt="" src={skill6} className="responsive-img"/>Ruby
                                </div>
                                <div className="col s4 m2">
                                    <img alt="" src={skill7} className="responsive-img"/>Rails
                                </div>
                                <div className="col s4 m2">
                                    <img alt="" src={skill8} className="responsive-img"/>Minitest
                                </div>
                                <div className="col s4 m2">
                                    <img alt="" src={skill9} className="responsive-img"/>PostgreSQL
                                </div> */}
                                <div className="col s4 m2">
                                    <img alt="" src={skill10} className="responsive-img"/>MongoDB
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-content">
                        <h4 class="brown-text light">Other</h4>
                        <div class="row text-center">
                            <div class="col s4 m2">
                            <img alt="" src={skill22} class="responsive-img"/>Github
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill23} class="responsive-img"/>Heroku
                            </div>
                            <div class="col s4 m2">
                            <img alt="" src={skill24} class="responsive-img"/>Photoshop
                            </div>
                            
                        </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            {/* <section id="awards" className="section scrollspy">
             <h3 className="page-title white-text teal">Awards</h3> 
                <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                        <p>
                            <span className="card-title"><a href="http://startupinstitute.com" target="_blank" className="teal-text hoverline">Student Choice Award</a></span>
                        </p>
                        <p className="brown-text">
                            Startup Institute - Full Time Web Development | April 2017
                        </p>
                        <ul>
                            <li>
                            Awarded by students in the Full-Time Web Development track
                            to one instructor as recognition for "outstanding
                            teaching, listening, mentoring."
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                        <p>
                            <span className="card-title"><a href="https://wespire.com" target="_blank" className="teal-text hoverline">Inspired By You Award</a></span>
                        </p>
                        <p className="brown-text">WeSpire | June 2016</p>
                        <ul>
                            <li>
                            Quarterly award given to a team member who exemplifies
                            WeSpire's purpose, vision, and values, goes above and
                            beyond in their role to make a particularly positive
                            impact on the company.
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>  
            </section>*/}
            <section id="education" className="section scrollspy">
                <h3 className="page-title white-text teal">Education</h3>
                <div className="container">
                <div className="row">
                    <div className='col-12'>
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                        <p>
                            <span className="card-title"><a href="http://upenn.edu" className="teal-text hoverline">MUM</a></span>
                        </p>
                        <p className="brown-text">DHAKA,BD</p>
                        <ul>
                            <li>SSC</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                        <p>
                            <span className="card-title"><a href="http://www.gwu.edu" className="teal-text hoverline">GOV E-ALIA</a></span>
                        </p>
                        <p className="brown-text">DHAKA,BD</p>
                        <ul>
                            <li>HSC</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                        <p>
                            <span className="card-title"><a href="http://www.gwu.edu" className="teal-text hoverline">PROGRAMING-HERO</a></span>
                        </p>
                        <p className="brown-text">DHAKA,BD</p>
                        <ul>
                            <li>Wev Development</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                        <p>
                            <span className="card-title"><a href="http://www.gwu.edu" className="teal-text hoverline">IT BARI</a></span>
                        </p>
                        <p className="brown-text">DHAKA,BD</p>
                        <ul>
                            <li>Design</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
            <section id="contact" className="section scrollspy full-height">
                <h3 className="page-title white-text teal">Contact</h3>
                <div className="container">
                <p>
                    <a aria-label="Email Andrew" href="mailto:hjanwar4123@gmail.com" data-position="top" data-tooltip="Email Andrew" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-envelope"></i></a><a aria-label="Email Andrew" href="mailto:hjanwar4123@gmail.com" className="hoverline">hjanwar4123@gmail.com</a>
                </p>
                <p>
                    <a aria-label="View Andrew on GitHub" href="https://github.com/HJAnwar" target="_blank" data-position="top" data-tooltip="View Andrew on GitHub" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-github"></i></a><a aria-label="Andrew on Github" href="https://github.com/HJAnwar" className="hoverline">https://github.com/HJAnwar</a>
                </p>
                <p>
                    <a aria-label="View Andrew on LinkedIn" href="https://www.linkedin.com/in/hj-anwar-a6a5a91b1" target="_blank" data-position="top" data-tooltip="View Andrew on LinkedIn" className="btn-floating btn-large waves-effect waves-light brown tooltipped"><i className="fa fa-linkedin"></i></a><a aria-label="Andrew on LinkedIn" href="https://www.linkedin.com/in/hj-anwar-a6a5a91b1" className="hoverline">https://www.linkedin.com/in/hj-anwar</a>
                </p>
                </div>
            </section> 
            <section id="blog" className="section scrollspy full-height">
                <h3 className="page-title white-text teal">Blog</h3>
                {/* <div className="container">
                    <h4 id="posts-2020">2020</h4>
                    <ol aria-labelledby="posts-2020">
                        <li>
                        <a className="hoverline" href="/blog/moving-my-blog-to-eleventy-part-3/">Moving my blog to Eleventy, Part 3: Creating Layouts</a>
                        <dl>
                            <dd>Published:
                            </dd><dt>
                            <time datetime="2020-06-25T00:00:00+00:00">
                                June 25, 2020
                            </time>
                            </dt>
                        </dl>
                        </li>
                        <li>
                        <a className="hoverline" href="/blog/moving-my-blog-to-eleventy-part-2/">Moving my blog to Eleventy, Part 2: Getting Started</a>
                        <dl>
                            <dd>Published:
                            </dd><dt>
                            <time datetime="2020-05-13T00:00:00+00:00">
                                May 13, 2020
                            </time>
                            </dt>
                        </dl>
                        </li>
                        <li>
                        <a className="hoverline" href="/blog/moving-my-blog-to-eleventy-part-1/">Moving my blog to Eleventy, Part 1: Installing Node with NVM</a>
                        <dl>
                            <dd>Published:
                            </dd><dt>
                            <time datetime="2020-05-06T00:00:00+00:00">
                                May 6, 2020
                            </time>
                            </dt>
                        </dl>
                        </li>
                    </ol>

                    <h4 id="posts-2019">2019</h4>
                    <ol aria-labelledby="posts-2019">
                        <li>
                        <a className="hoverline" href="/blog/hello-world-and-why-im-blogging">Hello, world. And why I'm blogging.</a>
                        <dl>
                            <dd>Published:
                            </dd><dt>
                            <time datetime="2019-09-02T00:00:00+00:00">
                                September 2, 2019
                            </time>
                            </dt>
                        </dl>
                        </li>
                    </ol>
                </div> */}
            </section>  

        </div>
    );
};

export default Home;
