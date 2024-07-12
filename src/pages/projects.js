import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { color, delay, easeOut, motion, transform } from 'framer-motion';
import '../styles/About2.css'
import { type } from "@testing-library/user-event/dist/type";
import SkillsContainer from "../components/SkillsContainer";
import img_github from '../img/logos/github-mark-white.svg'
import img_swift from '../img/logos/Swift_logo_color.svg'
import { duration } from "@mui/material";
import ProjectContainer from "../components/ProjectContainer";
import BlunderBoats_image from '../img/projectMedia/BlunderBoats_image.png';
import BlunderBoats_video from '../img/projectMedia/BlunderBoats_video.mp4';
import SoftSleep_image from '../img/projectMedia/SoftSleep_image.png';
import SoftSleep_video from '../img/projectMedia/SoftSleep_video.mp4';
import TendencyTuner_image from '../img/projectMedia/TendencyTuner_image.png';
import TendencyTuner_video from '../img/projectMedia/TendencyTuner_video.mp4';

const ProjectsPage = () => {
    const [itemSize, setItemSize] = useState([400,180]);
    const itemSizes = [[400,180], ['min(88%, 340px)', 140]]
    // const itemAspect = 180/400;
    const skillsDivVariants = {
        open:{
            transition:{
                staggerChildren: 0.34,
            }
        },
        closed:{
            transition:{
                staggerChildren: 0.0,
                staggerDirection: -1,
            }
        }
    }
    const skillsRowsVariants = {
        open:{                
            x: 0,
            transition:{
                type: "spring",
                stiffness: 60,
                staggerChildren: 0.14,
                staggerDirection: 1,
            }
        },
        closed:{
            x: 0,
            transition:{
                delay: 0.2,
                duration: 0.1,
            }
        }
    }
    const skillsItemVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition:{
                type: "spring",
                stiffness: 50,
            }
        },
        closed:{
            y: 50,
            opacity: 0,
            transition:{
                delay: 0.2,
                duration: 0.1,
            }
        }
    }
    const items = [
        {title: 'Blunder Boats', poster: BlunderBoats_image, video: BlunderBoats_video, link: '/projects/blunder-boats' },
        {title: 'Soft Sleep', poster: SoftSleep_image, video: SoftSleep_video, link: '/projects/soft-sleep' },
        {title: 'Tendency Tuner', poster: TendencyTuner_image, video: TendencyTuner_video, link: '/projects/tendency-tuner' },
    ]
    const [itemRows, setItemRows] = useState([[]])
    useEffect(() => {
        const handleResize = () => {
            // setItemWidth(window.innerWidth > 800 ? itemSizes[0] : itemSizes[1]);
            const element = document.getElementById(`projItemDiv`);
            // let localWidth = (window.innerWidth > 800 ? itemSizes[0] : itemSizes[1]);
            // let localWidth = (itemSize[0] / 100) * window.innerWidth;
            setItemSize(window.innerWidth > 920 ? itemSizes[0] : itemSizes[1]);
            let amWidth = (window.innerWidth > 920 ? 2 : 1);
            // let amHeight = Math.max(Math.floor(element.clientHeight / itemSize[1]),1);
            let currentTopOfRow = 0;
            let newRows = []
            for(let i = 0; i < items.length; i++){
                if(i >= currentTopOfRow){
                    newRows.push([]);
                    currentTopOfRow += amWidth;
                }
                newRows[newRows.length - 1].push(items[i]);
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
            <h2 className="titleText">Projects</h2>
            <motion.div style={{background: 'white', width: '300px', height: '2px', borderRadius: '1px', marginRight: 0, marginLeft: 0, margin: 'auto', marginTop: '10px', marginBottom: '8px'}}
            variants={{open: {width: 'min(350px, 80vw)',       
                transition:{
                    type: "linear",
                    delay: 0.1,
                    duration: 0.2,
            }}, closed: {width: '100px'}}}
            />
            <motion.div variants={skillsDivVariants} id="projItemDiv" style={{width: '90vw', maxWidth: '910px', height: '75%', maxHeight: '500px', minHeight: '460px', marginRight: 0, marginLeft: 0, margin: 'auto', background: '', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: ''}}>
                {itemRows.map((row) => {
                    return(
                        <motion.div variants={skillsRowsVariants} style={{height: itemSize[1], display: 'flex', flexDirection: 'row', justifyContent: 'space-around', background: ''}}>
                            {row.map((item) => {
                                return(
                                    <motion.div variants={skillsItemVariants} style={{width: itemSize[0], height: itemSize[1], background: ''}}>
                                        <ProjectContainer title={item.title} poster={item.poster} video={item.video} maxWidth={itemSize[0]} link={item.link}/>
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

export default ProjectsPage;