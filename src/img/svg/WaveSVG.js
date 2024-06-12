import React, { useState, useEffect, useRef } from "react";
import { motion} from 'framer-motion';
export const WaveSVG = ({onScreen}) => {
      const styles = {
    soundArrayDiv: {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // height: "150px",
        // width: "100px",
        backgroundColor: "red",
        // position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        // top: "700px"
    }
  };
    return (
        // <svg style={styles.soundArrayDiv}>
        // {num.map((value,index) => (
        //     // <h2>hi</h2>
        //   // <circle cx={`${(50 * index) + 50}`} cy="50" r="40" stroke="black" strokeWidth="3" fill="green" />
        //   // <path d={`M ${(20 * index) + 10} 10 V ${(20 * value)}`} fill="transparent" stroke="white" stroke-width="10" stroke-linecap="round"/>
        //   <motion.path 
        //   // d={`M ${(10 * index) + 10} 10 V ${(50 * 1)}`}
        //   animate={{
            
        //   d: [`M ${(10 * index) + 10} 10 V ${(20 * 1)}`, `M ${(10 * index) + 10} 50 V ${(value)}`, `M ${(10 * index) + 10} 10 V ${(20 * 1)}`],
        //   opacity: [0.1, 1, 0.1]
        // }}
        //   transition={{
        //     duration:2,
        //     repeat: Infinity,
        //     type: "keyframes",
        //     ease: "easeInOut",
        //     delay: 0.1 * index,
        //   }}
        //   stroke="white" stroke-width="6" strokeLinecap="round"/>
        // ))} 
        // </svg>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 0 102.94 129.425"
      >
        {/* 389.065 513.574 */}
        <g
          fill="#fff"
          fillOpacity="1"
          fillRule="evenodd"
          strokeOpacity="0.041"
          transform="translate(-69.66 -9.46)"
        >
          <motion.rect
            width="10"
            x="69.661"
            strokeWidth="2.214"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "50", y: 49.172, opacity: "1"}}}
          ></motion.rect>
          <motion.rect
            width="10"
            x="100.641"
            strokeWidth="2.214"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "50", y: 49.172, opacity: "1"}}}
          ></motion.rect>
          <motion.rect
            width="10"
            x="85.151"
            strokeWidth="2.89"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "85.165", y: 31.59, opacity: "1"}}}
          ></motion.rect>
          <motion.rect
            width="10"
            x="131.621"
            strokeWidth="2.214"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "50", y: 49.172, opacity: "1"}}}
          ></motion.rect>
          <motion.rect
            width="10"
            x="162.601"
            strokeWidth="2.214"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "50", y: 49.172, opacity: "1"}}}
          ></motion.rect>
          <motion.rect
            width="10"
            x="147.111"
            strokeWidth="2.89"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "85.165", y: 31.59, opacity: "1"}}}
          ></motion.rect>
          <motion.rect
            width="10"
            x="116.131"
            strokeWidth="3.276"
            ry="5"
            animate={onScreen ? "open" : "closed"}
            initial="closed"
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1
          }}
            variants={{ closed: {height: "18.534", y: 64.905, opacity: "0"}, open: {height: "109.425", y: 19.46, opacity: "1"}}}
          ></motion.rect>
        </g>
      </svg>
    );
};
{/* <button onClick={() => {setOpen(!openIt); console.log(whiteNoiseWaveMovingValue)}}/> */}