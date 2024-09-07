import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { color, delay, easeOut, motion, transform } from 'framer-motion';
import '../styles/About2.css'
import { type } from "@testing-library/user-event/dist/type";
import SkillsContainer from "../components/SkillsContainer";
import img_github from '../img/logos/github-mark-white.svg'
import img_swift from '../img/logos/Swift_logo_color.svg'
import img_java from '../img/logos/java-icon.svg'
import { duration } from "@mui/material";
import greenBlob from '../img/svg/greenBlob.svg';
import { green } from "@mui/material/colors";

const About2Page = () => {
    const itemSizes = [120,80];
    const [itemWidth, setItemWidth] = useState(window.innerWidth > 800 ? itemSizes[0] : itemSizes[1]);
    const skillsDivVariants = {
        open:{
            transition:{
                staggerChildren: 0.05,
            }
        },
        closed:{
            transition:{
                staggerChildren: 0.02,
                staggerDirection: -1,
            }
        }
    }
    const skillsRowsVariants = {
        open:{                
            x: 0,
            transition:{
                type: "spring",
                stiffness: 120,
                staggerChildren: 0.08,
                staggerDirection: -1,
            }
        },
        closed:{
            x: -25,
            transition:{
                delay: 0.3,
                duration: 0.2,
            }
        }
    }
    const skillsItemVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition:{
                type: "spring",
                stiffness: 120,
            }
        },
        closed:{
            y: 20,
            opacity: 0,
            transition:{
                delay: 0.5,
                duration: 0.1,
            }
        }
    }
    // const items = Array(80).fill({image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png', title: 'react'});
    const items = [
        {site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', title: 'javaScript'},
        {site: 'https://react.dev/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png', title: 'react'},
        {site: 'https://www.java.com/en/', image: img_java, title: 'java'},
        {site: 'https://github.com/', image: img_github, title: 'github'},
        {site: 'https://en.wikipedia.org/wiki/C%2B%2B', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/612px-ISO_C%2B%2B_Logo.svg.png', title: 'c++'},
        {site: 'https://flutter.dev/', image: 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg', title: 'flutter'},
        {site: 'https://www.mongodb.com/', image: 'https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png', title: 'mongoDB'},
        {site: 'https://code.visualstudio.com/', image: 'https://code.visualstudio.com/assets/images/code-stable.png', title: 'vsCode'},
        {site: 'https://dotnet.microsoft.com/en-us/languages/csharp', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/512px-Logo_C_sharp.svg.png?20221121173824', title: 'c#'},
        {site: 'https://dotnet.microsoft.com/en-us/', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Microsoft_.NET_logo.png?20200524033331', title: '.net'},
        {site: 'https://dotnet.microsoft.com/en-us/apps/xamarin', image: 'https://logodix.com/logo/2165424.png', title: 'xamarin'},
        {site: 'https://developer.apple.com/xcode/', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Xcode_14_icon.png/240px-Xcode_14_icon.png', title: 'xCode'},
        {site: 'https://en.wikipedia.org/wiki/HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png', title: 'html'},
        {site: 'https://www.mysql.com/', image: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', title: 'mySQL'},
        {site: 'https://nodejs.org/en', image: 'https://nodejs.org/static/logos/jsIconGreen.svg', title: 'node.js'},
        {site: 'https://en.wikipedia.org/wiki/CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/240px-CSS3_logo_and_wordmark.svg.png', title: 'css'},
        {site: 'https://developer.apple.com/swift/', image: img_swift, title: 'swift'},
        {site: 'https://visualstudio.microsoft.com/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1024px-Visual_Studio_Icon_2019.svg.png?20210214224138', title: 'visual studio'},
        {site: 'https://unity.com/', image: 'https://preview.redd.it/tu3gt6ysfxq71.png?auto=webp&s=10ab55d9dc09e7ed6ea59bd5916800a5272d5969', title: 'unity'},
        {site: 'https://en.wikipedia.org/wiki/C_(programming_language)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/760px-C_Programming_Language.svg.png?20201031132917', title: 'c'},
        {site: 'https://developer.android.com/', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Android_Studio_Logo_%282023%29.svg/240px-Android_Studio_Logo_%282023%29.svg.png', title: 'android studio'}
    ]
    const [itemRows, setItemRows] = useState([[]])
    useEffect(() => {
        const handleResize = () => {
            setItemWidth(window.innerWidth > 800 ? itemSizes[0] : itemSizes[1]);
            const element = document.getElementById("itemDiv");
            let localWidth = (window.innerWidth > 800 ? itemSizes[0] : itemSizes[1]);
            let amWidth = Math.max(Math.floor(element.clientWidth / localWidth), 1);
            let amHeight = Math.floor(element.clientHeight / localWidth);
            let currentTopOfRow = 0;
            let newRows = []
            for(let i = 0; i < items.length; i++){
                if(i >= currentTopOfRow){
                    newRows.push([]);
                    currentTopOfRow += (newRows.length % 2 === 0 ? amWidth - 1 : amWidth);
                }
                if(newRows.length <= amHeight){
                    newRows[newRows.length - 1].push(items[i]);
                }
            }
            setItemRows(newRows);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [onPage, setOnPage] = useState(false);
    const pageRef = useRef();
    useEffect(() => {
      const pagObserver = new IntersectionObserver((entries) => {
          const entry = entries[0];
          setOnPage(entry.isIntersecting)
      });
      pagObserver.observe(pageRef.current);
    }, []);
    return (
        <motion.div className="about2Page" initial={'closed'} animate={onPage ? "open" : "closed"}>
            {/* <div style={{   backgroundImage: `url(${greenBlob})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '0',
                            backgroundSize: 'contain',
                            backgroundColor: 'transparent',
                            width: 'max(100%, 1000px)',
                            height: '160%',
                            position: 'absolute',
                            zIndex: '-1',
                            top: '20%',
                            left: '-30%'
                        }}>
                </div> */}
            <h2 className="titleText">Skills</h2>
            <motion.div style={{background: 'white', width: '300px', height: '2px', borderRadius: '1px', marginRight: 0, marginLeft: 0, margin: 'auto', marginTop: '10px', marginBottom: '14px'}}
            variants={{open: {width: 'min(350px, 80vw)',       
                transition:{
                type: "linear",
                delay: 0.1,
                duration: 0.2,
            }}, closed: {width: '100px'}}}
            />
            <motion.div variants={skillsDivVariants} id="itemDiv" style={{width: '90vw', maxWidth: '1000px', height: '70%', maxHeight: '500px', marginRight: 0, marginLeft: 0, margin: 'auto', background: '', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                {itemRows.map((row, r_index) => {
                    return(
                        <motion.div key={r_index} variants={skillsRowsVariants} style={{height: (itemWidth - 5), display: 'flex', flexDirection: 'row', justifyContent: 'center', background: ''}}>
                            {row.map((item, c_index) => {
                                return(
                                    <motion.div key={c_index} variants={skillsItemVariants} style={{width: itemWidth, height: itemWidth}}>
                                        <SkillsContainer image={item.image} title={item.title} link={item.site}/>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    );
                })}
            </motion.div>
            <div id="Projects-Observer" ref={pageRef} className="pageIntersectionObserver"/>
        </motion.div>
    );
};

export default About2Page;