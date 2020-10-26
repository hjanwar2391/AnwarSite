import React from 'react';
import Doctor from '../Doctor/Doctor';
import html from '../../../images/MySkills/html.png';
import css from '../../../images/MySkills/css.png';
import bootstrap from '../../../images/MySkills/bootstrap.png';
import javascript from '../../../images/MySkills/js.png';
import firebase from '../../../images/MySkills/firebase.png';
import react from '../../../images/MySkills/react.png';
import node from '../../../images/MySkills/node.png';
import heroku from '../../../images/MySkills/heroku.png';
import redux from '../../../images/MySkills/redux.png';
import UL from '../../../images/MySkills/UL.png';
import mongodb from '../../../images/MySkills/mongodb.png';
import sass from '../../../images/MySkills/sass.png';

const serviceData = [
    {
        name: 'HTML',
        img: html,
        title:"HTML is the standard markup language for Web pages. With HTML you can create your own Website."
    },
    {
        name: 'CSS',
        img: css,
        title: "CSS is the language we use to style an HTML document. CSS describes how HTML elements should..."
    },
    {
        name: 'Javascript',
        img: javascript,
        title: "JavaScript is the world's most popular programming language. JavaScript is the programming ..."
    },
    {
        name: 'Bootstrap',
        img: bootstrap,
        title: "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites."
    },
    {
        name: 'SASS',
        img: sass,
        title: "Sass is a CSS pre-processor. Sass reduces repetition of CSS and therefore saves time."
    },
    {
        name: 'React Js',
        img: react,
        title: "React is a JavaScript library for building user interfaces.React is a JavaScript library for ..... "
    },
    {
        name: 'Firebase',
        img: firebase,
        title:"Firebase is a Backend-as-a-Service — BaaS — that started as a YC11 startup and grew up into a next..."
    },
    {
        name: 'Node Js',
        img: node,
        title: "Node.js is an open source server environment. Node.js allows you to run JavaScript on the server..."
    },
    {
        name: 'Heroku',
        img: heroku,
        title: "Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the..."
    },
    {
        name: 'Redux Js',
        img: redux,
        title: "Redux is all about state. If you want to learn Redux you should have a clear understanding of what..."
    },
    {
        name: 'Materia',
        img: UL,
        title: "Material is a design system created by Google to help teams build high-quality digital experiences..."
    },
    {
        name: 'Mongodb',
        img: mongodb,
        title: "MongoDB is a document database with the scalability and flexibility that you want with the querying..."
    }
]


const Doctors = () => {

    return (
        <div className="container text-center " style={{ marginTop: '50px', marginBottom: '50px' }}>
        <h1 className="mb-5">MY  <span style={{ color: '#7AB259' }}>Skills</span></h1>
        
        <div className="row  w-60">
                    {
                        serviceData.map(service => <Doctor service={service} key={service.name}></Doctor>)
                    }
                    
                </div>
            </div>
    );
};

export default Doctors;