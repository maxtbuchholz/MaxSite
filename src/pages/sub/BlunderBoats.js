import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import '../../styles/sub/BlunderBoats.css'
import AppleButton from "../../components/AppleButton";
import AndroidButton from "../../components/AndroidButton";
const BlunderBoats = ({onPage, pageVisibilityChanged}) => {
    const ProjectsBottomRef = useRef();
    useEffect(() => {
        const projectsBottomObserver = new IntersectionObserver((entries) => {
          const entry = entries[0];
            pageVisibilityChanged(entry.isIntersecting)
        });
        projectsBottomObserver.observe(ProjectsBottomRef.current);
    })
    const island1Variants = {
      open:{
          transition:{
              staggerChildren: 0.08,
              staggerDirection: -1,
          }
      },
      closed:{
          transition:{
              staggerChildren: 0.01,
              staggerDirection: -1,
          }
      }
  }
  const island1Componentvariants = {
      open:{
          y: 0,
          opacity: 1,
          transition: {
            // delay: 0,
            type: "spring",
            stiffness: 200,
            dampening: 100,
        }
      },
      closed:{
          y: 45,
          opacity: 1,
      }
  }
  const island1SeaComponentvariants = {
    open:{
        y: 0,
        opacity: 1,
        transition: {
          // delay: 0,
          type: "spring",
          stiffness: 300,
          dampening: 100,
      }
    },
    closed:{
        y: -50,
        opacity: 1,
    }
}
    return (
        <div  style={{"width" : "100%", "background" : "white"}} className="bbPage">
          <div className="cloudFieldMiddle"/>
          <div className="cloudFieldEnd"/>
          <div className="cloudTop"/>
          <div className="cloudSide1"/>
          <div className="cloudSide2"/>
          <div className="cloudSide3"/>
          <motion.div initial="closed" animate={onPage ? "open" : "closed"} className="island1Container">
            <motion.div variants={island1Variants}>
              <motion.div variants={island1Componentvariants} className="fill i1-l6" />
              <motion.div variants={island1Componentvariants} className="fill i1-l5" />
              <motion.div variants={island1Componentvariants} className="fill i1-l4" />
              <motion.div variants={island1Componentvariants} className="fill i1-l3" />
              <motion.div variants={island1Componentvariants} className="fill i1-l2" />
              <motion.div variants={island1Componentvariants} className="fill i1-l1" />
            </motion.div>
            <motion.div variants={island1Variants}>
              <motion.div variants={island1SeaComponentvariants} className="fill i1-s3" />
              <motion.div variants={island1SeaComponentvariants} className="fill i1-s2" />
              <div className="fill i1-s1" />
            </motion.div>
          </motion.div>
                        <div className="appStoreLogo2">
              <AndroidButton onPage={onPage} buttonLink={'https://play.google.com/store/apps/details?id=com.MaxBuchholz.BlunderBoats'}/>
            </div>
            <div className="appStoreLogo1">
              <AppleButton onPage={onPage} buttonLink={'https://apps.apple.com/us/app/blunder-boats/id6480428616'}/>
            </div>
            <hr className="appStoreLogoHR"></hr>

            <div className="bbTextBox1">
            <div className="blunderBoatsTextBox">
              <div className="bbTextBoxSideBar leftBar"/>
              <div className="bbTextBoxTopBar leftBar"/>
              <div className="bblrTextBoxSideBar rightBar"/>
              <div className="bblrTextBoxBottomBar rightBar"/>
              <h3>Auto Aim</h3>
              <h5>Once a target is found, Enemy turrets, based on a given force, calculate how steep of an angle the turret will need to be fired at for the projectile to reach its target.</h5>
              <h5>Turrets also take its targets current velocity into account and calculates the amount of time a projectile will take to get to its target from a angle, it then finds the pont at which this projectile motion graph crosses the graph of the targets change in distance relative to the Turret.</h5>
              <h5>Randomness is then added, primarily by randomly adding or subtracting a small number from the turrets angle which has the effect of making far shots less accurate that close shots.</h5>
            </div>
            </div>

                      {/* <motion.div className="cyanSpacer cyanTop" initial={"closed"} animate={onPage ? "open" : "closed"}
          variants={{open: {y: -100}, closed: {y: -100}}}/> */}
                                <div className={`bottomSpacer cyanEnder`}/>
                                <div className={`darkBottomSpacer darkEnder`}/>
            <div id="ProjectsBottom-Observer" ref={ProjectsBottomRef} className="pageBottomIntersectionObserver"/>
        </div>
    );
};

export default BlunderBoats;