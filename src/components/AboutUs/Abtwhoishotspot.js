import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Parser from "html-react-parser";
import Abtimage from "../../assets/images/abt-img.png";
import Header from "./Header";
import {apiConstatnts} from "../../constants";

function Abtwhoishotspot() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios(`${apiConstatnts.BASE_URL}${apiConstatnts.getStaticContent}/5`);
      // console.log(data);
      setdata(data);
      sethtml(data.data.getStaticContentsData.staticContent.page_url);
    };
    getdata();
  }, []);
  console.log(data && data.data.getStaticContentsData.staticContent);
  return (
    <section class="abt-wrapper">
      <div class="container">
        <h2 class="main-head-tleft">
          About <span>Us</span>
        </h2>
        {/* <p class="abt-text">
          Hotspot is a technology company that helps local restaurants expand into new markets while
          giving people the opportunity to earn more for doing less
        </p> */}
        <Header/> 
        <div className="backend-html about">
          <iframe src={html}></iframe>
        </div>
      </div>
    </section>
  );
}
export default Abtwhoishotspot;
