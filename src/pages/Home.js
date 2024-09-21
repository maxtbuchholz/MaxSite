import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { scrollToInstant } from "../js/nav";
import ContactPage from "./Contact";
import Header from "../components/Header";
import IntroTerminal from "../components/IntroTerminal";
import About2Page from "./About2";
import ProjectsPage from "./projects";
import RocksBack from "../components/RocksBack";
import ContactBack from "../components/ContactBack";
const Home = ({page, project}) => {
      var [isIOS, setIsIOS] = useState(false);
      useLayoutEffect(() => {
        if(window.innerWidth > 800){
            setLargeScreen(true)
        }else{
            setLargeScreen(false)
        }
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
            }
        }
        const handleResize = () => {
            height = window.innerHeight;
            width = window.innerWidth;
            if(window.innerWidth > 800){
                setLargeScreen(true)
            }else{
                setLargeScreen(false)
            }
            setOnePercBackHeight(Math.min(window.innerHeight, 1000) / 100);
            setTerminalInitTop();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);
    const [largeScreen, setLargeScreen] = useState(true);
    var height = window.innerHeight
    var width = window.innerWidth
    var scrollPosition = 0;
    var [disableScroll, setDisableScroll] = useState(false);
    const [usetreansitionAnimate, setUseTransitionAnimate] = useState(false);
    const [onePercBackHeight, setOnePercBackHeight] = useState(Math.min(window.innerHeight, 800) / 100);
    //const [previousScrollTime, setPreviousScrollTime] = useState(null);
    //var previousScrollTime = new Date();
    useLayoutEffect(() => {
        let startTransInterval = setInterval(() => {
            setUseTransitionAnimate(true);
            clearInterval(startTransInterval);
      }, 10);
    }, [])
    //useEffect(() => {
        // let newScrollTime = Date.now;
        // if(previousScrollTime != null){
        //     console.log(newScrollTime.getTime() - previousScrollTime.getTime());
        // }
        // setPreviousScrollTime(new Date());
        //setPreviousScrollTime(newScrollTime);
    // })
    var previousScrollTime = null;
    useEffect(() => {
        var setScrollTop = null;
        var prevScrollTop = null;
        var amountSameInARow = 0;
        const interval = setInterval(() => {
            updatePageVisabilities();
            //if(setScrollTop === null){ return; }
            prevScrollTop = lerpBackAnimate(
                setScrollTop,
                prevScrollTop,
                previousScrollTime,
                0.3
            )
            previousScrollTime = new Date();
            if(setScrollTop === prevScrollTop){
                if(amountSameInARow >= 10){ 
                    //return;
                }
                amountSameInARow++;
            }else if(amountSameInARow !== 0){
                amountSameInARow = 0;
            }
            //prevScrollTop = setScrollTop;


            //prevScrollTop = setScrollTop;
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



            scrollPosition = prevScrollTop;
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
    const [terminalTop, setTerminalTop] = useState(window.innerWidth > 800 ? ((1 * (window.innerHeight * 0.5)) + (0 * -(window.innerHeight) + (1 * -220))) : ((1 * (window.innerHeight * 0.5)) + (0 * -(window.innerHeight + (window.innerHeight * 0.5))) + (1 * -216)));
    const [topOfPage, setTopOfPage] = useState(true);
    var headerFull = true;
    const[contactBackTop, setContactBackTop] = useState(1);
    const[contactBackDownTop, setContactBackDownTop] = useState('0vh');
    const[contactBackOpacity, setContactBackOpacity] = useState(0);
    const[progBarWidth, setProgBarWidth] = useState(0);
    const [rocksBackFullTop, setRocksBackFullTop] = useState('100vh');
    const [rockAnimatiionValue, setRockAnimatiionValue] = useState(0);
    const[rocksBackOpacity, setRocksBackOpacity] = useState(0);
      function handleHeaderHeight(){
            handleMovingScroll(Math.round((scrollPosition / (height - 100)) * 1000) / 1000)
          var scroll = Math.min(scrollPosition, height);
          var headerSize = Math.max(height - scroll, 0);
          scroll = Math.max(scroll, 0)
          headerSize = Math.min(height, headerSize);
        if(headerSize > 100){       //still on first header page
            if(!headerFull){
                headerFull = true;
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
        }else{                      //past first header page
            if(topOfPage){
                if(scroll > 10){
                    setTopOfPage(false);
                }
            }
            if(headerFull){
                headerFull = false;
                handleHeaderWaves(0)
            }
        }
      };
      const [midCloundsL, setMidCloudsL] = useState(0);
    //   const [midCloudsOpacity, setMidCloudsOpacity] = useState(1);
    //   var previousCloudsOpacity = null;
    //   var previousOpacityTime = null;
      function handleMovingScroll(scroll){
        handleRocksBack(scroll)
        handleContactBack(scroll)
        setMidCloudsL(Math.max(Math.min(scroll, 1), 0))

        // previousCloudsOpacity = lerpBackAnimate(
        //     Math.pow(Math.max(Math.min((1 - scroll) + 0.1, 1), 0), 1),
        //     previousCloudsOpacity,
        //     previousOpacityTime,
        //     0.25
        // );
        // previousOpacityTime = new Date();
        // console.log(previousCloudsOpacity)
        // setMidCloudsOpacity(previousCloudsOpacity)
      }
      function handleContactBack(scroll){
        let val = Math.max(Math.min(1 - (scroll - 2), 1), 0);
        // prevContactTop = lerpBackAnimate(val, prevContactTop, previousContactTime, 0.25);
        // previousContactTime = new Date();
        //setContactBackDownTop(`${0}vh`);

            // prevContactOpacity = lerpBackAnimate(
            //     Math.max(Math.min(Math.pow(scroll-1.85, 2), 1), 0),
            //     prevContactOpacity,
            //     previousContactOpacityTime,
            //     0.25
            // )
            if(scroll < 2){
                setContactBackOpacity(0);
                setContactBackTop(0);
            }else{
                setContactBackOpacity(Math.max(Math.min(Math.pow(scroll-1.85, 2), 1), 0));
                setContactBackTop(val);
            }
        //previousContactOpacityTime = new Date();
      }
      function handleRocksBack(scroll){
        let startPage = 1;
        let endPage = 2;

        // prevMiddleTop = lerpBackAnimate(scroll, prevMiddleTop, previousMiddleTime, 0.25);
        // previousMiddleTime = new Date();
        // scroll = prevMiddleTop;

        let extraHeight = Math.max(height - 700, 0);
        
        if(scroll < startPage){
            let diff = (scroll - startPage);

            // prevRocksOpacity = lerpBackAnimate(
            //     Math.pow(Math.max(Math.min(scroll + 0.1, 1), 0), 2),
            //     prevRocksOpacity,
            //     previousRocksOpacityTime,
            //     0.25
            // );
            setRocksBackOpacity(Math.pow(Math.max(Math.min(scroll + 0.1, 1), 0), 1.1))

            setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + ${extraHeight}px)`)
        }else if(scroll > endPage){

            // prevRocksOpacity = lerpBackAnimate(
            //     Math.pow((Math.max(Math.min(((1 -(scroll - 2)) + 0.1), 1), 0)), 2),
            //     prevRocksOpacity,
            //     previousRocksOpacityTime,
            //     0.25
            // );
            setRocksBackOpacity(Math.pow((Math.max(Math.min(((1 -(scroll - 2)) + 0.1), 1), 0)), 1.1))

            let diff = (scroll - endPage);
            setRocksBackFullTop(`calc(calc(-100vh * ${diff}) + 00px)`)
        }else{
            let l = (scroll - startPage) / (endPage - startPage);
            setRocksBackFullTop(`calc(${(1 - l) * extraHeight}px)`)
            // prevRocksOpacity = lerpBackAnimate(
            //     1,
            //     prevRocksOpacity,
            //     previousRocksOpacityTime,
            //     0.25
            // );
            setRocksBackOpacity(1)
        }

        //setRocksBackOpacity(prevRocksOpacity)
        //previousRocksOpacityTime = new Date();
        if(scroll < 0.96){
            scroll = 0.96;
        }
        setRockAnimatiionValue(scroll - 1)
      }
      function handleHeaderWaves(percFul){
        percFul = 1 - percFul;
        let rock1Y = 0;
        if(width > 800){
            rock1Y = (((Math.sin(((1 - percFul) * 3) - 1.4) * 1) -1) * -100);
        }else{
            rock1Y = percFul * 200;
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
        }else if(projectsVisible){
            setCurrPage(2);
            setCurrPageName("projects")
        }else if(aboutVisible){
            setCurrPage(1);
            setCurrPageName("skills")
        }else if(homeVisible){
            setCurrPage(0);
            setCurrPageName("home")
        }
      }
      var prevContactTop = null;
      var prevContactOpacity = null;
      var prevMiddleTop = null;
      var previousContactTime = null;
      var previousContactOpacityTime = null;
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
         <ContactBack opacity={contactBackOpacity} onePercHeight={onePercBackHeight} ease={usetreansitionAnimate}  fullBodyTop={contactBackTop}contactTop={contactBackDownTop}/>
         <RocksBack opacity={rocksBackOpacity} onePercHeight={onePercBackHeight} ease={usetreansitionAnimate}  fullBodyTop={rocksBackFullTop} rockAnimateValue={rockAnimatiionValue}/>
         <Header opacity={1} ease={usetreansitionAnimate} currentPage={currPageName} scrollButtonCallback={changeInAutoScrolling} waveTransforms={headerWaveArray} headerHeight={'100%'} topOfPage={topOfPage} ulTop={0} terminalTop={terminalTop} progresBarWidth={progBarWidth}/>           
        <div ref={ScrollPageRef} id="sectionContainer" className={"sectionContainer " + (((!isAutoScrolling) && (!disableScroll)) ? "scrollSnapContainer" : "")}>
        <div className="cloud_1 moveable" style={{left: (largeScreen ? `${((1 - midCloundsL) * -2) + (midCloundsL * -150)}vw` : `${((1 - midCloundsL) * -12) + (midCloundsL * -400)}vw`), opacity: 1}}/>
                <div className="cloud_2 moveable" style={{right: (largeScreen ? `${((1 - midCloundsL) * -2) + (midCloundsL * -150)}vw` : `${((1 - midCloundsL) * -10) + (midCloundsL * -400)}vw`), opacity: 1}}/>
                <div className="cloud_3 moveable" style={{left: (largeScreen ? `${((1 - midCloundsL) * 6) + (midCloundsL * -300)}vw` : `${((1 - midCloundsL) * -2) + (midCloundsL * -800)}vw`), opacity: 1}}/>
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