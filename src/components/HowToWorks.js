import React from "react";
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
            <img class="img-fluid" src={delivery} alt="" />
            <h3>Select delivery time</h3>
            <p>Select your delivery time from the calender</p>
          </div>
          <div class="work-property active">
            <img class="img-fluid" src={PlaceOrder} alt="" />
            <h3>Place order</h3>
            <p>Select restaurant and place your order before the cutoff time period</p>
          </div>
          <div class="work-property">
            <img class="img-fluid" src={location} alt="" />
            <h3>Pickup at drop off location</h3>
            <p>Your order will have your name on it at your drop off location</p>
          </div>
        </div>
        <div class="learn-more-btn">
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}
export default HowToWorks;
