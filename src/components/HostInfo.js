import React from "react";
import whoIsHotspot from "../assets/images/Who-is-Hotspot.png";
import becomehotspot from "../assets/images/Become-a-Hotspot.png";
import getApp from "../assets/images/Get-app.png";
function HostInfo() {
  return (
    <section class="Who-is-Hotspot-wrapper">
      <div class="container">
        <div class="Who-is-Hotspot-info">
          <div class="Hotspot-details">
            <img class="img-fluid" src={whoIsHotspot} alt="" />
            <h3>Who is Hotspot</h3>
            <button>Start earning</button>
          </div>
          <div class="Hotspot-details">
            <img class="img-fluid" src={becomehotspot} alt="" />
            <h3 class="mt-5">Become a Hotspot</h3>
            <button>Sign up your store</button>
          </div>
          <div class="Hotspot-details">
            <img class="img-fluid" src={getApp} alt="" />
            <h3>Get the app</h3>
            <button>Get the app</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HostInfo;
