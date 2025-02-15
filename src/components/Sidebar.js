import React, { useState } from "react";
import "../styles/Sidebar.css";
import { motion } from 'framer-motion';
import { scrollTo } from "../js/nav";
const Sidebar = ({scrollButtonCallback}) => {
    const [open, setOpen] = useState(false);
    const linkVariants = {
        open:{
            transition:{
                staggerChildren: 0.1,
            }
        },
        closed:{
            transition:{
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    }
    const itemVariants = {
        open:{                
            y: 0,
            opacity: 1,
        },
        closed:{
            y: 20,
            opacity: 0,
        }
    }
    const items = [
        "Home",
        "Skills",
        "Projects",
        "Contact",
    ]
    return(
        <motion.div className="sidebar" initial="closed" animate={open ? "open" : "closed"}>
            <motion.div className="bg" style={{clipPath: `circle(30px at 349px 50px)`}}  variants={{
            open: {
            clipPath: `circle(1200px at 349px 50px)`,
            transition:{
                duration: 0.4
            }
            // transition:{
            //     type: "spring",
            //     stiffness: 34,
            // }
        },
        closed: {
            clipPath: `circle(30px at 349px 50px)`,
            transition:{
                duration: 0.4
            }
            // transition: {
            //     delay: 0.0,
            //     type: "spring",
            //     stiffness: 38,
            // }
        }}}>
                {/* Links */}
                <motion.div className={`links ${open ? "interactable" : "nonInteractable"}`} variants={linkVariants}>
                {items.map((item) => (
                    <motion.button style={{color: '#121424', width: 'min(400px, 100vw)', textAlign: 'center'}} className="poppins-regular side_button" key={item} variants={itemVariants} whileHover={{scale: 1.1}} 
                    onClick={() => {setOpen(prev => !prev); scrollTo(item.toLowerCase(), scrollButtonCallback, 300);}}
                    >
                        {item}
                    </motion.button>
                ))}
                </motion.div>  
            </motion.div>
            {/* Toggle Button */}
            <button className="hamburger_button" onClick={() => setOpen(prev => !prev)} style={{right: '10px', top: '10px', overflow: 'clip'}}>
            <div style={{width: '60px', height: '60px', paddingTop: '20px', borderRadius: '50%', position: 'absolute', top: '10px', right: '10px', background: 'transparent', overflow: 'clip'}}>
                <svg width="23" height="23" viewBox="0 0 23 23" style={{background: 'transparent', overflow: 'clip'}}>
                <motion.path style={{overflow: 'clip'}} strokeWidth="3" stroke="#121424" strokeLinecap="round" variants={{ closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"},}}/>
                <motion.path style={{overflow: 'clip'}} strokeWidth="3" stroke="#121424" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{closed: {opacity: 1}, open: {opacity: 0}}}/>
                <motion.path style={{overflow: 'clip'}} strokeWidth="3" stroke="#121424" strokeLinecap="round" variants={{ closed: {d: "M 2 16.346 L 20 16.346"}, open: {d: "M 3 2.5 L 17 16.346"},}}/>
                </svg>
                </div>
            </button>
        </motion.div>
    )
}
export default Sidebar