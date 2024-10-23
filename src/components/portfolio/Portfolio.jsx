import React, { useRef } from 'react';
import "./portfolio.scss"
import { useScroll, motion, useSpring, useTransform } from 'framer-motion';

const items=[
    {
        id:1,
        title:"The Art Of Bonsai",
        img:"/port1.jpg",
        description:"lorem20This project aims to design an intelligent monitoring system for classroom environments using AI-powered image recognition. The system captures real-time images from classroom cameras."
        

    },
    {
        id:2,
        title:" AR-VR set ",
        img:"/port2.jpg",
        description:"lorem20This project aims to design an intelligent monitoring system for classroom environments using AI-powered image recognition. The system captures real-time images from classroom cameras."
        

    },
    {
        id:3,
        title:" The pryfli of Versa ",
        img:"/port3.jpg",
        description:"lorem20This project aims to design an intelligent monitoring system for classroom environments using AI-powered image recognition. The system captures real-time images from classroom cameras."
        

    },
    {
        id:4,
        title:" Visionaries ",
        img: "/port4.png",
        description:"lorem20This project aims to design an intelligent monitoring system for classroom environments using AI-powered image recognition. The system captures real-time images from classroom cameras."
        

    },
];

const Single = ({item}) =>{ 

  const ref=useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start" ],
      });

      const y = useTransform(scrollYProgress,[0, 1], [-300, 300]);


  return(<section >
    <div className="container">
        <div className="wrapper">
            <div className="imgcontainer" ref={ref}>
            <img src={item.img} alt="Our Ideas" />
            </div>
          
           <motion.div className="textcontainer" style={{y}} >
            <h2>{item.title}</h2> 
            <p>{item.description}</p>
            <button>Learn More</button>
           </motion.div>
        </div>
    </div>   
  </section>
       
        ) 

}

function Portfolio() {

    const ref = useRef();

     const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
      });
      

      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
      });

      return (
        <div className='portfolio' ref={ref}>
          <div className="progress">
            <h1>Featured Works</h1>
            {/* Apply the scaleX spring animation to the progress bar */}
            <motion.div style={{ scaleX }} className="progressbar" />
          </div>
    
          {/* Map through items and render them */}
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      );
    }
    
    export default Portfolio;