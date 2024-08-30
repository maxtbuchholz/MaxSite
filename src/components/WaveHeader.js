const WaveHeader = ({top, bottom, color, rotate}) => {
    return(
        <div style={{top: top , bottom: bottom, position: 'absolute', height: '350px', maxHeight: '50vw', width: '200px', minWidth: '100%',   
          width: 'max(600px, 100%)',
          height: 'min(200px, 30vw)',
          // aspectRatio: '1800/600',
          transform: `rotate(${rotate}deg)`
        }}>
<div style={{position: 'absolute', width: '100%', height: '1000px', background: `${color}`, top: 'min(200px, 30vw)'}}/>
<svg
style={{position: 'absolute'}}
    width="100%"
    height="100%"
    preserveAspectRatio="none"
    viewBox="0 0 1800 600"
    id="svg1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs id="defs1" />
    <g id="layer1">
      <path
        id="rect3"
        style={{
          fill: `${color}`,
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeWidth: 0.751717,
          strokeLinejoin: "round",
          paintOrder: "stroke fill markers",
        }}
            d="M0 9L75 54.8C150 100.7 300 192.3 450 274.8C600 357.3 750 430.7 900 474.2C1050 517.7 1200 531.3 1350 507.2C1500 483 1650 421 1725 390L1800 359L1800 601L1725 601C1650 601 1500 601 1350 601C1200 601 1050 601 900 601C750 601 600 601 450 601C300 601 150 601 75 601L0 601Z"
      />
    </g>
  </svg>

        </div>
    );
}
export default WaveHeader