"use client"
import { useState, useEffect } from "react";
import { startEmail } from '../js/nav.js';
import React from 'react';
import '../styles/Header.css'
import Sidebar from "./Sidebar.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'
import "../globals.css"
import { scrollTo } from '../js/nav.js'
import { headerPositionIconTo } from "../js/headerScripts.js"
import { motion } from 'framer-motion';
const Header = ({currentPage, scrollButtonCallback, waveTransforms, headerHeight, topOfPage, ulTop, terminalTop, progresBarTop, progresBarWidth, headerBackTop, ease, opacity}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggleHandler =() =>{
        setMenuOpen((p) => !p)
    }
    const closeMenuHandler = () => {
        setMenuOpen(false)
    }
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 800 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);
    return(
        <div id="uiHeader" className={`headerContainer headerFirst headerFull ${ease ? 'moveable' : ''}`} style={{height: '100px', width: '100%'}}>
        <header className="header">
                    <div className="headerContent" style={{marginRight: 0, marginLeft: 0, margin: 'auto'}}>
                        {/* <div style={{position: 'absolute', height: '100px', width: '128px', background: 'transparent', top: '0', left: '0', alignItems: 'center', alignContent: 'center', overflow: 'hidden'}}>
                            <h2 style={{position: 'absolute', top: '8px', left: '8px', margin: 'auto'}} className="poppins-bold headerContentBackLogo">max</h2>
                        </div> */}
                        <div style={{position: 'absolute', height: '100px', width: '128px', background: 'transparent', top: '0', left: '0', alignItems: 'center', alignContent: 'center', overflow: 'hidden'}}>
                            <h2 style={{position: 'absolute', top: '8px', left: '8px', margin: 'auto', 
                            // backgroundImage: `linear-gradient(110deg,  
                            //             rgba(76,221,242,1) 0%,                                                                         rgba(109,185,249,1) ${44 * progresBarWidth}%,    
                            //             rgba(109,185,249,1) ${100 - (44 * progresBarWidth)}%,  
                            //             rgba(92,121,255,1) 100% 
                            //             )`
                                        // backgroundImage: `linear-gradient(0deg,  
                                        // rgba(255,255,255,0.01) ${0}%,    
                                        // rgba(109,185,249,1) ${(100 * progresBarWidth) - 20}%
                                        // )`
                                        backgroundColor: `rgba(
                                                            ${(109 * (1 - progresBarWidth)) + (186 * progresBarWidth)},
                                                            ${(185 * (1 - progresBarWidth)) + (241 * progresBarWidth)},
                                                            2${(249 * (1 - progresBarWidth)) + (255 * progresBarWidth)}49,
                                                            ${1})`
                                        }} className="poppins-bold headerContentLogo">max</h2>
                        </div>

                    {(size.width >= 800) && <nav className={"headerContentNav"} >
                        {/* <div id="locationRect" className="locationRect"></div> */}
                        <ul style={{position: 'fixed', top: 0, transform: `translate(0px, 0px`}} className={`${ease ? 'moveable' : ''}`}>
                            <li>
                                <motion.button className={((currentPage === "home") ? "onButtonsPage" : "notButtonsPage")} id="Header-Home-Btn" onClick={() => { scrollTo("home", scrollButtonCallback, 300); headerPositionIconTo("Header-Home-Btn"); }}  whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>Home</motion.button>
                                {/* <a className={((currentPage === 0) ? "onButtonsPage" : "notButtonsPage")} id="Header-Home-Btn" onClick={() => { scrollTo("Home"); headerPositionIconTo("Header-Home-Btn"); }}>Home</a> */}
                            </li>
                            <li>
                                <motion.button className={((currentPage === "skills") ? "onButtonsPage" : "notButtonsPage")} id="Header-About-Btn" onClick={() => { scrollTo("skills", scrollButtonCallback, 300); headerPositionIconTo("Header-About-Btn"); }}   whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                >Skills</motion.button>
                                {/* <a className={((currentPage === 1) ? "onButtonsPage" : "notButtonsPage")}id="Header-About-Btn" onClick={() => {scrollTo("About"); headerPositionIconTo("Header-About-Btn"); }}>About</a> */}
                            </li>
                            <li>
                                <motion.button className={((currentPage === "projects") ? "onButtonsPage" : "notButtonsPage")} id="Header-Projects-Btn" onClick={() => { scrollTo("projects", scrollButtonCallback, 300); headerPositionIconTo("Header-Projects-Btn"); }} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                >Projects</motion.button>
                                {/* <a className={((currentPage === 2) ? "onButtonsPage" : "notButtonsPage")}id="Header-Projects-Btn" onClick={() => {scrollTo("Projects"); headerPositionIconTo("Header-Projects-Btn"); }}>Projects</a> */}
                            </li>
                            <li>
                                <motion.button className={((currentPage === "contact") ? "onButtonsPage" : "notButtonsPage")} id="Header-Contact-Btn" onClick={() => { scrollTo("contact", scrollButtonCallback, 300); headerPositionIconTo("Header-Contact-Btn"); }} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                >Contact</motion.button>
                                {/* <a className={((currentPage === 3) ? "onButtonsPage" : "notButtonsPage")}id="Header-Contact-Btn" onClick={() => {scrollTo("Contact"); headerPositionIconTo("Header-Contact-Btn"); }}>Contact</a> */}
                            </li>
                        </ul>
                        {(size.width >= 800) &&<button className="headerButton poppins-regular" style={{}} onClick={() => {startEmail();}}>
                            <FontAwesomeIcon style={{paddingRight: '10px'}} icon={faEnvelope} />Email</button>}
                    </nav>}
                    {(size.width < 800) &&  <Sidebar  scrollButtonCallback={(scrollButtonCallback)}/>}
                    {/* <div className="headerContentToggle">
                            {menuOpen ? <AiOutlineClose onClick={menuToggleHandler} /> : <RiMenu5Line onClick={menuToggleHandler} />}
                        </div> */}
                    </div>
        </header>

        {/* <div style={{width: '100vw', height: '100vh', opacity: opacity, position: 'absolute'}}> */}
        <div style={{top: '0px', width: '100%', height: '400px', position: 'fixed', padding: 0, margin: 0, overflow: 'hidden', opacity: 0.7}}>
            <div className={`header-cloud-2 header-cloud ${ease ? 'moveable' : ''}`} style={{transform: `translate(${waveTransforms[0]}%, ${waveTransforms[5]}%)`}}/>
            <div className={`header-cloud-1 header-cloud ${ease ? 'moveable' : ''}`} style={{transform: `translate(${waveTransforms[1]}%, ${waveTransforms[0]}%)`}}/>
        </div>
        <div className="islandBack moveable" style={{transform: `translate(${0}%, ${waveTransforms[6]}%)`}}/>
        <div style={{bottom: '0px', width: '100%', height: '350px', position: 'fixed', padding: 0, margin: 0, overflow: 'hidden'}}>
            <div className={`${ease ? 'moveable' : ''}`} style={{zIndex: 0, position: 'absolute', width: '100%', height: '100%', transform: `translate(${waveTransforms[0]}%, ${waveTransforms[2]}%)`}}>
                <div className="header-wave-l3 header-wave" />
                <div className="header-wave-r3 header-wave"/>
                <div className="rock2"/>
                <div className="header-wave-l2 header-wave"/>
            </div>
            <div className={`rock1 ${ease ? 'moveable' : ''}`} style={{transform: `translate(${0}%, ${waveTransforms[4]}%)`}}/>
            <div className={`${ease ? 'moveable' : ''}`} style={{zIndex: 0, position: 'absolute', width: '100%', height: '100%', transform: `translate(${waveTransforms[1]}%, ${waveTransforms[3]}%)`}}>
                <div className="header-wave-r2 header-wave"/>
                <div className="rock3"/>
                <div className="header-wave-l1 header-wave"/>
                <div className="header-wave-r1 header-wave"/>
            </div>
        </div>
        {/* </div>                 */}


        </div>
    );
}
export default Header