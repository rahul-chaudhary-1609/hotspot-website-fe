import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Header() {
  const [backgroundColor, setBackgroundColor] = useState(
    "navbar navbar-expand-md navbar-dark fixed-top nab-wrapper"
  );
  const listenScrollEvent = () => {
    if (window.scrollY > 86) {
      setBackgroundColor("navbar navbar-expand-md navbar-dark fixed-top nab-wrapper shrink");
    } else if (window.scrollY == 0) {
      setBackgroundColor("navbar navbar-expand-md navbar-dark fixed-top nab-wrapper");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <section className="header">
      <nav className={backgroundColor} id="banner">
        <div className="container">
          <Link class="navbar-brand" to={"/"}>
            <img src={logo} alt="" />
          </Link>

          {/* <!-- Toggler/collapsibe Button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav nav-link-wrap ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/aboutus"}>
                  About <span>Us</span> <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Becomehotspot"}>
                  Become a <span>Hotspot</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/ContactUs"}>
                  Contact <span>Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Header;
