"use client"
import { Fragment, useState, useEffect } from "react";
import gitHubImage from '../img/github-mark.png';
import { navToGitHub, startEmail } from '../js/nav.js';
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu5Line } from "react-icons/ri";
import React from 'react';
import '../styles/Header.css'
import Sidebar from "./Sidebar.js";
import "../globals.css"
import { scrollTo } from '../js/nav.js'
import { headerPositionIconTo } from "../js/headerScripts.js"
import { color } from "framer-motion";
import { delay, motion } from 'framer-motion';
const Header = ({currentPage, scrollButtonCallback}) => {
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
        <div id="uiHeader" className="headerContainer headerFirst">
            {/* topUI */}
        {/* <div className={"mobileMenu" + " " + (menuOpen ? "menuActive" : "menuInactive")}>
                
        //     </div> */}
        <header className="header">
                    <div className="headerContent">
                        <h2 className="poppins-bold headerContentLogo">max</h2>
                    {(size.width >= 800) && <nav className={"headerContentNav"} >
                        {/* <div id="locationRect" className="locationRect"></div> */}
                        <ul>
                            <li>
                                <motion.button className={((currentPage === "home") ? "onButtonsPage" : "notButtonsPage")} id="Header-Home-Btn" onClick={() => { scrollTo("home", scrollButtonCallback, 300); headerPositionIconTo("Header-Home-Btn"); }}  whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}>Home</motion.button>
                                {/* <a className={((currentPage === 0) ? "onButtonsPage" : "notButtonsPage")} id="Header-Home-Btn" onClick={() => { scrollTo("Home"); headerPositionIconTo("Header-Home-Btn"); }}>Home</a> */}
                            </li>
                            <li>
                                <motion.button className={((currentPage === "about") ? "onButtonsPage" : "notButtonsPage")} id="Header-About-Btn" onClick={() => { scrollTo("about", scrollButtonCallback, 300); headerPositionIconTo("Header-About-Btn"); }}   whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                >About</motion.button>
                                {/* <a className={((currentPage === 1) ? "onButtonsPage" : "notButtonsPage")}id="Header-About-Btn" onClick={() => {scrollTo("About"); headerPositionIconTo("Header-About-Btn"); }}>About</a> */}
                            </li>
                            <li>
                                <motion.button className={((currentPage === "projects") ? "onButtonsPage" : "notButtonsPage")} id="Header-Projects-Btn" onClick={() => { scrollTo("Projects", scrollButtonCallback, 300); headerPositionIconTo("Header-Projects-Btn"); }} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                >Projects</motion.button>
                                {/* <a className={((currentPage === 2) ? "onButtonsPage" : "notButtonsPage")}id="Header-Projects-Btn" onClick={() => {scrollTo("Projects"); headerPositionIconTo("Header-Projects-Btn"); }}>Projects</a> */}
                            </li>
                            <li>
                                <motion.button className={((currentPage === "contact") ? "onButtonsPage" : "notButtonsPage")} id="Header-Contact-Btn" onClick={() => { scrollTo("contact", scrollButtonCallback, 300); headerPositionIconTo("Header-Contact-Btn"); }} whileHover={{scale: 1.1}} whileTap={{scale: 0.95}}
                                >Contact</motion.button>
                                {/* <a className={((currentPage === 3) ? "onButtonsPage" : "notButtonsPage")}id="Header-Contact-Btn" onClick={() => {scrollTo("Contact"); headerPositionIconTo("Header-Contact-Btn"); }}>Contact</a> */}
                            </li>
                        </ul>
                        <button className="headerButton poppins-regular">Button</button>
                    </nav>}
                    {(size.width < 800) &&  <Sidebar  scrollButtonCallback={scrollButtonCallback}/>}
                    {/* <div className="headerContentToggle">
                            {menuOpen ? <AiOutlineClose onClick={menuToggleHandler} /> : <RiMenu5Line onClick={menuToggleHandler} />}
                        </div> */}
                    </div>
        </header>
        </div>
    );
}
export default Header