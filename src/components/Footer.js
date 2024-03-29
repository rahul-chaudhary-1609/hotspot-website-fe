import React, {useState} from "react";
import { Link } from "react-router-dom";
import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import facebook from "../assets/images/facebook.png";
import twite from "../assets/images/twiter.png";
import linkedin from "../assets/images/linkedin.png";
import googleplush from "../assets/images/googleplush.png";
import { Popover } from 'react-tiny-popover'
function Footer() {
let [isPopoverOpenF,setIsPopoverOpenF]=useState(false);
let [isPopoverOpenT,setIsPopoverOpenT]=useState(false);
let [isPopoverOpenI,setIsPopoverOpenI]=useState(false);
let [isPopoverOpenG,setIsPopoverOpenG]=useState(false);
  return (
    <>
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
                    <Link to={"/ContactUs"}>
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
                    <Link to={"/AccessibilityStatement"}>
                      Accessiblity Statement <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/DriverGuidelines"}>
                      Driver Guidelines <span className="sr-only">(current)</span>
                    </Link>
                  </li> */}
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
                  <a target="blank" href="https://www.apple.com/in/app-store/">
                    <img class="app img-fluid" src={appstore} alt="" />
                  </a>
                  <a target="blank" href="https://play.google.com/store/apps/">
                    <img class="play img-fluid" src={playstore} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-12">
              <div class="Social-Media">
                <h3 class="Social-head">Social Media</h3>
                <div class="socil-icons">
                  <div class="row facetwiter">
                  <Popover
                      isOpen={isPopoverOpenF}
                      positions={['top']} // preferred positions by priority
                      content={
                        <div 
                          style={{backgroundColor:"white", color:"black",fontSize:"1rem", padding:"10px", borderRadius:"10px"}}
                          >coming soon...</div>
                        }
                      padding={10}
                      onClickOutside={() => setIsPopoverOpenF(false)}
                    >
                    <a onMouseOver={()=>setIsPopoverOpenF(true)} onMouseLeave={()=>setIsPopoverOpenF(false)}>
                      {" "}
                      <img src={facebook} alt="" />
                    </a>
                    </Popover>

                    <Popover
                      isOpen={isPopoverOpenT}
                      positions={['top']} // preferred positions by priority
                      content={
                        <div 
                          style={{backgroundColor:"white", color:"black",fontSize:"1rem", padding:"10px", borderRadius:"10px"}}
                          >coming soon...</div>
                        }
                      padding={10}
                      onClickOutside={() => setIsPopoverOpenT(false)}
                    >
                    <a onMouseOver={()=>setIsPopoverOpenT(true)} onMouseLeave={()=>setIsPopoverOpenT(false)}>
                      {" "}
                      <img src={twite} alt="" />
                    </a>
                    </Popover>
                  </div>
                  <div class="row linkedgoogle">
                  <Popover
                      isOpen={isPopoverOpenI}
                      positions={['top']} // preferred positions by priority
                      content={
                        <div 
                          style={{backgroundColor:"white", color:"black",fontSize:"1rem", padding:"10px", borderRadius:"10px"}}
                          >coming soon...</div>
                        }
                      padding={10}
                      onClickOutside={() => setIsPopoverOpenI(false)}
                    >
                    <a onMouseOver={()=>setIsPopoverOpenI(true)} onMouseLeave={()=>setIsPopoverOpenI(false)}>
                      {" "}
                      <img class="linked" src={linkedin} alt="" />
                    </a>
                    </Popover>
                    <Popover
                      isOpen={isPopoverOpenG}
                      positions={['top']} // preferred positions by priority
                      content={
                        <div 
                          style={{backgroundColor:"white", color:"black",fontSize:"1rem", padding:"10px", borderRadius:"10px"}}
                          >coming soon...</div>
                        }
                      padding={10}
                      onClickOutside={() => setIsPopoverOpenG(false)}
                    >
                    <a onMouseOver={()=>setIsPopoverOpenG(true)} onMouseLeave={()=>setIsPopoverOpenG(false)}>
                      {" "}
                      <img src={googleplush} alt="" />
                    </a>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="copy-right-wrap">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-12">
              <div class="copy-right">
                <p>© 2021 Hotspot. All Rights Reserved</p>
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-12">
              <div class="Privacy-Policy">
                <p>
                  <ul>
                    <li>
                      <Link to={"/Privacypolicy"}>
                        Privacy Policy <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
