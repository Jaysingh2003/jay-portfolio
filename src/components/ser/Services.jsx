import React, { useRef } from 'react';
import "./services.scss";
import { motion, useInView } from "framer-motion"; // Corrected import

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {  // Corrected 'Transition' to 'transition'
      duration: 1,
      staggerChildren: 0.1, // Corrected 'staggerchildren' to 'staggerChildren'
    },
  },
};



function Services() {
  
  const ref=useRef()

  const isview=useInView(ref,{margin : "-100px"});


  return (
    <motion.div
      className='services'
      variants={variants}
      initial="initial"
      whileInView="animate"
      
    >
      <motion.div className="textContainer" variants={variants}>
        <p>My Focus To Grow Your Brand And<br /> Make It More Reliable</p>
        <hr />
      </motion.div>

      <motion.div className="littlecontainer" variants={variants}>
        <div className="tittle">
          <img src="/office.jpg" alt="Our Ideas" />
          <h1>
            <motion.b whileHover={{color:"#ff7a28d0"}}>Our</motion.b> Ideas
          </h1>
        </div>

        <div className="tittle">
          <h1>
            <motion.b whileHover={{color:"#ff7a28d0"}}> For Your</motion.b> Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>

      <motion.div className="listcontainer" variants={variants}>
        {Array(4).fill(0).map((_, index) => (
          <motion.div
            key={index}
            className="box"
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
          >
            <h2>FullStack</h2>
            <p>Show API development with authentication (JWT/OAuth), microservices, and database integration.Include examples like RESTful APIs, CRUD applications, and cloud-based solution</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
