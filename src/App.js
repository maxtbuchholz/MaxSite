import './App.css';
import React, { useState } from 'react';
import Layout from "./components/Layout";
// import { Carousel, Card } from "./components./carousel";
// import softSleepIcon from './img/app-icons/softSleep-icon.png';
// import blunderBoatsIcon from './img/app-icons/blunderBoats-icon.png';
// import tendencyTunerIcon from './img/app-icons/tendencyTuner-icon.png';
// import { TbApiAppOff } from 'react-icons/tb';
import Home from "./pages/Home";
import BlunderBoats from './pages/sub/BlunderBoats';
import SoftSleep from './pages/sub/SoftSleep';
import TendencyTuner from './pages/sub/TendencyTuner';
import About2Page from './pages/About2';
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
      path: "/skills",
      element: <Home page={"skills"}/>,
    },
    {
      path: "/projects",
      element: <Home page={"projects"}/>,
    },
    {
      path: "/projects/soft-sleep",
      element: <SoftSleep />,
      // element: <Home page={"projects"} project={"soft-sleep"}/>,
    },
    {
      path: "/projects/blunder-boats",
      element: <BlunderBoats />,
    },
    {
      path: "/projects/tendency-tuner",
      element: <TendencyTuner />,
    },
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