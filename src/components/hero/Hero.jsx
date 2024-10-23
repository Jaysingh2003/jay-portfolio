import "./hero.scss"; 
import{motion} from "framer-motion"

const textVariants = {
  initial: {
    opacity: 0,
    x: -500,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 1, 
      staggerChildren: 0.1, 
    },
  },
};

const slideVariants = {
  initial: {
   
    x: 0,
  },
  animate: {
   
   x:"-200%",
    transition: { 
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20, 
      
    },
  },
};


function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textcontainer font-inter" variants={textVariants} initial='initial' animate="animate">
            <motion.h2 variants={textVariants}>JAYSINGH PATEL </motion.h2>
            <motion.h1 variants={textVariants}>FullStackDevloper and UI/UX Designer</motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.button variants={textVariants}>See Our Latest work</motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>

        </motion.div>
        </div>
        <motion.div className="slidingtext font-Anurati font-semibold" variants={slideVariants} initial="initial" animate="animate">
          Programmer And UI Ux Designer
        </motion.div>
        <div className="imagecontainer">
            <img src="/hero.png" alt="Hero" />
        </div>
 
       
    </div>
  )
}

export default Hero