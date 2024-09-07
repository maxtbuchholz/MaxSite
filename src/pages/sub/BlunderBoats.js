import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { delay, easeIn, motion, transform } from 'framer-motion';
import '../../styles/sub/BlunderBoats.css'
import AppleButton from "../../components/AppleButton";
import AndroidButton from "../../components/AndroidButton";
import { duration } from "@mui/material";
import { TextField } from "@mui/material";
import { generateTerrain } from "../../js/bb-proceduralGen";
import Header from "../../components/Header";
import ProjectName from "../../components/ProjectName";
const BlunderBoats = () => {
  const onPage = true;
    const [textBox1V, setTextBox1V] = useState(false);
    const TB1Ref = useRef();
    const [textBox2V, setTextBox2V] = useState(false);
    const TB2Ref = useRef();
    const [textBox3V, setTextBox3V] = useState(false);
    const TB3Ref = useRef();
    const persistenceRef = useRef();
    const octavesRef = useRef();
    useEffect(() => {
      generateTerrain(octavesRef.current.value, persistenceRef.current.value);
      const tb1Observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if(entry.isIntersecting){
            setTextBox1V(entry.isIntersecting)
          }
      });
      tb1Observer.observe(TB1Ref.current);
      const tb2Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if(entry.isIntersecting){
          setTextBox2V(entry.isIntersecting)
        }
    });
    tb2Observer.observe(TB2Ref.current);
    const tb3Observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting){
        setTextBox3V(entry.isIntersecting)
      }
  });
  tb3Observer.observe(TB3Ref.current);
}, [])
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
          y: 35,
          opacity: 1,
      }
  }
  const textBoxVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.81, 0.9, 1.01],
        duration: 0.8,
      }
    },
    closed: {
      x: '-100%',
      opacity: 0,
    }
  }
  const proceduralGraphVariants ={
    open: {
      x: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.81, 0.9, 1.01],
        duration: 0.8,
      }
    },
    closed: {
      x: '100%',
      opacity: 0,
    }
  }
  const island1SeaComponentvariants = {
    open:{
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          dampening: 100,
      }
    },
    closed:{
        y: -50,
    }
}
const projecttile1Variants = {
  open: {
    rotate: -110,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 4,
    }
  },
  closed: {
    rotate: 11
  }
}
const projecttile2Variants = {
  open: {
    rotate: -110,
    transition: {
      delay: 1,
      ease: "linear",
      repeat: Infinity,
      duration: 4,
    }
  },
  closed: {
    rotate: 11
  }
}
useEffect(() => {
  var headrRect = document.getElementById('uiHeader');
  headrRect.classList.remove("headerFull");
  headrRect.classList.add("headerOnTop");
})
    return (
      <div>
      <Header currentPage={"projects"} classList='darkHeader' scrollButtonCallback={(() => {})} waveTransforms={[[-1000],[-1000],[-1000],[-1000],[-1000],[-1000],[-1000]]} headerHeight={'100px'} topOfPage={0} ulTop={0} terminalTop={-1000000} progresBarWidth={0}/> 
      <div className="sectionContainer" style={{marginTop: '100px'}}>
        <div className="longSection">
        <div className='carouselContainer' style={{zIndex: '10'}}>
          <ProjectName className='' appCount={3} itemChangedCallBack={ () => {} } selectedAppName={"Blunder Boats"} selectedAppIndex={0}/>
        </div>
        <div  style={{"width" : "100%", "background" : "#FFFFFF"}} className="bbPage">
                                <div className={`bottomSpacer cyanEnder`}/>
                                <div className={`darkBottomSpacer darkEnder`}/>

                                <div className={`topSpacer cyanEnder`}/>
                                <div className={`darkTopSpacer darkEnder`}/>
          {/* <div className="cloudFieldMiddle"/>
          <div className="cloudFieldEnd"/> */}
          <div className="cloudTop"/>
          <div className="cloudSide1"/>
          <div className="cloudSide2"/>
          <div className="cloudSide3"/>
          <motion.div animate={textBox1V ? "open" : "closed"} initial='closed' variants={{open: {opacity: 1, y: 0, transition: {duration: 0.6}}, closed: {opacity: 0, y: 300}}} className="bbProjectileGraph"/>
          <motion.div animate={textBox1V ? "open" : "closed"} initial='closed' variants={{open: {opacity: 1}, closed: {opacity: 0}}}>
          <motion.div className="bbProjectile1"  animate={textBox1V ? "open" : "closed"} initial='closed' variants={projecttile1Variants}/>
          <motion.div className="bbProjectile1"  animate={textBox1V ? "open" : "closed"} initial='closed' variants={projecttile2Variants}/>
          <div className="bbBoat1"/>
          </motion.div>
          <motion.div initial="closed" animate={onPage ? "open" : "closed"} className="island1Container">
            <motion.div variants={island1Variants}>
              <motion.div variants={island1Componentvariants} className="fill i1-l6" style={{zIndex: '1'}}/>
              <motion.div variants={island1Componentvariants} className="fill i1-l5" style={{zIndex: '1'}}/>
              <motion.div variants={island1Componentvariants} className="fill i1-l4" style={{zIndex: '1'}}/>
              <motion.div variants={island1Componentvariants} className="fill i1-l3" style={{zIndex: '1'}}/>
              <motion.div variants={island1Componentvariants} className="fill i1-l2" style={{zIndex: '1'}}/>
              <motion.div variants={island1Componentvariants} className="fill i1-l1" style={{zIndex: '1'}}/>
            </motion.div>
            <motion.div variants={island1Variants}>
              <motion.div variants={island1SeaComponentvariants} className="fill i1-s3" style={{zIndex: '0'}} />
              <motion.div variants={island1SeaComponentvariants} className="fill i1-s2" style={{zIndex: '1'}}/>
              <div className="fill i1-s1" style={{zIndex: '2'}}/>
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
            <motion.div animate={textBox1V ? "open" : "closed"} initial='closed' variants={textBoxVariants} className="blunderBoatsTextBox">
              <div className="bbTextBoxSideBar leftBar"/>
              <div className="bbTextBoxTopBar leftBar"/>
              <div className="bblrTextBoxSideBar rightBar"/>
              <div className="bblrTextBoxBottomBar rightBar"/>
              <h3>Auto Aim</h3>
              <h5>Once a target is found, Enemy turrets, based on a given force, calculate how steep of an angle the turret will need to be fired at for the projectile to reach its target</h5>
              <h5>Turrets also take its targets current velocity into account and calculates the amount of time a projectile will take to get to its target from a angle, it then finds the pont at which this projectile motion graph crosses the graph of the targets change in distance relative to the Turret.</h5>
              <h5>Randomness is then added, primarily by randomly adding or subtracting a small number from the turrets angle which has the effect of making far shots less accurate that close shots.</h5>
            </motion.div>
            <div className="bbScrollSenseDiv" ref={TB1Ref}/>
            </div>

            <div className="bbTextBox2">
            <motion.div animate={textBox2V ? "open" : "closed"} initial='closed' variants={textBoxVariants} className="blunderBoatsTextBox">
              <div className="bbTextBoxSideBar leftBar"/>
              <div className="bbTextBoxTopBar leftBar"/>
              <div className="bblrTextBoxSideBar rightBar"/>
              <div className="bblrTextBoxBottomBar rightBar"/>
              <h3>Procedural Generation</h3>
              <h5>Islands are generated by stacking layers (or octaves) of random gradant noise. Each subsequent octave gets smaller and smaller so with a high enough resolution mesh you can imagine the highest octaves affecting small rocks or tiny hills while the first octaves affect the landmass as a whole</h5>
              <h5>Persistence affects how much each subsequent octave affects the terrain, with a high persistance value the terrain will be very jagged and pointy while a low persistance value will be smooth</h5>
              <h5>Mess around with procedural generation below</h5>
              <form onSubmit={e => {e.preventDefault(); generateTerrain(octavesRef.current.value, persistenceRef.current.value);}}>
              <TextField defaultValue={6} id="outlined-basic" inputRef={octavesRef} label="Octaves" variant="filled" required type="number" InputProps={{ inputProps: { min: 1, max: 8 } }}/>
              <TextField defaultValue={0.5} id="outlined-basic" inputRef={persistenceRef} label="Persistence" variant="filled" required type="number" InputProps={{ inputProps: { step: 0.01, min: 0.01, max: 1 }}}     onKeyDown={(e)=> {
    if(e.key !== "Backspace"){
      if(persistenceRef.current.value.includes('.')){
          if(persistenceRef.current.value.split('.')[1].length >= 2){
              var num = parseFloat(persistenceRef.current.value);
              var cleanNum = num.toFixed(2);
              persistenceRef.current.value = cleanNum;
              e.preventDefault();
          }
      }
  }
                  }}/>
              <button>Generate</button>
              </form>
            </motion.div>
            <div className="bbScrollSenseDiv" ref={TB2Ref}/>
            </div>
            <motion.div animate={textBox2V ? "open" : "closed"} initial='closed' variants={proceduralGraphVariants}  className="proceduralGraphParent">
              <canvas id="proceduralCanvas" className="proceduralCanvas"/>
            </motion.div>

            <div className="bbTextBox3">
            <motion.div animate={textBox3V ? "open" : "closed"} initial='closed' variants={textBoxVariants} className="blunderBoatsTextBox">
              <div className="bbTextBoxSideBar leftBar"/>
              <div className="bbTextBoxTopBar leftBar"/>
              <div className="bblrTextBoxSideBar rightBar"/>
              <div className="bblrTextBoxBottomBar rightBar"/>
              <h3>Neural Network</h3>
              <h5>Python ML agents was used to train neural networks for the game</h5>
              <h5>The neural networks control enemy ship movement, making them move toward and around targets, as well as tryig to avoid terrain</h5>
            </motion.div>
            <div className="bbScrollSenseDiv" ref={TB3Ref}/>
            </div>


            <motion.div animate={textBox3V ? "open" : "closed"} initial='closed' variants={{open: {opacity: 1}, closed: {opacity: 0}}}>
            <motion.div className="bbBoat2" animate={textBox3V ? "open" : "closed"} initial='closed' variants={{open: {x: 0, transition: {duration: 2}}, closed: {x: 200}}}/>
            </motion.div>
            <motion.div animate={textBox3V ? "open" : "closed"} initial='closed' variants={{open: {opacity: 1}, closed: {opacity: 0}}}>
            <motion.div className="bbBoat3" animate={textBox3V ? "open" : "closed"} initial='closed' variants={{open: {x: 0, transition: {duration: 3}}, closed: {x: -400}}}/>
            </motion.div>
            <motion.div animate={textBox3V ? "open" : "closed"} initial='closed' variants={{open: {opacity: 1}, closed: {opacity: 0}}}>
            <motion.div className="dottedPath" animate={textBox3V ? "open" : "closed"} initial='closed' variants={{open: {y: 0, transition: {duration: 1}}, closed: {y: 300}}}/>
            </motion.div>

        </div>
        </div>
        </div>
        </div>
    );
};

export default BlunderBoats;