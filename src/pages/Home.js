import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { Carousel, Card } from "../components/Carousel";
import softSleepIcon from '../img/app-icons/softSleep-icon.png';
import blunderBoatsIcon from '../img/app-icons/blunderBoats-icon.png';
import tendencyTunerIcon from '../img/app-icons/tendencyTuner-icon.png';
import { scrollTo, scrollToInstant } from "../js/nav";
import SoftSleepPage from "./sub/SoftSleep";
import BlunderBoatsPage from "./sub/BlunderBoats";
import TendencyTunerPage from "./sub/TendencyTuner";
import ContactPage from "./Contact";
import Header from "../components/Header";
import { motion } from 'framer-motion';
import About1Page from "./About1";
import zIndex from "@mui/material/styles/zIndex";
import ProjectName from "../components/ProjectName";
import { MdAlignHorizontalRight } from "react-icons/md";
import IntroTerminal from "../components/IntroTerminal";
import { FcPositiveDynamic } from "react-icons/fc";
import About2Page from "./About2";
import ProjectsPage from "./projects";
import RocksBack from "../components/RocksBack";
import ContactBack from "../components/ContactBack";
const apps = [
    {title: 'Blunder Boats', content: blunderBoatsIcon },
    {title: 'Soft Sleep', content: softSleepIcon },
              {title: 'Tendency Tuner', content: tendencyTunerIcon },
]
const Home = ({page, project}) => {
      var [isIOS, setIsIOS] = useState(false);
      useLayoutEffect(() => {
        setIsIOS(navigator.userAgent.platform === 'iPad' || navigator.userAgent.platform === 'iPhone' || navigator.userAgent.platform === 'iPod');
        if(isIOS) setDisableScroll(false);
        const pages = ["home", "skills", "projects", "contact"];
        const projects = ["soft-sleep", "blunder-boats", "tendency-tuner"];
        if(page != null){
            page = page.toLowerCase();
            if(pages.includes(page)){
                scrollToInstant(page);
                if(page !== 'home'){
                    height = window.innerHeight;
                    scrollPosition = document.getElementById("sectionContainer").scrollTop;
                    handleHeaderHeight();
                }
            }
        }
        if(project != null){
            project = project.toLowerCase();
            if(projects.includes(project)){
                let projButton = document.getElementById("projButtonRight");
                if(projButton != null){
                    projButton.click();
                }
                //firstApp = projects.indexOf(project);
            }
        }
        const handleResize = () => {
            height = window.innerHeight;
            width = window.innerWidth;
            setOnePercBackHeight(Math.min(window.innerHeight, 1000) / 100);
            setTerminalInitTop();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);
    var height = window.innerHeight
    var width = window.innerWidth
    var scrollPosition = 0;
    var [disableScroll, setDisableScroll] = useState(false);
    const [usetreansitionAnimate, setUseTransitionAnimate] = useState(false);
    const [onePercBackHeight, setOnePercBackHeight] = useState(Math.min(window.innerHeight, 800) / 100);
    useLayoutEffect(() => {
        setInterval(() => {
            setUseTransitionAnimate(true);
            return true;
      }, 10);
    }, [])
    useEffect(() => {
        var setScrollTop = null;
        var prevScrollTop = null;
        var amountSameInARow = 0;
        const interval = setInterval(() => {
            updatePageVisabilities();
            if(setScrollTop === null){ return; }
            if(setScrollTop === prevScrollTop){
                if(amountSameInARow >= 10){ 
                    return;
                }
                amountSameInARow++;
            }else if(amountSameInARow !== 0){
                amountSameInARow = 0;
            }
            prevScrollTop = setScrollTop;
            if(!isIOS){
                let target = document.getElementById("projects");
                if( ((target.offsetTop) < (setScrollTop + 50)) &&
                    (((target.offsetTop + target.offsetHeight) - (window.innerHeight)) > (setScrollTop + 100))){
                        setDisableScroll(true);
                }
                else{
                    setDisableScroll(false);
                }
            }
            scrollPosition = setScrollTop;
            changeProgBarWidth((setScrollTop / (height - 100)) % 1);
            handleHeaderHeight();
        }, 100);
        const handleScroll = (e) => {
            setScrollTop = e.target.scrollTop;
    }

    ScrollPageRef.current.addEventListener('scroll', handleScroll);
    return () => {clearInterval(interval); ScrollPageRef.current.removeEventListener('scroll', handleScroll)}
}, []);
    function changeProgBarWidth(perc){
        setProgBarWidth((1 - Math.abs((perc) - 0.5) * 2))
    }
    const [ulTop, setUlTop] = useState(window.innerWidth > 800 ? ((1 * (window.innerHeight)) + (1 * -180)) : ((1 * height) + (0 * -(window.innerHeight * 0.5))) + (1 * -130));
    const [terminalTop, setTerminalTop] = useState(window.innerWidth > 800 ? ((1 * (window.innerHeight * 0.5)) + (0 * -(window.innerHeight) + (1 * -220))) : ((1 * (window.innerHeight * 0.5)) + (0 * -(window.innerHeight + (window.innerHeight * 0.5))) + (1 * -216)));
    const [topOfPage, setTopOfPage] = useState(true);
    var headerFull = true;
    const[progBarHeight, setProgBarHeight] = useState(0);
    const[headerBackTop, setHeaderBackTop] = useState(1);
    const[contactBackTop, setContactBackTop] = useState(1);
    const[progBarWidth, setProgBarWidth] = useState(0);
    const [rocksBackFullTop, setRocksBackFullTop] = useState('100vh');
    const [rockAnimatiionValue, setRockAnimatiionValue] = useState(0);
      function handleHeaderHeight(){
            handleMovingScroll(Math.round((scrollPosition / (height - 100)) * 1000) / 1000)
          var scroll = Math.min(scrollPosition, height);
          var headerSize = Math.max(height - scroll, 0);
          scroll = Math.max(scroll, 0)
          headerSize = Math.min(height, headerSize);
        var headrRect = document.getElementById('uiHeader');
        if(headerSize > 100){       //still on first header page
            if(!headerFull){
                headerFull = true;
                // headrRect.classList.remove("headerOnTop");
                // headrRect.classList.add("headerFull");
            }
            if(!topOfPage){
                if(scroll <= 10){
                    setTopOfPage(true);
                }
            }else{
                if(scroll > 10){
                    setTopOfPage(false);
                }
            }
            handleHeaderWaves((headerSize - 100) / (height - 100))
                setHeaderHeight(`${headerSize}px`)
        }else{                      //past first header page
            if(topOfPage){
                if(scroll > 10){
                    setTopOfPage(false);
                }
            }
            if(headerFull){
                headerFull = false;
                handleHeaderWaves(0)
                    setHeaderHeight(`${100}px`)
                    // headrRect.classList.add("headerOnTop");
                    // headrRect.classList.remove("headerFull");
            }
        }
      };
      function handleMovingScroll(scroll){
        console.log(scroll)
        handleRocksBack(scroll)
        //handleHeaderBack(scroll)
        handleContactBack(scroll)
      }
      function handleHeaderBack(scroll){
        setHeaderBackTop(Math.max(Math.min(scroll, 1), 0));
      }
      function handleContactBack(scroll){
        let val = Math.max(Math.min(1 - (scroll - 2), 1), 0);
        prevContactTop = lerpBackAnimate(val, prevContactTop, previousContactTime, 0.18);
        previousContactTime = new Date();
        setContactBackTop(prevContactTop);
      }
      function handleRocksBack(scroll){
        let startPage = 1;
        let endPage = 2;

        prevMiddleTop = lerpBackAnimate(scroll, prevMiddleTop, previousMiddleTime, 0.18);
        previousMiddleTime = new Date();
        scroll = prevMiddleTop;
        //scroll += 0.01;
        // if(scroll <= startPage - 1){
        //     // setRocksBackFullTop('100vh')
        //     setRockAnimatiionValue(0);
        //     let diff = (scroll - startPage);
        //     setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 200px)`)
        // }else if(scroll >= endPage + 1){
        //     // setRockAnimatiionValue(1);
        //     // setRocksBackFullTop('-100vh')
        //     setRockAnimatiionValue(1);
        //     let diff = (scroll - endPage);
        //     setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 200px)`)
        // }else if(scroll < startPage){
        //     setRockAnimatiionValue(0);
        //     let diff = (scroll - startPage);
        //     setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 200px)`)
        // }else if(scroll > endPage){
        //     setRockAnimatiionValue(1);
        //     let diff = (scroll - endPage);
        //     setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 200px)`)
        // }else{
        //     setRockAnimatiionValue((scroll - startPage) / (endPage - startPage));
        //     setRocksBackFullTop('0px')
        // }

        let extraHeight = Math.max(height - 700, 0);
        if(scroll < startPage){
            // console.log('before: ' + scroll)
            let diff = (scroll - startPage);
            setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + ${extraHeight}px)`)
        }else if(scroll > endPage){
            // console.log('after : ' + scroll)
            let diff = (scroll - endPage);
            setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 00px)`)
        }else{
            let l = (scroll - startPage) / (endPage - startPage);
            // console.log('in    : ' + scroll)
            setRocksBackFullTop(`calc(${(1 - l) * extraHeight}px)`)
            // setRocksBackFullTop('0px')
        }
        if(scroll < 0.96){
            scroll = 0.96;
        }
        setRockAnimatiionValue(scroll - 1)
      }
      function handleHeaderWaves(percFul){
        //handleHeaderElements(percFul);
        // let rock1Y = percFul * 200;//(((Math.sin((percFul * 3) - 1.4) * 1) -1) * -100);//+100;
        percFul = 1 - percFul;
        let rock1Y = 0;
        if(width > 800){
            rock1Y = (((Math.sin(((1 - percFul) * 3) - 1.4) * 1) -1) * -100);//+100;
        }else{
            rock1Y = percFul * 200;//(((Math.sin((percFul * 3) - 1.4) * 1) -1) * -100);//+100;
        }
        setheaderWaveArray([
                            -percFul * 100, 
                            percFul * 100,
                            percFul * 120, 
                            percFul * 100, 
                            rock1Y,
                            -percFul * 150,
                            percFul * 600,
                        ])
      }
      useLayoutEffect(() => {
        setTerminalInitTop();
      }, [])
      function setTerminalInitTop(){
            let percFul = 1;
            let oneMin = 0;
            let halfSH = height / 2;
            let hMOH = height - 100;
            if(window.innerWidth > 800){
                setTerminalTop((percFul * halfSH) + (oneMin * -hMOH) + (percFul * -220));
            }else{
                setTerminalTop(Math.max((percFul * halfSH) + (oneMin * -(hMOH + halfSH)) + (percFul * -246), 136));
            }
      }
      const [headerWaveArray, setheaderWaveArray] = useState([0,0,0]);      
      const [headerHeight, setHeaderHeight] = useState('100%');
      const HomeRef = useRef();
      const ScrollPageRef = useRef();
      const AboutRef = useRef();
      const ProjectsRef = useRef();
      const ContactRef = useRef();
      const AboutBottomRef = useRef();
      useEffect(() => {
        const homeObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            homeVisibleChange(entry.isIntersecting)
        });
        homeObserver.observe(HomeRef.current);
        const aboutObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            aboutVisibleChange(entry.isIntersecting)
        });
        aboutObserver.observe(AboutRef.current);
        const projectsObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            projectsVisibleChange(entry.isIntersecting)
        });
        projectsObserver.observe(ProjectsRef.current);
        const contactObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            contactVisibleChange(entry.isIntersecting)
        });
        contactObserver.observe(ContactRef.current);
        const aboutBottomObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            aboutVisibleChange(entry.isIntersecting)
        });
        aboutBottomObserver.observe(AboutBottomRef.current);
      }, []);
      const [currPage, setCurrPage] = useState(0);
      const [currPageName, setCurrPageName] = useState("home");
      var autoScrollAmount = 0;
      function changeInAutoScrolling(isScroll){
        if(isScroll){
            autoScrollAmount++;
                setAutoScrolling(true);
        }else{
            autoScrollAmount--;
            if(autoScrollAmount === 0){
                    setAutoScrolling(false);
            }
        }
      }
      const [isAutoScrolling, setAutoScrolling] = useState(false);
      var homeVisible = false;
      var aboutVisible = false;
      var projectsVisible = false;
      var contactVisible = false;
      function homeVisibleChange(vis){
        homeVisible = vis;
        updatePageVisabilities()
      }
      function aboutVisibleChange(vis){
        aboutVisible = vis;
        updatePageVisabilities()
      }
      function projectsVisibleChange(vis){
        projectsVisible = vis;
        updatePageVisabilities()
      }
      function contactVisibleChange(vis){
        contactVisible = vis;
        updatePageVisabilities()
      }
      function updatePageVisabilities(){
        if(contactVisible){
            setCurrPage(3);
            setCurrPageName("contact")
            //window.history.replaceState(null, currPageName, "/contact");
        }else if(projectsVisible){
            setCurrPage(2);
            setCurrPageName("projects")
            //window.history.replaceState(null, currPageName, "/projects");
        }else if(aboutVisible){
            setCurrPage(1);
            setCurrPageName("skills")
            //window.history.replaceState(null, currPageName, "/about");
        }else if(homeVisible){
            setCurrPage(0);
            setCurrPageName("home")
            //window.history.replaceState(null, currPageName, "/home");
        }
      }
      var prevContactTop = null;
      var prevMiddleTop = null;
      var previousContactTime = null;
      var previousMiddleTime = null;
      var currentTime = null;
      function lerpBackAnimate(val, pastVal, prevTime, L){
            //set up first time
            if((pastVal == null) || (prevTime == null)){
                return val;
            }else{//normal running
                currentTime = new Date();
                let s = (currentTime.getTime() - prevTime.getTime()) / 1000;
                if(s >= 1){
                    return val;
                }
                s /= L;
                val = (s * val) + ((1 - s) * pastVal);
                return val;
            }
      }
    return (
        <div>
         <ContactBack onePercHeight={onePercBackHeight} ease={usetreansitionAnimate}  fullBodyTop={contactBackTop}/>
         <RocksBack onePercHeight={onePercBackHeight} ease={usetreansitionAnimate}  fullBodyTop={rocksBackFullTop} rockAnimateValue={rockAnimatiionValue}/>
         <Header ease={usetreansitionAnimate} headerBackTop={headerBackTop} currentPage={currPageName} scrollButtonCallback={changeInAutoScrolling} waveTransforms={headerWaveArray} headerHeight={headerHeight} topOfPage={topOfPage} ulTop={ulTop} terminalTop={terminalTop} progresBarTop={progBarHeight} progresBarWidth={progBarWidth}/>           
        <div ref={ScrollPageRef} id="sectionContainer" className={"sectionContainer " + (((!isAutoScrolling) && (!disableScroll)) ? "scrollSnapContainer" : "")}>
            <div className="firstSection" id="top" style={{background: '#ff000000'}}>
                <div className="introTerminal transitionHelper" style={{position: 'absolute', top: 0, transform: `translate(0px, ${terminalTop}px)`}}>
                    <IntroTerminal/>
                </div>
                <div id="Home-Observer" ref={HomeRef} className="pageIntersectionObserver"/>
            </div>
            <div className="section" id="skills">
                <div id="About-Observer" ref={AboutRef} className="pageIntersectionObserver"/>
                <About2Page />
                <div id="AboutBottom-Observer" ref={AboutBottomRef} className="pageIntersectionObserver"/>
            </div>
            <div className="section" id="projects">
                <ProjectsPage />
                <div id="Projects-Observer" ref={ProjectsRef} className="pageIntersectionObserver"/>
            </div>
            <div className="lastSection" id="contact">
                <div id="Contact-Observer" ref={ContactRef} className="pageIntersectionObserver"/>
                <ContactPage onPage = {currPage === 3}/>
            </div>
        </div>
        </div>
    );
};

export default Home;