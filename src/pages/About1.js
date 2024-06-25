import React, { useState, useEffect, useRef } from "react";
import { color, delay, easeOut, motion } from 'framer-motion';
import '../styles/About1.css'
import '../styles/AboutContainers.css'
import ProfileImage from "../components/ProfileImage";
import BlueContainer from "../components/BlueContainer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaMobileScreenButton, FaMobileScreen, FaDisplay, FaDatabase, FaComputer } from "react-icons/fa6";
import { duration } from "@mui/material";

const About1Page = ({onPage, pageVisibilityChanged}) => {
    const gridVariants = {
        open:{
            transition:{
                staggerChildren: 0.12,
            }
        },
        closed:{
            transition:{
                staggerChildren: 0.06,
                staggerDirection: -1,
            }
        }
    }
    const gridItemVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        closed:{
            y: 60,
            opacity: 0,
        }
    }
    return (
        <div className="about1Page">
            <div className="about1HalfPage1">
                <div style={{marginRight: 0, marginLeft: 0, margin: 'auto'}} className="about1ProfilePic"><ProfileImage onPage={onPage}/></div>
                <div style={{width: '100%', textAlign: 'center'}} className="poppins-semibold">
                    <h2 style={{color: '#FFFFFFee'}} className="about1Text1">Max Buchholz</h2>
                    <h3 style={{color: '#FFFFFFdd'}} className="about1Text2 poppins-medium">Software Developer</h3>
                </div>
            </div>
             <div className="about1HalfPage2">
                <motion.div variants={gridVariants} initial='closed' animate={onPage ? 'open' : 'closed'} className="about1Container">
                    <motion.div variants={gridItemVariants}><BlueContainer title={"mobile"} oneChild={true} children={<FaMobileScreenButton />} boxWidth='calc(100%)' className="about1ContainerGridPos1"/></motion.div>
                    <motion.div variants={gridItemVariants}><BlueContainer title={"web"} oneChild={true} children={<FaDisplay />} boxWidth='calc(100%)' className="about1ContainerGridPos2"/></motion.div>
                    <motion.div variants={gridItemVariants}><BlueContainer title={"desktop"} oneChild={true} children={<FaComputer />} boxWidth='calc(100%)' className="about1ContainerGridPos3"/></motion.div>
                    <motion.div variants={gridItemVariants}><BlueContainer title={"server"} oneChild={true} children={<FaDatabase />} boxWidth='calc(100%)' className="about1ContainerGridPos4"/></motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About1Page;