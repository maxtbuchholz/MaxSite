import React from "react";
import { motion } from 'framer-motion';
import '../globals.css'
const SkillsContainer =({title, image, link}) =>{

    return(
        <motion.div whileHover={{scale: 1.04 }} whileTap={{scale: 0.98}} style={{width: '100%', height: '100%', cursor: 'pointer'}} onClick={() => {window.open(link, title);}}>
                <div style={{width: '100%', height: '80%', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <div style={{marginRight: 0, marginLeft: 0, margin: 'auto', width: '80%', height: '80%', backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}/>
                </div>
                <div style={{width: '100%', height: '20%', marginTop: 0}}>
                <h4 style={{color: 'white', textAlign: 'center', fontSize: '11px', lineHeight: '12px', fontWeight: 300}} className='poppins-light'>{title}</h4>
                </div>
        </motion.div>
    )
}

export default SkillsContainer;