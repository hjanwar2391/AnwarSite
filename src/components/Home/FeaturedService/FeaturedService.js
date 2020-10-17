import React from 'react';
import featured from '../../../images/featured.png'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 h-100 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid " src='https://www.myresponsee.com/wp-content/uploads/2020/09/financer-free-responsive-business-template.jpg' alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Responsive Web Design</h1>
                        <p className="text-secondary my-5">
                            Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation.
                            The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries. As the user switches from their laptop to iPad, the website should automatically switch to accommodate for resolution, image size and scripting abilities. One may also have to consider the settings on their devices; if they have a VPN for iOS on their iPad, for example, the website should not block the user’s access to the page. In other words, the website should have the technology to automatically respond to the user’s preferences. This would eliminate the need for a different design and development phase for each new gadget on the market.                        </p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;