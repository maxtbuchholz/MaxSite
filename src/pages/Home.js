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
        const pages = ["home", "about", "projects", "contact"];
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
            height = window.innerHeight
            width = window.innerWidth
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
    useEffect(() => {
        var setScrollTop = null;
        var prevScrollTop = null;
        const interval = setInterval(() => {
            updatePageVisabilities();
            if(setScrollTop === null){ return; }
            if(setScrollTop === prevScrollTop){ return; }
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
        }, 20);
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
    const[progBarWidth, setProgBarWidth] = useState(0);
    const [rocksBackFullTop, setRocksBackFullTop] = useState('100px');
    const [rockAnimatiionValue, setRockAnimatiionValue] = useState(0);
      function handleHeaderHeight(){
            handleMovingScroll((scrollPosition / (height - 100)))
          var scroll = Math.min(scrollPosition, height);
          var headerSize = Math.max(height - scroll, 0);
          scroll = Math.max(scroll, 0)
          headerSize = Math.min(height, headerSize);
        var headrRect = document.getElementById('uiHeader');
        if(headerSize > 100){       //still on first header page
            if(!headerFull){
                headerFull = true;
                headrRect.classList.remove("headerOnTop");
                headrRect.classList.add("headerFull");
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
                    headrRect.classList.add("headerOnTop");
                    headrRect.classList.remove("headerFull");
            }
        }
      };
      function handleMovingScroll(scroll){
        handleRocksBack(scroll)
      }
      function handleRocksBack(scroll){
        let startPage = 1;
        let endPage = 2;
        if(scroll <= startPage - 1){
            setRocksBackFullTop('100vh')
            setRockAnimatiionValue(0);
        }else if(scroll >= endPage + 1){
            setRockAnimatiionValue(1);
            setRocksBackFullTop('-100vh')
        }else if(scroll < startPage){
            setRockAnimatiionValue(0);
            let diff = (scroll - startPage);
            setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 100px)`)
        }else if(scroll > endPage){
            setRockAnimatiionValue(1);
            let diff = (scroll - endPage);
            setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 100px)`)
        }else{
            setRockAnimatiionValue((scroll - startPage) / (endPage - startPage));
            setRocksBackFullTop('100px')
        }
      }
      function handleHeaderWaves(percFul){
        handleHeaderElements(percFul);
        let rock1Y = (((Math.sin((percFul * 3) - 1.4) * 1) -1) * -100);//+100;
        percFul = 1 - percFul;
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
        if(scrollPosition === 0){
        let percFul = 1;
        let oneMin = 0;
        let halfSH = height / 2;
        if(window.innerWidth > 800){
            setUlTop((percFul * height) + (percFul * -180));
            setTerminalTop((percFul * halfSH) + (oneMin * -height) + (percFul * -220));
            setProgBarHeight((percFul * height) + (percFul * -100));
        }else{
            setUlTop((percFul * height) + (oneMin * -halfSH) + (percFul * -130));
            setTerminalTop((percFul * halfSH) + (oneMin * -(height + halfSH)) + (percFul * -216));
            setProgBarHeight((percFul * height) + (percFul * -100));
        }
    }
      }, [])
      function handleHeaderElements(percFul){
        let oneMin = 1 - percFul;
        let halfSH = height / 2;
        let lerSH = height * 0.6;
        if(window.innerWidth > 800){
            setUlTop((percFul * height) + (percFul * -180));
            setTerminalTop((percFul * halfSH) + (oneMin * -height) + (percFul * -220));
            setProgBarHeight((percFul * height) + (percFul * -100));
        }else{
            setUlTop((percFul * height) + (oneMin * -halfSH) + (percFul * -130));
            setTerminalTop((percFul * halfSH) + (oneMin * -(height + halfSH)) + (percFul * -216));
            setProgBarHeight((percFul * height) + (percFul * -100));
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
            setCurrPageName("about")
            //window.history.replaceState(null, currPageName, "/about");
        }else if(homeVisible){
            setCurrPage(0);
            setCurrPageName("home")
            //window.history.replaceState(null, currPageName, "/home");
        }
      }
    return (
        <div>
         <RocksBack fullBodyTop={rocksBackFullTop} rockAnimateValue={rockAnimatiionValue}/>   
         <Header currentPage={currPageName} scrollButtonCallback={changeInAutoScrolling} waveTransforms={headerWaveArray} headerHeight={headerHeight} topOfPage={topOfPage} ulTop={ulTop} terminalTop={terminalTop} progresBarTop={progBarHeight} progresBarWidth={progBarWidth}/>           
        <div ref={ScrollPageRef} id="sectionContainer" className={"sectionContainer " + (((!isAutoScrolling) && (!disableScroll)) ? "scrollSnapContainer" : "")}>
            <div className="firstSection" id="top" style={{background: '#121424'}}>
                <div id="Home-Observer" ref={HomeRef} className="pageIntersectionObserver"/>
            </div>
            {/* <div className="section" id="about">
                <div id="About-Observer" ref={AboutRef} className="pageIntersectionObserver"/>
                <About1Page onPage = {currPage === 1}/>
            </div> */}
            <div className="section" id="about2">
                <div id="About-Observer" ref={AboutRef} className="pageIntersectionObserver"/>
                <About2Page />
                <div id="AboutBottom-Observer" ref={AboutBottomRef} className="pageIntersectionObserver"/>
            </div>
            <div className="section" id="projects">
                <ProjectsPage />
                <div id="Projects-Observer" ref={ProjectsRef} className="pageIntersectionObserver"/>
            </div>
            {/* <div className="longSection" id="projectsna">
                <h3 className="sectionHeader poppins-semibold">Projects</h3>
                {(selectedApIndex === 0) && <BlunderBoatsPage onPage={currPage === 2} pageVisibilityChanged={projectsVisibleChange}/>}
                {(selectedApIndex === 1) && <SoftSleepPage onPage={currPage === 2} pageVisibilityChanged={projectsVisibleChange}/>}
                {(selectedApIndex === 2) && <TendencyTunerPage onPage={currPage === 2} pageVisibilityChanged={projectsVisibleChange}/>}
                <div className='carouselContainer' style={{zIndex: '10'}}>
                    <ProjectName className='' appCount={apps.length} itemChangedCallBack={ selectedAppChanged } selectedAppName={apps[selectedApIndex].title} selectedAppIndex={selectedApIndex}/>
                </div>
            </div> */}
            <div className="lastSection" id="contact">
                <div id="Contact-Observer" ref={ContactRef} className="pageIntersectionObserver"/>
                <ContactPage onPage = {currPage === 3}/>
            </div>
        </div>
        </div>
    );
};

export default Home;