import React, { useState, useEffect, useRef } from "react";
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
const apps = [
    {title: 'Blunder Boats', content: blunderBoatsIcon },
    {title: 'Soft Sleep', content: softSleepIcon },
              {title: 'Tendency Tuner', content: tendencyTunerIcon },
]
const Home = ({page, project}) => {
    function selectedAppChanged(appIndex){
        setselectedApIndex(appIndex)
        let newPage = "/"+currPageName;
        //window.history.replaceState(null, newPage, newPage);
      }
      var [isIOS, setIsIOS] = useState(false);
    useEffect(() => {
        setIsIOS(navigator.userAgent.platform === 'iPad' || navigator.userAgent.platform === 'iPhone' || navigator.userAgent.platform === 'iPod');
        if(isIOS) setDisableScroll(false);
        const pages = ["home", "about", "projects", "contact"];
        const projects = ["soft-sleep", "blunder-boats", "tendency-tuner"];
        if(page != null){
            page = page.toLowerCase();
            if(pages.includes(page)){
                scrollToInstant(page);
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
            //handleHeaderHeight();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
      const [selectedApIndex, setselectedApIndex] = useState(0);
      const firstApp = 0;
    var height = window.innerHeight
    var scrollPosition = 0;
    var [disableScroll, setDisableScroll] = useState(false);
    const handleScroll = (e) => {
        updatePageVisabilities();
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if(!isIOS){
        let target = document.getElementById("projects");
        if( ((target.offsetTop) < (scrollTop + 50)) &&
            (((target.offsetTop + target.offsetHeight) - (window.innerHeight)) > (scrollTop + 100))){
                setDisableScroll(true);
            }
            else{
                setDisableScroll(false);
            }
        }
            scrollPosition = scrollTop;
            // return;
            if((scrollTop < (height * 2.5)) || (headerFull === true)){
                if((Date.now() - tempTimeText) > 2){
                    handleHeaderHeight();
                    tempTimeText = Date.now()
                }
            }
    }
    const [topOfPage, setTopOfPage] = useState(true)
    var [headerFull, setheaderFull] = useState(true);
    var tempTimeText = Date.now()
      function handleHeaderHeight(){
          var scroll = Math.min(scrollPosition, height);
          var headerSize = Math.max(height - scroll, 0);
          scroll = Math.max(scroll, 0)
          headerSize = Math.min(height, headerSize);
        var headrRect = document.getElementById('uiHeader');
        if(headerSize > 100){       //still on first header page
            if(!headerFull){
                setheaderFull(true);
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
                setheaderFull(false);
                handleHeaderWaves(0)
                    setHeaderHeight(`${100}px`)
                    headrRect.classList.add("headerOnTop");
                    headrRect.classList.remove("headerFull");
            }
        }
      };
      function handleHeaderWaves(percFul){
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
      const [headerWaveArray, setheaderWaveArray] = useState([0,0,0]);      
      const [headerHeight, setHeaderHeight] = useState('100%');
      const HomeRef = useRef();
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
      }, [])
      const [currPage, setCurrPage] = useState(0);
      const [currPageName, setCurrPageName] = useState("home");
      var autoScrollAmount = 0;
      function changeInAutoScrolling(isScroll){
        // return;
        if(isScroll){
            autoScrollAmount++;
            // if(!isAutoScrolling){
                setAutoScrolling(true);
            //}
        }else{
            autoScrollAmount--;
            if(autoScrollAmount === 0){
                // if(isAutoScrolling){
                    setAutoScrolling(false);
                //}
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
         <Header currentPage={currPageName} scrollButtonCallback={changeInAutoScrolling} waveTransforms={headerWaveArray} headerHeight={headerHeight} topOfPage={topOfPage}/>           
        <div id="sectionContainer" className={"sectionContainer " + (((!isAutoScrolling) && (!disableScroll)) ? "scrollSnapContainer" : "")} onScroll={handleScroll}>
            <div className="firstSection" id="top">
                <div id="Home-Observer" ref={HomeRef} className="pageIntersectionObserver"/>
            </div>
            <div className="section" id="about">
                <div id="About-Observer" ref={AboutRef} className="pageIntersectionObserver"/>
                <About1Page onPage = {currPage === 1}/>
            </div>
            <div className="section" id="about2">About3
                <div id="AboutBottom-Observer" ref={AboutBottomRef} className="pageIntersectionObserver"/>
            </div>
            {/* <div className="belowAboutDiv">
            <motion.div className={`aboutBottomSpacer ${(selectedApIndex === 0) && "cyanBottom"}
                                                ${(selectedApIndex === 1) && "purpleBottom"}
                                                ${(selectedApIndex === 2) && "tanBottom"}`}/>
            </div> */}
            <div className="longSection" id="projects">
                <h3 className="sectionHeader poppins-semibold">Projects</h3>
                {(selectedApIndex === 0) && <BlunderBoatsPage onPage={currPage === 2} pageVisibilityChanged={projectsVisibleChange}/>}
                {(selectedApIndex === 1) && <SoftSleepPage onPage={currPage === 2} pageVisibilityChanged={projectsVisibleChange}/>}
                {(selectedApIndex === 2) && <TendencyTunerPage onPage={currPage === 2} pageVisibilityChanged={projectsVisibleChange}/>}
                <div className='carouselContainer' style={{zIndex: '10'}}>
                    {/* <Carousel itemChangedCallBack = { selectedAppChanged } selectedAppName={apps[selectedApIndex].title}>
                        {apps.map((item) => (
                            <Card key={item.title} title={ item.title } content={ item.content }/>
                        ))}
                    </Carousel> */}
                    <ProjectName className='' appCount={apps.length} itemChangedCallBack={ selectedAppChanged } selectedAppName={apps[selectedApIndex].title} selectedAppIndex={selectedApIndex}/>
                    <div id="Projects-Observer" ref={ProjectsRef} className="pageIntersectionObserver"/>
                </div>
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