import React from 'react';
import './Sidevar.css';

const Sidevar = () => {
    return (
        <div>
            <nav className="hide-on-small-only">
  <ul className="side-nav fixed section table-of-contents">
    <li className="logo">
      <a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro" className="brand-logo teal-text">
        <h1>
          Anwar Hossen<span className="brown-text light">Full Stack Developer</span>
        </h1></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small"></i><span>About</span></a>
    </li>
    {/* <li className="bold">
      <a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark cyan-text"><i className="mdi-action-trending-up small"></i><span>Experience</span></a>
    </li> */}
    <li className="bold">
      <a aria-label="Navigate to the Projects section" href="#projects" className="waves-effect waves-dark indigo-text active"><i className="mdi-av-web small"></i><span>Projects</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark purple-text"><i className="mdi-av-equalizer small"></i><span>Skills</span></a>
    </li>
    {/* <li className="bold">
      <a aria-label="Navigate to the Awards section" href="#awards" className="waves-effect waves-dark red-text"><i className="mdi-action-grade small"></i><span>Awards</span></a>
    </li> */}
    <li className="bold">
      <a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark orange-text"><i className="mdi-social-school small"></i><span>Education</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark brown-text"><i className="mdi-content-mail small"></i><span>Contact</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Blog section" href="#blog" className="waves-effect waves-dark yellow-text text-darken-2"><i className="mdi-content-create small"></i><span>Blog</span></a>
    </li>
    <li className="bold">
      <a aria-label="Open Andrew's resume in a new tab" href="https://drive.google.com/file/d/1KvYseegKgUbaGaDG36qjWYpQdZEv4pCO/view?fbclid=IwAR0oX4ZrIf7WaZmTxhlhKkqQhTDxbgslEVZs8cJu2c_siI7QGM4YmMIkyFk" target="_blank" className="waves-effect waves-dark grey-text text-darken-3"><i className="mdi-action-description small"></i><span>Resume</span></a>
    </li>
  </ul>
</nav>
{/* <nav className="hide-on-large only trigger z-depth-1">
  <a aria-label="Toggle visibility of the mobile navbar" href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
  <div className="name-title">
    <a id="name" aria-label="Navigate to the beginning of the page" href="#main" className="teal-text">Andrew Borstein</a><span className="brown-text light">Full Stack Developer</span>
  </div>
</nav>
<nav className="hide-on-large only">
  <ul id="slide-out" className="side-nav" style="width: 190px; left: -200px;">
    <li className="bold">
      <a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small"></i><span>About</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark cyan-text"><i className="mdi-action-trending-up small"></i><span>Experience</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Projects section" href="#projects" className="waves-effect waves-dark indigo-text active"><i className="mdi-av-web small"></i><span>Projects</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark purple-text"><i className="mdi-av-equalizer small"></i><span>Skills</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Awards section" href="#awards" className="waves-effect waves-dark red-text"><i className="mdi-action-grade small"></i><span>Awards</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark orange-text"><i className="mdi-social-school small"></i><span>Education</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark brown-text"><i className="mdi-content-mail small"></i><span>Contact</span></a>
    </li>
    <li className="bold">
      <a aria-label="Navigate to the Contact section" href="#blog" className="waves-effect waves-dark yellow-text text-dark-3"><i className="mdi-content-mail small"></i><span>Blog</span></a>
    </li>
    <li className="bold">
      <a aria-label="Open Andrew's Resume in a new tab" href="https://docs.google.com/document/d/1evlvmAcOmPTttl1isyX_UcQbLO5pK8OwB4Rs2Sv4riY" target="_blank" className="waves-effect waves-dark grey-text text-darken-3"><i className="mdi-action-description small"></i><span>Resume</span></a>
    </li>
  </ul>
</nav> */}
        </div>
    );
};

export default Sidevar;