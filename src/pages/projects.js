import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import '../styles/About2.css'
import ProjectContainer from "../components/ProjectContainer";
import BlunderBoats_image from '../img/projectMedia/BlunderBoats_image.png';
import BlunderBoats_video from '../img/projectMedia/BlunderBoats_video.mp4';
import SoftSleep_image from '../img/projectMedia/SoftSleep_image.png';
import SoftSleep_video from '../img/projectMedia/SoftSleep_video.mp4';
import TendencyTuner_image from '../img/projectMedia/TendencyTuner_image.png';
import TendencyTuner_video from '../img/projectMedia/TendencyTuner_video.mp4';

const ProjectsPage = () => {
    const [itemSize, setItemSize] = useState([400,180]);
    const itemSizes = [[400,180], [0, 0]]
    // const itemAspect = 180/400;
    const skillsDivVariants = {
        open:{
            transition:{
                staggerChildren: 0,
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
                stiffness: 30,
                staggerChildren: 0.0,
                staggerDirection: 1,
            }
        },
        closed:{
            x: 0,
            transition:{
                delay: 0.1,
                duration: 0.08,
            }
        }
    }
    const skillsItemVariants = {
        open:{                
            y: 0,
            opacity: 1,
            transition:{
                type: "spring",
                stiffness: 20,
            }
        },
        closed:{
            y: 10,
            opacity: 0,
            transition:{
                delay: 0.07,
                duration: 0.08,
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
            if(amWidth === 1){
                let rem = window.innerHeight - 250;
                if(rem > 4 * window.innerWidth){
                    //setItemSize(Math.min(window.innerWidth * 0.7, 400), Math.min(window.innerWidth * 0.7 * (180/400), 180))
                }else{
                    setItemSize([Math.min(window.innerWidth * 0.65, 350), Math.min(window.innerWidth * 0.65 * (180/400), 157.5)])
                }
            }
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
                        {/* <div style={{   backgroundImage: `url(${greenBlob})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '0',
                            backgroundSize: 'contain',
                            backgroundColor: 'transparent',
                            width: 'max(100%, 1000px)',
                            height: '160%',
                            position: 'absolute',
                            zIndex: '-1',
                            bottom: '20%',
                            left: '-30%'
                        }}>
                </div> */}
            <h2 className="titleText">Projects</h2>
            <motion.div style={{background: 'white', width: '300px', height: '2px', borderRadius: '1px', marginRight: 0, marginLeft: 0, margin: 'auto', marginTop: '10px', marginBottom: '10px'}}
            variants={{open: {width: 'min(350px, 80vw)',       
                transition:{
                    type: "linear",
                    delay: 0.15,
                    duration: 0.2,
            }}, closed: {width: '100px'}}}
            />
            <motion.div variants={skillsDivVariants} id="projItemDiv" style={{paddingTop: '20px', width: '90vw', height: 'calc(100vh - 200px)', marginRight: 0, marginLeft: 0, margin: 'auto', background: '', display: 'flex', gap: '30px',flexDirection: 'column', justifyContent: 'start', backgroundColor: 'transparent'}}>
                {itemRows.map((row, r_index) => {
                    return(
                        <motion.div key={r_index} variants={skillsRowsVariants} style={{gap: '30px',height: `${itemSize[1]}px`, display: 'flex', flexDirection: 'row', justifyContent: 'center', background: ''}}>
                            {row.map((item, c_index) => {
                                return(
                                    <motion.div key={c_index} variants={skillsItemVariants} style={{height: `${itemSize[1]}px`, width: itemSize[0], background: ''}}>
                                        <ProjectContainer title={item.title} poster={item.poster} video={item.video} width={`${itemSize[0]}px`} link={item.link}/>
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