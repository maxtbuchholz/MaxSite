import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";
import { delay, motion } from 'framer-motion';
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
            y: 60,
            opacity: 0,
        }
    }
    const items = [
        "Home",
        "About",
        "Projects",
        "Contact",
    ]
    return(
        <motion.div className="sidebar" initial="closed" animate={open ? "open" : "closed"}>
            <motion.div className="bg" style={{clipPath: `circle(30px at 349px 50px)`}}  variants={{
            open: {
            clipPath: `circle(1200px at 349px 50px)`,
            transition:{
                type: "spring",
                stiffness: 30,
            }
        },
        closed: {
            clipPath: `circle(30px at 349px 50px)`,
            transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 38,
                //dampening: 100,
            }
        }}}>
                {/* Links */}
                <motion.div className={`links ${open ? "interactable" : "nonInteractable"}`} variants={linkVariants}>
                {items.map((item) => (
                    <motion.a onClick={() => {scrollTo(item.toLowerCase(), scrollButtonCallback, 500); setOpen(prev => !prev)}} key={item} variants={itemVariants} whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.95}}
                    >
                        {item}
                    </motion.a>
                ))}
                </motion.div>  
            </motion.div>
            {/* Toggle Button */}
            <button onClick={() => setOpen(prev => !prev)} style={{}}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{ closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"},}}/>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{closed: {opacity: 1}, open: {opacity: 0}}}/>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{ closed: {d: "M 2 16.346 L 20 16.346"}, open: {d: "M 3 2.5 L 17 16.346"},}}/>
                </svg>
            </button>
        </motion.div>
    )
}
export default Sidebar