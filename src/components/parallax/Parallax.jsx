import React, { useRef } from 'react';
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
  const ref = useRef();

  // Corrected variable name: "scrollprogress" to "scrollYProgress"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Fixed incorrect use of variables in useTransform
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className='parallax'
      style={{
        background: type === "services"
          ? "linear-gradient(180deg, #1b1a1a , #1b1a1a)"
          : "linear-gradient(180deg, #1b1a1a , #1b1a1a)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What you Think": "What you get"}
      </motion.h1>
      <motion.div className="hill"></motion.div>
      <motion.div  className="planets" style={{ y: yBg ,backgroundImage:`url(${type==="services" ? "/planets.png" : "/sun.png"})`}}></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallax;