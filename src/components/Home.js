import React from "react";
import { Link } from "react-router-dom";
import homebg from "../assets/images/home-bg1.png";
import Slider from "./Slider";
import HowToWorks from "./HowToWorks";
import HostInfo from "./HostInfo";

function Home() {
  return (
    <div>
      <Slider />
      <HowToWorks />
      <HostInfo />
    </div>
  );
}
export default Home;
