import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import wilson from '../../../images/wilson.png';
import './Blogs.css'


const blogData = [
    {
        title : 'Responsive Web design',
        description : 'Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size',
        author:'HJanwar',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Responsive Web design',
        description : 'Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size',
        author:'Mark',
        authorImg : wilson,
        date : '23 April 2019'
    },
    {
        title : 'Responsive Web design',
        description : 'Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size',
        author:'James',
        authorImg : wilson,
        date : '23 April 2019'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;