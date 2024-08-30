import React from "react";

function TenTunChev({color, rotate}) {
  return (
    <div style={{ transform: rotate ? 'rotate(180deg)' : 'rotate(0deg)' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 200 10"
    >
      <g>
        <path
          fill={color}
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.536"
          d="M5 0h195l-5 5 5 5H5L0 5z"
          paintOrder="markers stroke fill"
        ></path>
      </g>
    </svg>
    </div>
  );
}

export default TenTunChev;