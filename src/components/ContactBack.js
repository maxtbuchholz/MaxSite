import React from "react";
import '../styles/sub/RocksBack.css';
const ContactBack = ({fullBodyTop}) => {
    return(
        <div className="pageMovable" style={{transform: `translate(0, calc(${fullBodyTop} * 100vh))`, position: 'fixed', width: '100vw', height: '100vh', background: 'transparent'}}>




            {/* <div className="moveable" style={{transform: `translate(0, calc(${-100 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(60vh + 10vw)', background: 'rgb(21,25,45)', left: '10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-90 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(105vh + 10vw)', background: 'rgb(23,31,55)', right: '10%', borderRadius: '10vw'}}/> */}
            {/* midout */}

            {/* <div className="moveable" style={{transform: `translate(0, calc(${-70 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(70vh + 10vw)', background: 'rgb(21,25,45)', right: '30%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-50 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(100vh + 10vw)', background: 'rgb(23,31,55)', left: '30%', borderRadius: '10vw'}}/> */}
            {/* (21,25,45) middle*/ }


            {/* <div className="moveable" style={{transform: `translate(0, calc(${-90 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(75vh + 10vw)', background: 'rgb(28,38,65)', right: '-10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-40 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(100vh + 10vw)', background: 'rgb(23,31,55)', left: '-10%', borderRadius: '10vw'}}/> */}
            {/* outside */}



            {/* <div className="moveable" style={{transform: `translate(0, calc(${-40 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(47vh + 10vw)', background: 'rgb(26,39,70)', left: '20%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-10 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(67vh + 10vw)', background: 'rgb(26,39,70)', right: '20%', borderRadius: '10vw'}}/> */}
            {/* midout */}
{/* 
            <div className="moveable" style={{transform: `translate(0, calc(${-40 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(45vh + 10vw)', background: 'rgb(28,44,79)', right: '40%', borderRadius: '10vw'}}/> */}
            {/* (21,25,45) middle*/ }
            {/* rgb(26,39,70) */}

{/* 
            <div className="moveable" style={{transform: `translate(0, calc(${-80 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(50vh + 10vw)', background: 'rgb(24,34,61)', right: '0%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${-30 * fullBodyTop}vh - 10vw)`, position: 'absolute', width: '20%', height: 'calc(80vh + 10vw)', background: 'rgb(24,34,61)', left: '0', borderRadius: '10vw'}}/> */}
            {/* outside */}







{/* 
            <div className="moveable" style={{transform: `translate(0, calc(${80 * (1 - fullBodyTop)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', left: 0, borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${80 * (1 - fullBodyTop)}vh - calc(50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', right: 0, borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${110 * (1 - fullBodyTop)}vh - calc(60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', left: '20%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${110 * (1 - fullBodyTop)}vh - calc(60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', right: '20%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${150 * (1 - fullBodyTop)}vh - calc(80vh + 100px)))`, position: 'absolute', width: '20%', height: '130vh', background: 'rgb(24,34,61)', right: '40%', borderRadius: '10vw'}}/> */}




            <div className="moveable" style={{transform: `translate(0, calc(${38 * (fullBodyTop)}vh - calc(-49vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(21,25,45)', left: '10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${60 * (fullBodyTop)}vh - calc(-44vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(23,31,55)', right: '10%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${28 * (fullBodyTop)}vh - calc(-47vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(21,25,45)', right: '30%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${50 * (fullBodyTop)}vh - calc(-48vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(23,31,55)', left: '30%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${100 * (fullBodyTop)}vh - calc(-40vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,38,65)', right: '-10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${0 * (fullBodyTop)}vh - calc(-50vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,38,65)', left: '-10%', borderRadius: '10vw'}}/>


            <div className="moveable" style={{transform: `translate(0, calc(${120 * (fullBodyTop)}vh - calc(-53vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(23,31,55)', left: 0, borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${70 * (fullBodyTop)}vh - calc(-62vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(24,34,61)', right: 0, borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${116 * (fullBodyTop)}vh - calc(-56vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(24,34,61)', left: '20%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${102 * (fullBodyTop)}vh - calc(-60vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', right: '20%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${72 * (fullBodyTop)}vh - calc(-58vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', right: '40%', borderRadius: '10vw'}}/>






            <div className="moveable" style={{transform: `translate(0, calc(${74 * (fullBodyTop)}vh - calc(-73vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(23,31,55)', left: '10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${116 * (fullBodyTop)}vh - calc(-59vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(21,25,45)', right: '10%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${74 * (fullBodyTop)}vh - calc(-67vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(23,31,55)', right: '30%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${57 * (fullBodyTop)}vh - calc(-69vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(21,25,45)', left: '30%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${100 * (fullBodyTop)}vh - calc(-52vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,38,65)', right: '-10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${50 * (fullBodyTop)}vh - calc(-74vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,38,65)', left: '-10%', borderRadius: '10vw'}}/>


            <div className="moveable" style={{transform: `translate(0, calc(${100 * (fullBodyTop)}vh - calc(-78vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', left: 0, borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${80 * (fullBodyTop)}vh - calc(-97vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', right: 0, borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${96 * (fullBodyTop)}vh - calc(-84vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', left: '20%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${92 * (fullBodyTop)}vh - calc(-95vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(26,39,70)', right: '20%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${62 * (fullBodyTop)}vh - calc(-90vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(28,44,79)', right: '40%', borderRadius: '10vw'}}/>









            {/* <div className="moveable" style={{transform: `translate(0, calc(${74 * (fullBodyTop)}vh - calc(-73vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(1,20,107)', left: '10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${86 * (fullBodyTop)}vh - calc(-59vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(4,67,156)', right: '10%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${64 * (fullBodyTop)}vh - calc(-67vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(1,20,107)', right: '30%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${57 * (fullBodyTop)}vh - calc(-69vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(4,67,156)', left: '30%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${100 * (fullBodyTop)}vh - calc(-52vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(14,99,188)', right: '-10%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${50 * (fullBodyTop)}vh - calc(-74vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(14,99,188)', left: '-10%', borderRadius: '10vw'}}/>


            <div className="moveable" style={{transform: `translate(0, calc(${100 * (fullBodyTop)}vh - calc(-78vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(7,83,172)', left: 0, borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${60 * (fullBodyTop)}vh - calc(-97vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(7,83,172)', right: 0, borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${96 * (fullBodyTop)}vh - calc(-84vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(2,51,140)', left: '20%', borderRadius: '10vw'}}/>
            <div className="moveable" style={{transform: `translate(0, calc(${92 * (fullBodyTop)}vh - calc(-95vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(2,51,140)', right: '20%', borderRadius: '10vw'}}/>

            <div className="moveable" style={{transform: `translate(0, calc(${72 * (fullBodyTop)}vh - calc(-90vh + 100px)))`, position: 'absolute', width: '20%', height: '120vh', background: 'rgb(2,36,123)', right: '40%', borderRadius: '10vw'}}/> */}

        </div>
    );
}
export default ContactBack