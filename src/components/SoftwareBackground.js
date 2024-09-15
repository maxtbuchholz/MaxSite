import React from "react";
import '../globals.css'
import '../styles/SoftwareBackground.css';
import VSCode_image from '../img/software-screenshots/VSCode.png';
import VisStu_image from '../img/software-screenshots/VisStudio.png';
import MongDB_image from '../img/software-screenshots/MongoDBCompas.png';
import MySQLW_image from '../img/software-screenshots/MySQLWork.png';
import XCodex_image from '../img/software-screenshots/Xcode.png';
import Postman_image from '../img/software-screenshots/Postman.png';
import GitDesk_image from '../img/software-screenshots/GitDesk.png';
const SoftwareBackground =({title, image, link}) =>{

    return(
        <div style={{position: 'absolute', width: '100%', height: '100%', background: '', zIndex: '-1', opacity: '0.8'}}>
            <div className="softwareSet1" style={{position: 'absolute', overflow: 'visible'}}>
                <div className="softwareBackground" style={{top: 0, left: 0, backgroundImage: `url(${MySQLW_image})`}}/>
                <div className="softwareBackground" style={{top: '20px', left: '20px', backgroundImage: `url(${VSCode_image})`}}/>
                <div className="softwareBackground" style={{top: '40px', left: '40px', backgroundImage: `url(${XCodex_image})`}}/>
            </div> 
            <div className="softwareSet2" style={{position: 'absolute', overflow: 'visible'}}>
                <div className="softwareBackground" style={{top: 0, right: 0, backgroundImage: `url(${Postman_image})`}}/>
                <div className="softwareBackground" style={{top: '20px', right: '20px', backgroundImage: `url(${MongDB_image})`}}/>
                <div className="softwareBackground" style={{top: '40px', right: '40px', backgroundImage: `url(${VisStu_image})`}}/>
            </div> 
            <div className="softwareSet3" style={{position: 'absolute', overflow: 'visible'}}>
                <div className="softwareBackground smallSoftware" style={{top: 0, right: 0, backgroundImage: `url(${GitDesk_image})`}}/>
            </div> 
        </div>
    )
}

export default SoftwareBackground;