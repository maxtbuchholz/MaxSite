import React, { useState, useEffect, useRef } from "react";
import { Carousel, Card } from "../components/Carousel";
import softSleepIcon from '../img/app-icons/softSleep-icon.png';
import blunderBoatsIcon from '../img/app-icons/blunderBoats-icon.png';
import tendencyTunerIcon from '../img/app-icons/tendencyTuner-icon.png';
import { scrollTo } from "../js/nav";
import SoftSleepPage from "./sub/SoftSleep";
import BlunderBoatsPage from "./sub/BlunderBoats";
import TendencyTunerPage from "./sub/TendencyTuner";
import Header from "../components/Header";
const apps = [{title: 'Soft Sleep', content: softSleepIcon },
              {title: 'Blunder Boats', content: blunderBoatsIcon },
              {title: 'Tendency Tuner', content: tendencyTunerIcon },
]
const Home = () => {
    function selectedAppChanged(appIndex){
        setselectedApIndex(appIndex)
      }
    useEffect(() => {
        const handleResize = () => {
            height = window.innerHeight
            //handleHeaderHeight();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
      const [selectedApIndex, setselectedApIndex] = useState(0);
    var height = window.innerHeight
    var scrollPosition = 0;
    var headerFull = true;
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
            scrollPosition = scrollTop;
            if(scrollTop < (height * 1.5)){
            handleHeaderHeight();
            }
    }
      function handleHeaderHeight(){
          var scroll = Math.min(scrollPosition, height);
          var headerSize = Math.max(height - scroll, 0);
          scroll = Math.max(scroll, 0)
          headerSize = Math.min(height, headerSize);
        var headrRect = document.getElementById('uiHeader');
        if(headerSize > 100){       //still on first header page
                headrRect.setAttribute("style",`display:block;height:${headerSize + 1}px`);
                headrRect.style.height=`${headerSize}px`;
            if(!headerFull){
                headerFull = true;
            }
        }else{                      //past first header page
            if(headerFull){
                headerFull = false;
                    headrRect.setAttribute("style",`display:block;height:${100}px`);
                    headrRect.style.height=`${100}px`;
            }
        }
      };

      const HomeRef = useRef();
      const AboutRef = useRef();
      const ProjectsRef = useRef();
      const ContactRef = useRef();
      useEffect(() => {
        const homeObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            pageVisibilityChanged(0, entry.isIntersecting)
        });
        homeObserver.observe(HomeRef.current);
        const aboutObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            pageVisibilityChanged(1, entry.isIntersecting)
        });
        aboutObserver.observe(AboutRef.current);
        const projectsObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            pageVisibilityChanged(2, entry.isIntersecting)
        });
        projectsObserver.observe(ProjectsRef.current);
        const contactObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            pageVisibilityChanged(3, entry.isIntersecting)
        });
        contactObserver.observe(ContactRef.current);
        
      }, [])
      const [currPage, setCurrPage] = useState(0);
      var pageVisibilities = [true, false, false, false]
      function pageVisibilityChanged(pageNo, visible){
        pageVisibilities[pageNo] = visible;
        for(let i = pageVisibilities.length - 1; i >= 0; i--){
            if(pageVisibilities[i]){
                setCurrPage(i);
                console.log(i);
                break;
            }
        }
      }

    return (
        <div>                
        <div id="sectionContainer" className="sectionContainer" onScroll={handleScroll}>
        <Header currentPage={currPage}/>
            <div className="firstSection" id="Top">
                <div id="Home-Observer" ref={HomeRef} className="pageIntersectionObserver"/>
            </div>
            <div className="section" id="About">About
                <div id="About-Observer" ref={AboutRef} className="pageIntersectionObserver"/>
            </div>
            <div className="section" id="About2">About2</div>
            <div className="section" id="About3">About3</div>
            <div className="section" id="Projects">
                {(selectedApIndex === 0) && <SoftSleepPage/>}
                {(selectedApIndex === 1) && <BlunderBoatsPage/>}
                {(selectedApIndex === 2) && <TendencyTunerPage/>}
                <div className='carouselContainer'>
                    <Carousel itemChangedCallBack = { selectedAppChanged } selectedAppName={apps[selectedApIndex].title} >
                        {apps.map((item) => (
                            <Card key={item.title} title={ item.title } content={ item.content }/>
                        ))}
                    </Carousel>
                    <div id="Projects-Observer" ref={ProjectsRef} className="pageIntersectionObserver"/>
                </div>
            </div>
            <div className="lastSection" id="Contact">Contact
                <div id="Contact-Observer" ref={ContactRef} className="pageIntersectionObserver"/>
            </div>
        </div>
        </div>
    );
};

export default Home;