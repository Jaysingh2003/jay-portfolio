 import React from 'react'
 import "./navbar.scss";
 import {motion} from "framer-motion"
import Sidebar from './sidebar/Sidebar';


 
 function Navbar() {
   return (
     <div className='navbar'>
           <Sidebar/>
        <div className="wrapper ">
            <motion.span
            initial={{opacity: 0,scale: .5}}
            animate={{opacity: 1,scale: 1}}
            transition={{duration: .5}}

            >
              Jaysingh</motion.span>

            <div className='sociallinks'>
                <a href="https://github.com/Jaysingh2003"><img src="/Github.gif" alt="" /></a>
                <a href="https://www.instagram.com/jaysingh85_/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/jaysinghpatel/"><img src="/linkedin.png" alt="" /></a>
                <a href="#"><img src="/youtube-2.png" alt="" /></a>
                
            </div>

        </div>
        
     </div>
   )
 }
 
 export default Navbar