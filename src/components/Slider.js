import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import homebg from "../assets/images/home-bg1.png";
function Slider() {
  return (
    <section id="slider">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={homebg} alt="First slide" />
          <Carousel.Caption>
            <h1 className="pl-5">Be Fee-Less</h1>
            <p className="pl-5" style={{fontSize:"1.5rem",marginTop:"2%"}}>Delivery with no fees!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Slider;
