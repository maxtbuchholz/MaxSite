/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect, useRef } from "react";
import pillowShape from '../../img/soft-sleep/pillowAlone.png';
import starShape from '../../img/soft-sleep/star.png';
import '../../styles/sub/SoftSleep.css';
import { WaveSVG } from "../../img/svg/WaveSVG";
import { SwiftSVG } from "../../img/svg/SwiftSVG";
import { LineWaveSVG } from "../../img/svg/LineWaveSVG";
import {Animated} from 'react-native';
import { motion } from 'framer-motion';
import AppleButton from "../../components/AppleButton";
import Header from "../../components/Header";
import ProjectName from "../../components/ProjectName";
import WaveHeader from "../../components/WaveHeader";
const SoftSleep = ({}) => {
  useEffect(() => {
    var headrRect = document.getElementById('uiHeader');
    headrRect.classList.remove("headerFull");
    headrRect.classList.add("headerOnTop");
  })
    const [fiveSVMovingalue] = useState(new Animated.Value(0));
    const [starAMovingValue] = useState(new Animated.Value(0.8));
    const [starBMovingValue] = useState(new Animated.Value(0.8));
    const [starCMovingValue] = useState(new Animated.Value(0.8));
    const [starDMovingValue] = useState(new Animated.Value(0.8));
    const [starEMovingValue] = useState(new Animated.Value(0.8));
    const [starFMovingValue] = useState(new Animated.Value(0.8));
    const [whiteNoiseWaveMovingValue, setWhiteNoiseWaveMovingValue] = useState(0);
    var waveTime = 0;
    const onPage = true;
    const ProjectsBottomRef = useRef();
    const TextBox1 = useRef();
    const TextBox2 = useRef();
    const TextBox3 = useRef();
    useEffect(() => {
      const interval = setInterval(() => {
        waveTime += 20/1000;
        waveTime %= 1;
        setWhiteNoiseWaveMovingValue(waveTime)
  }, 20);
      const textBox1Observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if(entry.isIntersecting){
            setTextBox1Visible(entry.isIntersecting)
          }
      });
      textBox1Observer.observe(TextBox1.current);
      const textBox2Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if(entry.isIntersecting){
          setTextBox2Visible(entry.isIntersecting)
        }
    });
    textBox2Observer.observe(TextBox2.current);
    const textBox3Observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if(entry.isIntersecting){
        setTextBox3Visible(entry.isIntersecting)
      }
  });
  textBox3Observer.observe(TextBox3.current);
    }, [])
    const [textBox1Visible, setTextBox1Visible] = useState(false);
    const [textBox2Visible, setTextBox2Visible] = useState(false);
    const [textBox3Visible, setTextBox3Visible] = useState(false);
      const pillowHeight = fiveSVMovingalue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -10]
      });
      const pillowOpacity = fiveSVMovingalue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.6, 1]
      });
      const starAOpacity = starAMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.75, 1]
      });
      const starAScale = starAMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.97, 1]
      });
      const starBOpacity = starBMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.75, 1]
      });
      const starBScale = starBMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.97, 1]
      });
      const starCOpacity = starCMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.75, 1]
      });
      const starCScale = starCMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.97, 1]
      });
      const starDOpacity = starDMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.75, 1]
      });
      const starDScale = starDMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.97, 1]
      });
      const starEOpacity = starEMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.75, 1]
      });
      const starEScale = starEMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.97, 1]
      });
      const starFOpacity = starFMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.75, 1]
      });
      const starFScale = starFMovingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.97, 1]
      });
    const pillowVariants = {
        open:{                
            y: 0,
            scale: 1,
            transition:{
                duration: 0.1,
            }
        },
        closed:{
            y: 20,
            scale: 0.8,
            transition:{
                duration: 0.1,
            }
        }
    }
    const textBoxVariants = {
      open:{                
          y: 0,
          opacity: 1,
          scale: 1,
          transition:{
            ease: "easeOut",
              duration: 0.5,
          }
      },
      closed:{
          y: 300,
          opacity: 0,
          scale: 1,
          transition:{
            ease: "easeOut",
              duration: 0.8,
          }
      }
  }
  const swiftLogoVariants = {
    open:{                
        y: 0,
        opacity: 1,
        scale: 1,
        transition:{
          ease: "easeOut",
            duration: 1.2,
        }
    },
    closed:{
        y: 300,
        opacity: 0,
        scale: 1,
        transition:{
          ease: "easeOut",
            duration: 1.2,
        }
    }
}
  const leftStarVariants = {
    closed:{
      y: 30,
      scale: 0.5,
      rotate: 5,
      transition:{
        ease: "linear",
          duration: 0.1,
      }
  },
    open:{                
        y: 0,
        scale: 1,
        rotate: 0,
        transition:{
          ease: "linear",
            duration: 0.1,
        }
    }
  }
    const rightStarVariants = {
      closed:{
        y: 30,
        scale: 0.5,
        rotate: -5,
        transition:{
          ease: "linear",
            duration: 0.1,
        }
    },
      open:{                
          y: 0,
          scale: 1,
          rotate: 0,
          transition:{
            ease: "linear",
              duration: 0.1,
          }
      }
    }
    return (
      <div>
      <Header currentPage={"projects"} classList='darkHeader' scrollButtonCallback={(() => {})} waveTransforms={[[-1000],[-1000],[-1000],[-1000],[-1000],[-1000],[-1000]]} headerHeight={'100px'} topOfPage={0} ulTop={0} terminalTop={-1000000} progresBarWidth={0}/> 
      <div className="sectionContainer" style={{marginTop: '100px'}}>
        <div className="longSection">
        <div className='carouselContainer' style={{zIndex: '10'}}>
          <ProjectName className='' appCount={3} itemChangedCallBack={ () => {} } selectedAppName={"Soft Sleep"} selectedAppIndex={1}/>
        </div>
        <div className="parentDiv softPage" style={{"width" : "100%"}}>
                                {/* bottom */}
                                <WaveHeader className='flip' bottom={'360px'} top={'auto'} color={'rgb(93, 56, 196)'} rotate={0}/>
                                <WaveHeader className='flip' bottom={'300px'} top={'auto'} color={'rgb(104, 68, 203)'} rotate={0}/>
                                <WaveHeader className='flip' bottom={'240px'} top={'auto'} color={'rgb(114, 78, 210)'} rotate={0}/>
                                <WaveHeader className='flip' bottom={'180px'} top={'auto'} color={'rgb(126, 90, 218)'} rotate={0}/>
                                <WaveHeader className='flip' bottom={'120px'} top={'auto'} color={'rgb(138, 102,225)'} rotate={0}/>
                                <WaveHeader className='flip' bottom={'60px'} top={'auto'} color={'rgb(149,113,232)'} rotate={0}/>
                               {/* <div className={`bottomSpacer purpleEnder`}/>     */}
                               <div className={`darkBottomSpacer darkEnder`}/>

                                {/* top */}
                                <WaveHeader className='flip' top={'370px'} bottom={'auto'} color={'rgb(93, 56, 196)'} rotate={180}/>
                                <WaveHeader className='flip' top={'310px'} bottom={'auto'} color={'rgb(104, 68, 203)'} rotate={180}/>
                                <WaveHeader className='flip' top={'250px'} bottom={'auto'} color={'rgb(114, 78, 210)'} rotate={180}/>
                                <WaveHeader className='flip' top={'190px'} bottom={'auto'} color={'rgb(126, 90, 218)'} rotate={180}/>
                                <WaveHeader className='flip' top={'130px'} bottom={'auto'} color={'rgb(138, 102,225)'} rotate={180}/>
                               <WaveHeader className='flip' top={'70px'} bottom={'auto'} color={'rgb(149,113,232)'} rotate={180}/>
                               <WaveHeader className='flip' top={'15px'} bottom={'auto'} color={'rgb(18, 20, 36)'} rotate={180}/>
                               {/* <div className={`purpleTopSoftSleep purpleEnder`}/>
                               <div className={`darkTopSpacer darkEnder`}/> */}
          {/* <div className="projectLinksContainer"> */}
            <div className="appStoreLogo1 appstorelogo">
              <AppleButton onPage={onPage} buttonLink={'https://apps.apple.com/us/app/soft-sleep/id6499560370'}/>
            </div>
          {/* </div> */}
          <div className="purpleBlob1"/>
          {/* <motion.div className="purpleSpacer purpleTop" initial={"closed"} animate={onPage ? "open" : "closed"}
          variants={{open: {y: -100}, closed: {y: -100}}}/> */}


                <motion.div initial={"closed"}
                animate={onPage ? "open" : "closed"} variants={leftStarVariants}
                className="star1" >
                <Animated.View style={{opacity: starAOpacity, transform: [{scale: starAScale}]}}>
                <motion.img src={starShape} alt={"Star-Shape"}/>
                </Animated.View>
                </motion.div>
                <motion.div initial={"closed"}
                animate={onPage ? "open" : "closed"} variants={leftStarVariants}
                className="star2" >
                <Animated.View style={{opacity: starBOpacity, transform: [{scale: starBScale}]}}>
                <motion.img src={starShape} alt={"Star-Shape"}/>
                </Animated.View>
                </motion.div>

                <motion.div initial={"closed"}
                animate={onPage ? "open" : "closed"} variants={leftStarVariants}
                className="star3" >
                <Animated.View style={{opacity: starCOpacity, transform: [{scale: starCScale}]}}>
                <motion.img src={starShape} alt={"Star-Shape"}/>
                </Animated.View>
                </motion.div>

                <motion.div initial={"closed"}
                animate={onPage ? "open" : "closed"} variants={rightStarVariants}
                className="star4" >
                <Animated.View style={{opacity: starDOpacity, transform: [{scale: starDScale}]}}>
                <motion.img src={starShape} alt={"Star-Shape"}/>
                </Animated.View>
                </motion.div>

                <motion.div initial={"closed"}
                animate={onPage ? "open" : "closed"} variants={rightStarVariants}
                className="star5" >
                <Animated.View style={{opacity: starEOpacity, transform: [{scale: starEScale}]}}>
                <motion.img src={starShape} alt={"Star-Shape"}/>
                </Animated.View>
                </motion.div>

                <motion.div initial={"closed"}
                animate={onPage ? "open" : "closed"} variants={leftStarVariants}
                className="star6" >
                <Animated.View style={{opacity: starFOpacity, transform: [{scale: starFScale}]}}>
                <motion.img src={starShape} alt={"Star-Shape"}/>
                </Animated.View>
                </motion.div>

                <Animated.View style={{opacity: 1, transform: [{ translateY: pillowHeight }]}}>
                            <div className="topPillowContainer">
                <motion.img 
                initial={"closed"} 
                animate={onPage ? "open" : "closed"} 
                className="topPillow" src={pillowShape} alt={"Pillow-Shape"} variants={pillowVariants}/>
                                </div>
                        </Animated.View>


                <div className="waveSVG"><WaveSVG onScreen={textBox1Visible}/></div>
                <motion.div className="swiftSVG" animate={textBox2Visible ? "open" : "closed"} variants={swiftLogoVariants} initial={"closed"}
                ><SwiftSVG onScreen={textBox1Visible}/></motion.div>
                <motion.div className="lineWaveSVG" animate={textBox2Visible ? "open" : "closed"} variants={swiftLogoVariants} initial={"closed"}
                ><LineWaveSVG onScreen={textBox1Visible}/></motion.div>
              <motion.div className="textBox textBox1Pos" animate={textBox1Visible ? "open" : "closed"} variants={textBoxVariants} initial={"closed"}>
                <h3 className="poppins-medium textBoxHeader">Sleep Application</h3>
                <hr style={{"width": "90%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "6px"}}/>
                <h3 className="poppins-regular textBoxText">At first I developed Soft Sleep as a simple white noise application to try and help my own sleep.</h3>
                <h3 className="poppins-regular textBoxText"> Once I decided to make it into a full application, I decided to allow users more specific control of the strength of each frequency range as a way to differentiate Soft Sleep from other similar sleep aid applications.</h3>
                <div className="scrollSenseDiv" ref={TextBox1}/>
              </motion.div>
              <motion.div className="textBox textBox2Pos" animate={textBox2Visible ? "open" : "closed"} variants={textBoxVariants} initial={"closed"}>
                <h3 className="poppins-medium textBoxHeader">Swift Charts</h3>
                <hr style={{"width": "90%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "6px"}}/>
                <h3 className="poppins-regular textBoxText">I utilized Swift Charts to display live data about the audio being played. </h3>
                <h3 className="poppins-regular textBoxText"> A line graph at the top of the application displays the current waveform while a bar graph at the bottom displays a low resolution fourier transform of the audio</h3>
                <div className="scrollSenseDiv" ref={TextBox2}/>
              </motion.div>
              <motion.div className="textBox textBox3Pos" animate={textBox3Visible ? "open" : "closed"} variants={textBoxVariants} initial={"closed"}>
                <h3 className="poppins-medium textBoxHeader">Recording Audio</h3>
                <hr style={{"width": "90%", "marginLeft": "auto", "marginRight": "auto", "marginBottom": "6px"}}/>
                <h3 className="poppins-regular textBoxText">Other than the randomly generated white noise, I utilized a field recorder to capture the rest of the audio.</h3>
                <h3 className="poppins-regular textBoxText"> I try to think of cool sounds to add to the application and bring my field recorder along with me when I can</h3>
                <div className="scrollSenseDiv" ref={TextBox3}/>
              </motion.div>
              <motion.div className="mic" animate={textBox3Visible ? "open" : "closed"} variants={swiftLogoVariants} initial={"closed"}/>
        </div>
        </div>
        </div>
        </div>
    );
};

export default SoftSleep;