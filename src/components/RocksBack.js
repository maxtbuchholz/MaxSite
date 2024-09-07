import React from "react";
import '../styles/sub/RocksBack.css';
const RocksBack = ({fullBodyTop, rockAnimateValue, ease}) => {
    return(
        <div className={`${ease ? 'pageMovable' : ''}`} style={{transform: `translate(0, ${fullBodyTop})`, position: 'fixed', width: '100vw', height: 'calc(100vh - 100px)', background: 'transparent'}}>

            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(10vh + 100px)))`, position: 'absolute', width: '20%', height: '72vh', background: 'rgb(23,31,55)', left: '10%', borderRadius: '10vw'}}/>
            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(10vh + 100px)))`, position: 'absolute', width: '20%', height: '72vh', background: 'rgb(23,31,55)', right: '10%', borderRadius: '10vw'}}/>

            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(5vh + 100px)))`, position: 'absolute', width: '20%', height: '68vh', background: 'rgb(21,25,45)', right: '30%', borderRadius: '10vw'}}/>
            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(5vh + 100px)))`, position: 'absolute', width: '20%', height: '68vh', background: 'rgb(21,25,45)', left: '30%', borderRadius: '10vw'}}/>

            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(14vh + 100px)))`, position: 'absolute', width: '20%', height: '54vh', background: 'rgb(28,38,65)', right: '-10%', borderRadius: '10vw'}}/>
            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(14vh + 100px)))`, position: 'absolute', width: '20%', height: '54vh', background: 'rgb(28,38,65)', left: '-10%', borderRadius: '10vw'}}/>


            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${80 * (1 - rockAnimateValue)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', left: 0, borderRadius: '10vw'}}/>
            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${80 * (1 - rockAnimateValue)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', right: 0, borderRadius: '10vw'}}/>

            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${110 * (1 - rockAnimateValue)}vh - calc(60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', left: '20%', borderRadius: '10vw'}}/>
            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${110 * (1 - rockAnimateValue)}vh - calc(60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', right: '20%', borderRadius: '10vw'}}/>

            <div className={`${ease ? 'moveable' : ''}`} style={{transform: `translate(0, calc(${150 * (1 - rockAnimateValue)}vh - calc(80vh + 100px)))`, position: 'absolute', width: '20%', height: '130vh', background: 'rgb(24,34,61)', right: '40%', borderRadius: '10vw'}}/>






            {/* <div className="moveable" style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(10vh + 100px)))`, position: 'absolute', width: '20%', height: '72vh', background: 'rgb(4,67,156)', left: '10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(10vh + 100px)))`, position: 'absolute', width: '20%', height: '72vh', background: 'rgb(4,67,156)', right: '10%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(5vh + 100px)))`, position: 'absolute', width: '20%', height: '68vh', background: 'rgb(1,20,107)', right: '30%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(5vh + 100px)))`, position: 'absolute', width: '20%', height: '68vh', background: 'rgb(1,20,107)', left: '30%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(14vh + 100px)))`, position: 'absolute', width: '20%', height: '54vh', background: 'rgb(14,99,188)', right: '-10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-10 * (1 - 0)}vh + calc(14vh + 100px)))`, position: 'absolute', width: '20%', height: '54vh', background: 'rgb(14,99,188)', left: '-10%', borderRadius: '10vw'}}/>


            <div className="moveable" style={{transform: `translate(0, calc(${80 * (1 - rockAnimateValue)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(7,83,172)', left: 0, borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${80 * (1 - rockAnimateValue)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(7,83,172)', right: 0, borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${110 * (1 - rockAnimateValue)}vh - calc(60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(2,51,140)', left: '20%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${110 * (1 - rockAnimateValue)}vh - calc(60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(2,51,140)', right: '20%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${150 * (1 - rockAnimateValue)}vh - calc(80vh + 100px)))`, position: 'absolute', width: '20%', height: '130vh', background: 'rgb(2,36,123)', right: '40%', borderRadius: '10vw'}}/> */}

        </div>
    );
}
export default RocksBack