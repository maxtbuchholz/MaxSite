import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { delay, motion } from 'framer-motion';
import '../styles/Logos.css'; 
const AndroidButton = ({onPage, buttonLink}) => {
    return(
        // <motion.div style={{zIndex: '50', width: '200px', position: 'absolute', right: '0', left: '0', margin: 'auto'}}>
            <motion.button animate={onPage ? 'open' : 'closed'} variants={{open: {opacity: 1, y: 0, transition: {delay: 0.2, duration: 0.3}}, closed: {opacity: 0, y: 20}}} initial={'closed'} onClick={() => {window.open(buttonLink, "App Store link")}} style={{background: 'transparent', border: 'none', zIndex: '50', top: '0px', right: '0px', left: '0px', margin: 'auto'}} className="LogoContainer" whileHover={{scale: 1.00}} whileTap={{scale: 1.00}}>
                <div className="androidLogo" style={{width: '128%', height: '128%', position: 'absolute', top: '-10px', left: '-24px'}}/>
                </motion.button>
        // </motion.div>
    );
}
export default AndroidButton