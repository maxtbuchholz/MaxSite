import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import '../../styles/sub/TendencyTuner.css'
import AppleButton from "../../components/AppleButton";
import AndroidButton from "../../components/AndroidButton";
const TendencyTuner = ({onPage, pageVisibilityChanged}) => {
    const ProjectsBottomRef = useRef();
    useEffect(() => {
        const projectsBottomObserver = new IntersectionObserver((entries) => {
          const entry = entries[0];
            pageVisibilityChanged(entry.isIntersecting)
        });
        projectsBottomObserver.observe(ProjectsBottomRef.current);
    })
    return (
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
            {/* <motion.div className="tanSpacer tanTop" initial={"closed"} animate={onPage ? "open" : "closed"}
          variants={{open: {y: -100}, closed: {y: -100}}}/> */}
            <div id="ProjectsBottom-Observer" ref={ProjectsBottomRef} className="pageBottomIntersectionObserver"/>
        </div>
    );
};

export default TendencyTuner;