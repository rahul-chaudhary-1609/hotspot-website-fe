import React from "react";
import { Link } from "react-router-dom";
import delivery from "../assets/images/delivery.png";
import PlaceOrder from "../assets/images/Place-order.png";
import location from "../assets/images/location.png";
function HowToWorks() {
  return (
    <section class="how-to-works-wrapper">
      <h2 class="main-head">
        How it <span>works</span>
      </h2>
      <div class="container">
        <div class="work-wrapper">
          <div class="work-property">
            <div className="no-of-point">
              <p className="no">1</p>
            </div>
            <img class="img-fluid" src={delivery} alt="" />
            <h3>Select your delivery</h3>
            <p>Select your delivery time from the delivery calendar schedule</p>
          </div>
          <div class="work-property ">
            <div className="no-of-point">
              <p className="no">2</p>
            </div>
            <img class="img-fluid" src={PlaceOrder} alt="" />
            <h3>Place order</h3>
            <p>Select restaurant and place your order before the cutoff time period</p>
          </div>
          <div class="work-property">
            <div className="no-of-point">
              <p className="no">3</p>
            </div>
            <img class="img-fluid" src={location} alt="" />
            <h3>Pickup at drop off location</h3>
            <p>Your order will have your name on it at your drop off location</p>
          </div>
        </div>
        <div class="learn-more-btn">
          {/* <Link to={"/aboutus"}>
            <button>Learn More</button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
export default HowToWorks;
