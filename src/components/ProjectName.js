import React from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import '../styles/Carousel.css'
import '../styles/ProjectName.css'
import { color } from 'framer-motion';
const projectLinks = ["blunder-boats", "soft-sleep", "tendency-tuner"];
const ProjectName = ({appCount, selectedAppName, itemChangedCallBack, selectedAppIndex}) => {
    if(selectedAppName === "Blunder Boats"){
        return (
            <div className="blunderBoatsTextBox projectNameBox bbProjNameBox" style={{padding: 0, marginRight: 0, marginLeft: 0, margin: 'auto', left: 0, right: 0, minHeight: 0}}>
                <div className="bbTextBoxSideBar leftBar" style={{height: '60px', background: 'white'}}/>
                <div className="bbTextBoxTopBar leftBar" style={{width: '60px', background: 'white'}}/>
                <div className="bblrTextBoxSideBar rightBar" style={{height: '60px', background: 'white'}}/>
                <div className="bblrTextBoxBottomBar rightBar" style={{width: '60px', background: 'white'}}/>
                <div style={{height: '100%', alignContent: 'center'}}><ProjectInnerName appCount={appCount} selectedAppName={selectedAppName} itemChangedCallBack={itemChangedCallBack} textColor={'white'} selectedAppIndex={selectedAppIndex}/></div>
            </div>
        );
    } else if(selectedAppName === "Soft Sleep"){
        return (
            <div className="projectNameBox" style={{backgroundColor: '#FFFFFF44', borderRadius: '20px', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px',paddingLeft: '20px'}}>
                <ProjectInnerName appCount={appCount} selectedAppName={selectedAppName} itemChangedCallBack={itemChangedCallBack} selectedAppIndex={selectedAppIndex}/>
            </div>
        );
    } else if(selectedAppName === "Tendency Tuner"){
        return (
            <div className="projectNameBox" style={{backgroundColor: '#12142400', alignContent: 'center', margin: '10px'}}>
                <div className='tenTunTextBackSide'>
                    <div style={{backgroundColor: '#121424', width: 'calc(100%)', height: '100%', position: 'absolute', left: 0, right: 0, margin: 'auto', alignContent: 'center'}}/>
                        <div className='tenTunTextBackSideOp' style={{alignContent: 'center'}}>
                            <ProjectInnerName appCount={appCount} selectedAppName={selectedAppName} itemChangedCallBack={itemChangedCallBack} selectedAppIndex={selectedAppIndex}/>
                    </div>
                </div>
            </div>
        );
    }
};
const ProjectInnerName = ({appCount, selectedAppName, itemChangedCallBack, textColor, selectedAppIndex}) => {
    // const [active, setActive] = useState(0);
    return (
    <div className='projectNameInnerText' style={{maxWidth: '90%', display: 'flex', flexDirection: 'row', alignContent: 'center', marginRight: 0, marginLeft: 0, margin: 'auto'}}>
      <button className='nav carouselButton' style={{position: 'relative'}} 
      onClick={() => { if(selectedAppIndex > 0){navToProject(selectedAppIndex - 1);} else{navToProject(appCount - 1);} }}>
        <HiChevronLeft color={textColor}/></button>
      <h1 className='appTitle poppins-bold' style={{letterSpacing: '-1px', alignContent: 'center', marginTop: '-2px', color: textColor}}>{selectedAppName}</h1>
       <button className='nav carouselButton' style={{position: 'relative'}} 
       onClick={() => { if(selectedAppIndex < appCount - 1) {navToProject(selectedAppIndex + 1);} else{navToProject(0);} }}>
        <HiChevronRight color={textColor}/></button>
    </div>
    );
};
function navToProject(index){
    if(index < projectLinks.length){
        window.open(`/projects/${projectLinks[index]}`,"_self");
    }
}
export default ProjectName;