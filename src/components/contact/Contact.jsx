import React, { useRef, useState } from 'react';
import './contact.scss';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    opacity: 0,
    y: 500,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  const formRef = useRef(); // corrected formRef usage

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6af2kud', 'template_55zvwht', formRef.current, {
        publicKey: 'pePOLVClwB6NQK7qG',
      })
      .then(
        (result) => {
          setSuccess(true);
          setError(false); // Reset error state on success
        },
        (error) => {
          setError(true);
          setSuccess(false); // Reset success state on error
        }
      );
  };

  return (
    <motion.div className='contact' variants={variants} initial='initial' whileInView='animate'>
      <motion.div className='textcontainer' variants={variants}>
        <motion.h1 variants={variants}>Connect with Us.</motion.h1>
        <motion.div className='item' variants={variants}>
          <h2>Email</h2>
          <span>jay229413@gmail.com</span>
        </motion.div>

        <motion.div className='item' variants={variants}>
          <h2>Address</h2>
          <span>32-B Krishna Nagar-110051 New Delhi, India</span>
        </motion.div>

        <motion.div className='item' variants={variants}>
          <h2>Contact</h2>
          <span>9936341784</span>
        </motion.div>
      </motion.div>

      <div className='formcontainer'>
        <form ref={formRef} onSubmit={sendEmail}>
          <input type='text' placeholder='Name' name='name' required />
          <input type='email' placeholder='Email' name='email' required />
          <textarea placeholder='Message' name='message' required />
          <button type='submit'>Submit</button>

          {/* Corrected message display */}
          {success && <p className="success-message ">Message sent successfully!</p>}
          {error && <p className="error-message">Failed to send the message. Please try again.</p>}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;