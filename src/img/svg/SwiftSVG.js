import React, { useState, useEffect, useRef } from "react";
import { motion} from 'framer-motion';
export const SwiftSVG = ({onScreen}) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="url(#paint0_linear_87_8231)"
          d="M22.136 25.271c-3.301 1.899-7.84 2.094-12.405.146C6.034 23.85 2.966 21.109 1 17.977c.944.783 2.045 1.41 3.225 1.957 4.715 2.201 9.43 2.05 12.747.006-4.72-3.603-8.736-8.307-11.725-12.145-.629-.626-1.101-1.41-1.573-2.114 3.618 3.29 9.36 7.44 11.405 8.615-4.325-4.543-8.18-10.181-8.023-10.025 6.843 6.892 13.215 10.808 13.215 10.808a7.4 7.4 0 01.504.305c.138-.35.259-.712.36-1.088 1.102-3.994-.156-8.537-2.91-12.296 6.371 3.838 10.147 11.043 8.573 17.073-.04.163-.085.323-.133.481 3.146 3.916 2.336 8.134 1.943 7.351-1.707-3.325-4.866-2.308-6.472-1.634z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_87_8231"
            x1="15.01"
            x2="15.01"
            y1="2"
            y2="27.001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F88A36"></stop>
            <stop offset="1" stopColor="#FD2020"></stop>
          </linearGradient>
        </defs>
      </svg>
    );
};