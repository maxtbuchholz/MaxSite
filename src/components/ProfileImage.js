import React, { useState, useEffect } from "react";
import { delay, motion } from 'framer-motion';
import '../styles/ProfileImage.css'
import profilePic from '../img/MaxBuchholzProfile.png'
const ProfileImage = ({ onPage, buttonLink }) => {
    return (
        <div style={{ width: '100%', height: '100%', aspectRatio: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <div style={{ width: '83%', height: '83%', aspectRatio: 1, marginLeft: 0, marginRight: 0, margin: 'auto', padding: 0}}>
            <div style={{ width: '100%', height: '100%', backgroundImage: `url(${profilePic})`, borderRadius: '50%', marginRight: 0, marginLeft: 0, margin: 'auto', position: 'relative'}} className="profilePicture">
            <div style={{marginRight: 0, marginLeft: 0, margin: 'auto'}}>
{onPage && <svg width="120%" height="120%" viewBox="0 0 50.68134 50.9343" version="1.1" id="svg1" style={{marginLeft: '-10%', marginTop: '-10%'}}>
  <g 
  id="layer1" 
  transform="translate(0.46714903,0.46748281)">
    <path 
    fill= "none" 
    fill-opacity= "0.1" 
    fill-rule= "evenodd" 
    stroke= "rgb(109, 185, 249)" 
    stroke-width= "0.93" 
    stroke-linecap= "round" 
    stroke-linejoin= "round" 
    stroke-opacity= "1" 
    paint-order= "stroke" 
    id="path1" 
    d="M 27.598288,49.864611 A 25,25 0 0 1 0.16869268,27.899341 25,25 0 0 1 21.800032,0.20564171 25,25 0 0 1 49.75377,21.499874" 
    class="svg-elem-1"></path>
  </g>
</svg>}</div>
            </div>
            {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 50.681 50.934"
    
    >
      <g transform="translate(.467 .467)">
        <path
            // animate={onPage ? "open" : "closed"}
            // initial="closed"
            // variants={{open: {d:"M27.598 49.865A25 25 0 01.168 27.899 25 25 0 0121.8.206 25 25 0 0149.754 21.5", transition: {delay: 1, duration: 1}}, closed: {d:"M 0.06080404,23.257443 A 25,25 0 0 1 21.368907,0.26510224"}}}
            id='leftCirclePath'
            className='leftCirclePath'
          fill="none"
          fillOpacity="0.1"
          fillRule="evenodd"
          stroke="#6db9f9"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="0.93"
          d="M27.598 49.865A25 25 0 01.168 27.899 25 25 0 0121.8.206 25 25 0 0149.754 21.5"
          paintOrder="stroke fill markers"
        ></path>
      </g>
    </svg> */}
            {/* <div style={{background: 'white', width: '500px', height: '500px', borderRadius: '50%'}}> */}
            {/* <img style={{position: 'absolute'}} src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/163375557/original/dca388807379936076de7ab28e1662291b398ca1/create-a-pokemon-trainer-drawing-for-your-kid-or-friend.jpg' alt="Logo"/> */}
            {/* </div> */}
        </div>
        </div>
    );
}
export default ProfileImage