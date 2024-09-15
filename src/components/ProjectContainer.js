import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import '../styles/ProjectsPage.css';
const ProjectContainer = ({title, poster, video, maxWidth, link}) => {
    const backColor = '#121424';
    const ref = useRef(null)
    const video_ref = useRef(null)
    //const [img_dim, setImg_dim] = useState([1.1,1.1]);
    var img_dim = [1,1];
    const[img_style, setImg_style] = useState(['100%', 'auto']);
    const[img_offset_w, setImg_offset_w] = useState(0);
    const[img_offset_h, setImg_offset_h] = useState(0);
    useEffect(() => {
        const img = new Image();
        img.src = poster;
        img.onload = () => {
            //setImg_dim([img.width, img.height])
            img_dim = [img.width, img.height]
            handleResize(img.width, img.height);
          };
        const handleResize = (img_w, img_h) => {
            if(!img_w || !img_h){
                img_w = img_dim[0];
                img_h = img_dim[1];
            }
            let div_rat = ref.current.clientHeight / ref.current.clientWidth;
            let img_rat = img_h / img_w;
            //console.log(`${img_h} / ${img_w}`)
            // console.log(`${img_rat} : ${div_rat}`)
            if(div_rat >= img_rat){
                setImg_style(['100%', 'auto']);
            }else{
                setImg_style(['auto', '100%']);
            }
            if(video_ref.current.clientHeight >ref.current.clientHeight){
                // setImg_offset_h(-(video_ref.current.clientHeight  - ref.current.clientHeight) / 4)
                setImg_offset_h(0)
            }else{setImg_offset_h(0)}
            if(video_ref.current.clientWidth >ref.current.clientWidth){
                setImg_offset_w(-(video_ref.current.clientWidth  - ref.current.clientWidth) / 2)
                // console.log(`set w at ${-(video_ref.current.clientWidth  - ref.current.clientWidth) / 2)}`)
            }else{setImg_offset_w(0)}
        };
        //handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        // <div style={{backgroundImage: `url(${poster})`, width:"100%", height:"100%", backgroundSize: 'cover', borderRadius: '30px', border: '1px solid white'}}/>
        <motion.div onClick={(() => {window.history.replaceState(null, '/', "/projects"); window.open(link,"_self");})} whileHover={{ scale: 1.01 }} transition={{ duration: '0.4' }} style={{background: '', width: '100%', height: '100%', position: 'relative'}}>
            <div style={{background: '', width: '100%', height: '100%', borderRadius: '20px', border: '1px solid white', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div ref={ref} style={{height: 'calc(100% - 20px)', width: 'calc(100% - 20px)', background: '', overflow: 'hidden', borderRadius: '10px'}}>
                    <video
                    className="projectVideo"
                    ref={video_ref}
                    style={{width: `${img_style[1]}`, height: `${img_style[0]}`, position: 'relative', marginTop: `${img_offset_h}px`, marginLeft: `${img_offset_w}px`}}
                    poster={poster}
                    preload="true"
                    playsInline
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}
                    src={video}
                    muted={true}
                    loop>
                    </video>
                </div>
            </div>
            <h3 style={{display: 'flex', justifyContent: 'center'}} className='about1boxtextmargin'><span style={{color: 'white', background: backColor, textAlign: 'center', padding: '2px', fontSize: '11px', lineHeight: '11px', fontWeight: 300, bottom: '-8px', position: 'absolute'}} className='poppins-medium'>{title}</span></h3>
        </motion.div>
    );
}
export default ProjectContainer