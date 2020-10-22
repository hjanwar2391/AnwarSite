import React from 'react';
import MyWorks from '../MyWorks/MyWorks';
import html from '../../images/myWork/creativ agency.png';
import doctors from '../../images/myWork/doctors.png';
import bootstrap from '../../images/MySkills/bootstrap.png';
import javascript from '../../images/MySkills/js.png';
import firebase from '../../images/MySkills/firebase.png';
import react from '../../images/MySkills/react.png';
import node from '../../images/MySkills/node.png';
import heroku from '../../images/MySkills/heroku.png';
import redux from '../../images/MySkills/redux.png';
import UL from '../../images/MySkills/UL.png';
import mongodb from '../../images/MySkills/mongodb.png';


const mySkills = [
    {
        name: 'Creative Agency',
        img: html,
        title:"HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
        link: "https://www.fiverr.com/users/hjanwar/manage_gigs/be-your-react-developer/edit?wizard=1"
    },
    {
        name: 'Doctors Portal',
        img: doctors,
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

const MyWork = () => {
    return (
        <div>
            <div className="container text-center " style={{ marginTop: '50px', marginBottom: '50px' }}>
        <h1 className="mb-5">MY  <span style={{ color: '#7AB259' }}>Work</span></h1>
        
        <div className="row  w-60">
                    {
                        mySkills.map(mySkills => <MyWorks mySkills={mySkills} key={mySkills.name}></MyWorks>)
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default MyWork;