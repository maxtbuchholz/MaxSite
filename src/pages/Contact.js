import React, { useState, useEffect, useRef } from "react";
import { color, delay, motion } from 'framer-motion';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser';
import { TextField } from "@mui/material";
import { alpha, duration, styled } from '@mui/material/styles';
import { CgChart } from "react-icons/cg";
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
            y: 15,
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
            y: 10,
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
        <div  style={{"height" : "100%", "width" : "100%", "background" : "#0f1121"}}>
            <div className="verticalContainer">
            {/* <h2 className="contactTitle poppins-semibold" style={{paddingBottom: 0, paddingTop: 0}}>Send me a message</h2> */}

            <motion.div initial={"closed"} animate={onPage ? "open" : "closed"} variants={contactTitleVariants} style={{paddingBottom: 0, paddingTop: 0}} className="popUpTitleContainer">{[..."Send me a message"].map((char) => {return <motion.h7 variants={contactLetterVariants} className="contactTitle poppins-semibold">{char}</motion.h7>})}</motion.div>

                <motion.h4 initial={"closed"} animate={onPage ? "open" : "closed"} variants={contactTypeVariants} className="poppins-medium contactSubTitle" style={{paddingBottom: '0px', paddingTop: 0}}>Mail</motion.h4>
                <motion.h6 initial={"closed"} animate={onPage ? "open" : "closed"} variants={contactInfoVariants} className="poppins-light contactInfo" style={{paddingBottom: 0, paddingTop: 0}}>maxtbuchholz@gmail.com</motion.h6>
                <div className={`mailGraphic`}/>
            </div>
            <motion.form ref={form} onSubmit={sendEmail} animate={onPage ? 'open' : 'closed'}
            variants={{open: {y: 0}, closed: {y: 150}}} transition={{ type: "spring", stiffness: 150 }}>
            <CssTextField sx={{ input: { color: 'white' } }} id="from" className="textField" label="Name" name="from_name" required/>
            {/* <TextField className="textField" id="from" label="Name" name="from_name" variant="outlined" required/> */}
      {/* <label>Name</label>
      <input type="text" id="from" name="from_name" /> */}
            <CssTextField sx={{ input: { color: 'white' } }} id="email" className="textField" type="email" label="email" name="message" required/>
            {/* <TextField className="textField" id="email" label="Email" name="message" variant="outlined" required/> */}
      {/* <label>Email</label>
      <input type="email" id="email" name="message" /> */}
            <CssTextField sx={{ textArea: { color: 'white' } }} id="message" className="textField" label="Message" name="message" multiline rows={6} required/>
            {/* <TextField className="textField" id="message" label="Message" name="message" variant="outlined" multiline rows={5} required/> */}
      {/* <label>Message</label>
      <textarea name="message" id="message" /> */}
      <input className="textButton" type="submit" value="Send" />
    </motion.form>
        </div>
    );
};

export default ContactPage;