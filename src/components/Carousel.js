import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import '../styles/Carousel.css'

// const CARDS = 10;
const MAX_VISIBILITY = 2;

const Card = ({title, content}) => (
  <div className='card'>
    {/* <h2>{title}</h2> */}
    <img src={content} alt={title + " Icon"} className='applicationImage'/>
    {/* <p>{content}</p> */}
  </div>
);

const Carousel = ({children, itemChangedCallBack, selectedAppName}) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  
  return (
    <div className='carouselParent'>
    <div className='carousel'>
      {active > 0 && <button className='nav left carouselButton' onClick={() => {itemChangedCallBack(active - 1); setActive(i => i - 1)}}>u</button>}
      {/* <HiChevronRight/> */}
      {React.Children.map(children, (child, i) => (
        <div className='card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < (count - 1) && <button className='nav right carouselButton' onClick={() => {itemChangedCallBack(active + 1); setActive(i => i + 1)}}>u</button>}
      {/* <HiChevronRight/> */}
    </div>
    <h1 className='appTitle poppins-bold'>{selectedAppName}</h1>
    {/* <h1 className='appTitle'>{apps[selectedApIndex].title}</h1> */}
    </div>
  );
};
export { Carousel, Card }