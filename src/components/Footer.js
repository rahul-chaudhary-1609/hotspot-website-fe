import React from "react";
import { Link } from "react-router-dom";
import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import facebook from "../assets/images/facebook.png";
import twite from "../assets/images/twiter.png";
import linkedin from "../assets/images/linkedin.png";
import googleplush from "../assets/images/googleplush.png";
function Footer() {
  return (
    <section class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4  col-6">
            <div class="Quick-Links">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to={"/aboutus"}>
                    About us <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    Contact Us <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/Privacypolicy"}>
                    Privacy Policy <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/Termofservice"}>
                    Terms of Service <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/DriverGuidelines"}>
                    Driver Guidelines <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/CustomerGuideline"}>
                    Community Guidelines <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/RestrictedProducts"}>
                    Restricted Product List <span className="sr-only">(current)</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-6">
            <div class="App-Download">
              <h3 class="app-head">App Download</h3>
              <div class="download-icon">
                <img class="app img-fluid" src={appstore} alt="" />
                <img class="play img-fluid" src={playstore} alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-12">
            <div class="Social-Media">
              <h3 class="Social-head">Social Media</h3>
              <div class="socil-icons">
                <div class="row facetwiter">
                  <img src={facebook} alt="" />
                  <img src={twite} alt="" />
                </div>
                <div class="row linkedgoogle">
                  <img class="linked" src={linkedin} alt="" />
                  <img src={googleplush} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
