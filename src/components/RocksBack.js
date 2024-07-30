import React from "react";
import '../styles/sub/RocksBack.css';
const RocksBack = ({fullBodyTop, rockAnimateValue}) => {
    return(
        <div className="moveable" style={{transform: `translate(0, ${fullBodyTop})`, position: 'fixed', width: '100vw', height: 'calc(100vh - 100px)', background: 'transparent'}}>
            <div className="moveable" style={{transform: `translate(0, calc(${100 * (1 - rockAnimateValue)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '100vh', background: 'green', left: 0}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${100 * (1 - rockAnimateValue)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '100vh', background: 'red', right: 0}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${140 * (1 - rockAnimateValue)}vh - calc(70vh + 100px)))`, position: 'absolute', width: '20%', height: '100vh', background: 'orange', left: '20%'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${140 * (1 - rockAnimateValue)}vh - calc(70vh + 100px)))`, position: 'absolute', width: '20%', height: '100vh', background: 'blue', right: '20%'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${160 * (1 - rockAnimateValue)}vh - calc(80vh + 100px)))`, position: 'absolute', width: '20%', height: '100vh', background: 'yellow', right: '40%'}}/>

        </div>
    );
}
export default RocksBack