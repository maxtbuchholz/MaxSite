import Header from './Header';
import React, { useState, useEffect, useRef } from "react";
import { color, delay, motion } from 'framer-motion';
import '../globals.css'
const BlueContainer =({title, children, oneChild, boxWidth, boxHeight}) =>{
    const edgeColor = '#6db9f9';
    const hoverEdgeColor = '#7dc9ff';
    const backColor = '#101225';
    const borderWidth = '2px'
    const borderRadius = '8px';
    const [hovering, setHovering] = useState(false);
    // height: (oneChild ? boxWidth : boxHeight)
    return(
        <motion.div whileHover={{ scale: 1.01 }} onMouseEnter={() => {setHovering(true)}} onMouseLeave={() => {setHovering(false)}} style={{width: boxWidth, height: (oneChild ? boxWidth : boxHeight), minWidth: '10px', minHeight: '10px', paddingTop: '0px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}} transition={{ duration: '0.4' }}>
            <h3 style={{display: 'flex', justifyContent: 'center'}} className='about1boxtextmargin'><span style={{color: hovering ? hoverEdgeColor : edgeColor, background: backColor, textAlign: 'center', marginTop: '-16px', paddingLeft: '2px', paddingRight: '2px', fontSize: '11px', lineHeight: '11px', fontWeight: 300}} className='poppins-medium'>{title}</span></h3>
        <div style={{width: '100%', height: 'calc(100% - 2px)'}}>
            <div style={{width: '100%', height: '100%', background: hovering ? hoverEdgeColor : edgeColor, borderRadius: borderRadius, padding: `calc(${borderWidth} / 2)`}}>
                <div style={{width: `calc(100% - ${borderWidth})`, height: `calc(100% - ${borderWidth})`, background: backColor,  margin: `calc(${borderWidth} / 2)`, borderRadius: `calc(${borderRadius} - calc(${borderWidth} / 2))`}}>
                {oneChild && <motion.div style={{marginRight: 0, marginLeft: 0, margin: 'auto', width: '100%', height: '100%', color: hovering ? hoverEdgeColor : edgeColor}} transition={{ duration: '3.3' }} className='oneChildContainer'>{children}</motion.div>}
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default BlueContainer;