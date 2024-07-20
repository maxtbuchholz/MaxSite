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
    const [textBox1V, setTextBox1V] = useState(false);
    const TB1Ref = useRef();
    const [textBox2V, setTextBox2V] = useState(false);
    const TB2Ref = useRef();
    useEffect(() => {
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
    }, [])
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
    useEffect(() => {
      var headrRect = document.getElementById('uiHeader');
      headrRect.classList.remove("headerFull");
      headrRect.classList.add("headerOnTop");
    }, []);
    const [time, setTime] = useState(0);

    const clockSecInterval = 0.02;
    useEffect(() => {
      const interval = setInterval(() => {setTime(e => e + clockSecInterval); console.log(time)}, clockSecInterval * 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
      <div>
      <Header currentPage={"projects"} scrollButtonCallback={(() => {})} waveTransforms={[[-1000],[-1000],[-1000],[-1000],[-1000],[-1000],[-1000]]} headerHeight={'100px'} topOfPage={0} ulTop={0} terminalTop={`-100%`}/> 
      <div className="sectionContainer" style={{marginTop: '100px'}}>
        <div className="longSection">
          <div className="tenTenWave4" style={{position: 'absolute', width: '200vw', height: '650px', backgroundColor: '', backgroundPositionX: `${time * 20 + 807}px`, transition: {duration: '100ms'}}}/>
          <div className="tenTenWave3" style={{position: 'absolute', width: '200vw', height: '650px', backgroundColor: '', backgroundPositionX: `${-time * 20 + 1000}px`, transition: {duration: '100ms'}}}/>
          <div className="tenTenWave2" style={{position: 'absolute', width: '200vw', height: '650px', backgroundColor: '', backgroundPositionX: `${time * 40 + 1225}px`, transition: {duration: '100ms'}}}/>
          <div className="tenTenWave1" style={{position: 'absolute', width: '200vw', height: '650px', backgroundColor: '', backgroundPositionX: `${-time * 40 + 650}px`, transition: {duration: '100ms'}}}/>
        <div className='carouselContainer' style={{zIndex: '10'}}>
          <ProjectName className='' appCount={3} itemChangedCallBack={ () => {} } selectedAppName={"Tendency Tuner"} selectedAppIndex={2}/>
        </div>
        <div className="tentun_page"  style={{"width" : "100%", "background" : "white"}}>
                      <div className={`bottomSpacer tanEnder`}/>
                      <div className={`darkBottomSpacer darkEnder`}/>
                      <div className={`topSpacer tanEnder`}/>
                      <div className={`darkTopSpacer darkEnder`}/>
                      <div className="wholeNoteSymbol"/>
                      <div className="appStoreLogo2_tt">
                        <AndroidButton onPage={onPage} buttonLink={'https://play.google.com/store/apps/details?id=com.companyname.tendency_tuner'}/>
                        </div>
                        <div className="appStoreLogo1_tt">
                        <AppleButton onPage={onPage} buttonLink={'https://apps.apple.com/us/app/tendency-tuner/id1638040915'}/>
                      </div>
            <hr className="appStoreLogoHR"></hr>
            <div className="tt_textbox1 tt_textbox" style={{}}>
            <motion.div animate={textBox1V ? "open" : "closed"} variants={textBoxVariants} style={{textAlign: 'center'}}>
              <h2 className="poppins-medium">Music Application</h2>
              <div style={{height: '2px', width: '100%', background: 'black'}}/>
              <h5> For my first large project I decided to combine my interests in music with my programming ability to create an instrument tuner application<br/><br/>
              Beyond a simple instrument tuner I also added a feature to calculate your and your instruments tuning tendencies based on a recording of yourself playing the instrument
              </h5>
            </motion.div>              
            <div ref={TB1Ref} style={{width: '100%', height: '5px'}}/>
            </div>
            <div className="tt_textbox2 tt_textbox" style={{}}>
            <motion.div animate={textBox2V ? "open" : "closed"} variants={textBoxVariants} style={{textAlign: 'center'}}>
              <h2 className="poppins-medium">Fourier Transform</h2>
              <div style={{height: '2px', width: '100%', background: 'black'}}/>
              <h5> In order to change date from the time domain to the magnitude and frequency domain you can use a algorithm called a fourier transform<br/><br/>
              To visualize a fourier transform we can imagine taking a wave and twisting it around a polar graph. The twist value is modifiable to test out different frequencies
              </h5>
            </motion.div>
            <div ref={TB2Ref} style={{width: '100%', height: '5px'}}/>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default TendencyTuner;