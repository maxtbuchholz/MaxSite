import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import '../../styles/sub/TendencyTuner.css'
import AppleButton from "../../components/AppleButton";
import AndroidButton from "../../components/AndroidButton";
import Header from "../../components/Header";
import ProjectName from "../../components/ProjectName";
import { duration } from "@mui/material";
const TendencyTuner = ({}) => {
    const ProjectsBottomRef = useRef();
    const onPage = true;
    useEffect(() => {
      var headrRect = document.getElementById('uiHeader');
      headrRect.classList.remove("headerFull");
      headrRect.classList.add("headerOnTop");
    }, []);
    const [time, setTime] = useState(0);

    const clockSecInterval = 0.02;
    useEffect(() => {
      // const interval = setInterval(() => {setTime(e => e + clockSecInterval); console.log(time)}, clockSecInterval * 1000);
      return () => {
        // clearInterval(interval);
      };
    }, []);
    return (
      <div>
      <Header currentPage={"projects"} scrollButtonCallback={(() => {})} waveTransforms={[[-1000],[-1000],[-1000],[-1000],[-1000],[-1000],[-1000]]} headerHeight={'100px'} topOfPage={0} ulTop={0} terminalTop={`-100%`}/> 
      <div className="sectionContainer" style={{marginTop: '100px'}}>
        <div className="longSection">
          <div className="tenTenWave4" style={{position: 'absolute', width: '200vw', height: '70vh', backgroundColor: '', backgroundPositionX: `${time * 20 + 807}px`, transition: {duration: '100ms'}}}/>
          <div className="tenTenWave3" style={{position: 'absolute', width: '200vw', height: '70vh', backgroundColor: '', backgroundPositionX: `${-time * 20 + 1000}px`, transition: {duration: '100ms'}}}/>
          <div className="tenTenWave2" style={{position: 'absolute', width: '200vw', height: '70vh', backgroundColor: '', backgroundPositionX: `${time * 40 + 1225}px`, transition: {duration: '100ms'}}}/>
          <div className="tenTenWave1" style={{position: 'absolute', width: '200vw', height: '70vh', backgroundColor: '', backgroundPositionX: `${-time * 40 + 650}px`, transition: {duration: '100ms'}}}/>
        <div className='carouselContainer' style={{zIndex: '10'}}>
          <ProjectName className='' appCount={3} itemChangedCallBack={ () => {} } selectedAppName={"Tendency Tuner"} selectedAppIndex={2}/>
        </div>
        <div  style={{"height" : "1800px", "width" : "100%", "background" : "white"}}>
                      <div className={`bottomSpacer tanEnder`}/>
                      <div className={`darkBottomSpacer darkEnder`}/>
                      <div className={`topSpacer tanEnder`}/>
                      <div className={`darkTopSpacer darkEnder`}/>
                      <div className="wholeNoteSymbol"/>
                        <div className="appStoreLogo2">
              <AndroidButton onPage={onPage} buttonLink={'https://play.google.com/store/apps/details?id=com.companyname.tendency_tuner'}/>
            </div>
            <div className="appStoreLogo1">
              <AppleButton onPage={onPage} buttonLink={'https://apps.apple.com/us/app/tendency-tuner/id1638040915'}/>
            </div>
            <hr className="appStoreLogoHR"></hr>
        </div>
        </div>
        </div>
        </div>
    );
};

export default TendencyTuner;