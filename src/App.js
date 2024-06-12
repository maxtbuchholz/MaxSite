import './App.css';
import React, { useState } from 'react';
import Layout from "./components/Layout";
// import { Carousel, Card } from "./components./carousel";
// import softSleepIcon from './img/app-icons/softSleep-icon.png';
// import blunderBoatsIcon from './img/app-icons/blunderBoats-icon.png';
// import tendencyTunerIcon from './img/app-icons/tendencyTuner-icon.png';
// import { TbApiAppOff } from 'react-icons/tb';
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { 
      path: "/", 
      element: <Home/>,
    },
    {
      path: "/home",
      element: <Home page={"home"}/>,
    },
    {
      path: "/about",
      element: <Home page={"about"}/>,
    },
    {
      path: "/projects",
      element: <Home page={"projects"}/>,
    },
    // {
    //   path: "/projects/soft-sleep",
    //   element: <Home page={"projects"} project={"soft-sleep"}/>,
    // },
    // {
    //   path: "/projects/blunder-boats",
    //   element: <Home page={"projects"} project={"blunder-boats"}/>,
    // },
    // {
    //   path: "/projects/tendency-tuner",
    //   element: <Home page={"projects"} project={"tendency-tuner"}/>,
    // },
    {
      path: "/contact",
      element: <Home page={"contact"}/>,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      {/* <Layout> */}
      <App />
      {/* </Layout> */}
    </Router>
  );
};

export default AppWrapper;