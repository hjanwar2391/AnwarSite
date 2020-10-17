import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "Check your site" , link: "/checkup"},
        {name: "service 24h/7" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check up your site" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Dhaka - 1100 " , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oral = [
        {name: "Emergency Care" , link: "/emergency"},
        {name: "Check Up your site" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Check Up your site" , link: "/checkup"},
        {name: "Check Up your site" , link: "/checkup"},
        {name: "Check Up your site" , link: "/checkup"}
    ]
    const services = [
        {name: "Emergency Service" , link: "/emergency"},
        {name: "Check Up your site" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Extraction" , link: "/tooth-extract"},
        {name: "Check Up your site" , link: "/checkup"},
        {name: "Check Up your site" , link: "/checkup"},
        {name: "Check Up your site" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral" menuItems={oral}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+8801840409764</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;