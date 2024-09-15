import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';
import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
const ContactPage = ({onPage, pageVisibilityChanged}) => {
    const [error, setError] = useState(false);
    const form = useRef();
    const contactTitleVariants = {
        open:{
            transition:{
                staggerChildren: 0.03,
            }
        },
        closed:{
            transition:{
                staggerChildren: 0.0,
                staggerDirection: -1,
            }
        }
    }
    const contactLetterVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition:{
                type: "spring",
                stiffness: 200,
            },
        },
        closed:{
            y: 8,
            opacity: 0,
        }
    }
    const contactTypeVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition:{
                delay: 0.3,
                type: "linear",
                duration: 0.5,
            },
        },
        closed:{
            y: 8,
            opacity: 0,
        }
    }
    const contactInfoVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition:{
                delay: 0.5,
                type: "linear",
                duration: 0.3,
            },
        },
        closed:{
            y: 10,
            opacity: 0,
        }
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_vyr1ukd', 'template_0054qio', form.current, {
            publicKey: 'PxOzACEIw8XMk2ZkW',
          })
          .then(
            () => {
              setError(true);
              document.getElementById('from').value = "";
              document.getElementById('email').value = "";
              document.getElementById('message').value = "";
            },
            (error) => {
              setError(false);
            },
          );
      };
      const CssTextField = styled(TextField)({
        color: '#ff0000',
        '& label': {
            //   color: '#A0AAB4',
            color: '#e0e3e7aa',
            backgroundColor: 'transparent',
            },
        '& label.Mui-focused': {
        //   color: '#A0AAB4',
        color: '#6db9f9',
        backgroundColor: 'transparent',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
          backgroundColor: 'transparent',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
            backgroundColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
            backgroundColor: 'transparent',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6db9f9',
            backgroundColor: 'transparent',
          },
        },
      });
    return (
        <div className="contactContainer" style={{"height" : "100%", "width" : "100%", "maxWidth": '1000px', marginRight: 0, marginLeft: 0, margin: 'auto', display: 'flex', flexDirection: 'row', position: 'relative'}}>
            <div className="verticalContainer">
              <motion.div initial={"closed"} animate={onPage ? "open" : "closed"} variants={contactTitleVariants} style={{paddingBottom: 0, paddingTop: 0}} className="popUpTitleContainer">{[..."Send me a message"].map((char, i) => {return <motion.h6 key={i} variants={contactLetterVariants} className="contactTitle poppins-semibold">{char}</motion.h6>})}</motion.div>
                <motion.h4 initial={"closed"} animate={onPage ? "open" : "closed"} variants={contactTypeVariants} className="poppins-medium contactSubTitle" style={{paddingBottom: '0px', paddingTop: 0}}>Mail</motion.h4>
                <motion.h6 initial={"closed"} animate={onPage ? "open" : "closed"} variants={contactInfoVariants} className="poppins-light contactInfo" style={{paddingBottom: 0, paddingTop: 0}}>maxtbuchholz@gmail.com</motion.h6>
                <div className={`mailGraphic`}/>
            </div>
            <motion.form className="contactForm" ref={form} onSubmit={sendEmail} animate={onPage ? 'open' : 'closed'}
              variants={{open: {y: 0}, closed: {y: 20}}} transition={{ type: "spring", stiffness: 150 }}>
              <CssTextField sx={{ input: { color: 'white' } }} id="from" className="textField" label="Name" name="from_name" required/>
              <CssTextField sx={{ input: { color: 'white' } }} id="email" className="textField" type="email" label="email" name="message" required/>
              <CssTextField sx={{ textArea: { color: 'white' } }} id="message" className="textField" label="Message" name="message" multiline rows={6} required/>
            <input className="textButton" type="submit" value="Send" />
        </motion.form>
        </div>
    );
};

export default ContactPage;