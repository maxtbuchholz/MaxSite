import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import '../../styles/sub/TendencyTuner.css'
import AppleButton from "../../components/AppleButton";
import AndroidButton from "../../components/AndroidButton";
import Header from "../../components/Header";
const TendencyTuner = ({}) => {
    const ProjectsBottomRef = useRef();
    const onPage = true;
    useEffect(() => {
      var headrRect = document.getElementById('uiHeader');
      headrRect.classList.remove("headerFull");
      headrRect.classList.add("headerOnTop");
    })
    return (
      <div>
      <Header currentPage={"projects"} scrollButtonCallback={(() => {})} waveTransforms={[[-1000],[-1000],[-1000],[-1000],[-1000],[-1000],[-1000]]} headerHeight={'100px'} topOfPage={0} ulTop={0} terminalTop={`-100%`}/> 
      <div className="sectionContainer" style={{marginTop: '100px'}}>
        <div className="longSection">
        <div  style={{"height" : "1800px", "width" : "100%", "background" : "blue"}}>
                      <div className={`bottomSpacer tanEnder`}/>
                      <div className={`darkBottomSpacer darkEnder`}/>
                      <div className={`topSpacer tanEnder`}/>
                      <div className={`darkTopSpacer darkEnder`}/>
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