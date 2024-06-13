import React, { useState, useEffect, useRef } from "react";
import { motion} from 'framer-motion';
export const LineWaveSVG = ({onScreen}) => {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      version="1.1"
      viewBox="0 0 66.589 37.722"
    >
      <g
        fillOpacity="1"
        fillRule="evenodd"
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeOpacity="1"
        transform="translate(-82.707 -144.15)"
      >
        <path
          fill="#fff"
          stroke="none"
          strokeWidth="0.883"
          d="M147.908 150.02a1.15 1.15 0 01-1.141 1.15 1.15 1.15 0 01-1.16-1.13 1.15 1.15 0 011.123-1.17 1.15 1.15 0 011.177 1.113"
        ></path>
        <path
          fill="#fff"
          stroke="none"
          strokeWidth="0.768"
          d="M87.843 172.75a1 1 0 01-.992 1 1 1 0 01-1.008-.984 1 1 0 01.975-1.016 1 1 0 011.024.968"
        ></path>
        <path
          fill="#fff"
          stroke="none"
          strokeWidth="0.614"
          d="M84.307 171.866a.8.8 0 01-.794.8.8.8 0 01-.806-.787.8.8 0 01.78-.813.8.8 0 01.82.774"
        ></path>
        <path
          fill="#fff"
          stroke="none"
          strokeWidth="0.768"
          d="M148.996 153.441a1 1 0 01-.992 1 1 1 0 01-1.007-.984 1 1 0 01.975-1.016 1 1 0 011.024.968"
        ></path>
        <path
          fill="#fff"
          stroke="none"
          strokeWidth="0.576"
          d="M149.295 156.822a.75.75 0 01-.744.75.75.75 0 01-.756-.738.75.75 0 01.732-.762.75.75 0 01.768.725"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="2.171"
          d="M90.15 172.359a7.013 7.013 0 00.555-.151 7.53 7.53 0 00.555-.206 7.154 7.154 0 00.832-.408 9.955 9.955 0 001.11-.725 17.046 17.046 0 00.554-.436 19.802 19.802 0 00.554-.481 21.655 21.655 0 001.11-1.084 39.68 39.68 0 00.554-.595l.278-.308a44.662 44.662 0 00.831-.963l.278-.331.277-.335.277-.338.278-.34.277-.342.277-.342.278-.342.277-.342.277-.34.278-.337.277-.334.277-.329c.093-.109.185-.218.278-.325a28.672 28.672 0 01.554-.63 27.94 27.94 0 011.109-1.163 16.983 16.983 0 01.832-.76 13.932 13.932 0 01.555-.442 9.55 9.55 0 01.555-.383 7.558 7.558 0 01.554-.319 6.015 6.015 0 01.555-.25 5.071 5.071 0 01.555-.176c.092-.023.184-.043.277-.06a4.391 4.391 0 01.554-.059 3.682 3.682 0 01.832.065 3.978 3.978 0 01.832.255 4.911 4.911 0 01.832.449c.093.06.185.124.278.192a8.24 8.24 0 01.832.703 11.912 11.912 0 01.831.886 16.399 16.399 0 01.832 1.058 21.731 21.731 0 01.555.793 30.803 30.803 0 01.555.857 44.389 44.389 0 011.109 1.879c.092.165.185.331.277.499l.278.508.277.517.277.524.278.531.277.535.277.54.277.542.278.543.277.543.277.543.278.539.277.536.277.53c.093.176.185.351.278.524a80.573 80.573 0 00.832 1.519 36.312 36.312 0 00.554.955c.093.154.185.307.278.456a22.387 22.387 0 00.554.864 21.4 21.4 0 00.832 1.154 11.355 11.355 0 00.832.956 7.697 7.697 0 00.555.512 5.216 5.216 0 00.554.404 3.921 3.921 0 00.555.287 2.777 2.777 0 00.832.2 2.345 2.345 0 00.832-.09 3.044 3.044 0 00.832-.393 4.341 4.341 0 00.554-.432c.093-.083.185-.172.278-.267a7.488 7.488 0 00.554-.635 10.692 10.692 0 00.555-.769 19.065 19.065 0 00.832-1.394 25.393 25.393 0 00.554-1.083 32.577 32.577 0 00.555-1.198 56.12 56.12 0 001.109-2.705 82.82 82.82 0 00.832-2.26c.093-.26.185-.524.278-.789l.277-.805.277-.819.278-.83.277-.841.277-.849.277-.855.278-.859.277-.862.277-.862.278-.861.277-.857.277-.851.278-.842c.092-.28.185-.557.277-.833.092-.276.185-.549.277-.82.093-.271.185-.54.278-.806a89.915 89.915 0 011.386-3.739 46.339 46.339 0 01.832-1.936 23.08 23.08 0 01.832-1.64c.093-.164.185-.321.277-.472a11.667 11.667 0 01.555-.824 5.955 5.955 0 01.555-.651c.092-.093.185-.179.277-.257a3.16 3.16 0 01.277-.21c.093-.062.185-.116.278-.162.092-.046.184-.083.277-.113a1.618 1.618 0 01.555-.072 1.57 1.57 0 01.554.135c.093.041.185.09.277.148.093.058.185.125.278.201.092.076.185.161.277.255.093.094.185.197.277.309.093.112.185.233.278.363.092.13.185.269.277.417"
        ></path>
      </g>
    </svg>
    );
};