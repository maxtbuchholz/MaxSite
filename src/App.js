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
    { path: "/", element: <Home /> }
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