import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import Commanheadbg from "../Commanheadbg";
import {apiConstatnts} from "../../constants";

export default function ContactUs() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios(`${apiConstatnts.BASE_URL}${apiConstatnts.getStaticContent}/12`);
      // console.log(data);
      setdata(data);
      sethtml(data.data.getStaticContentsData.staticContent.page_url);
    };
    getdata();
  }, []);
  console.log(data && data.data.getStaticContentsData.staticContent);

  return (
    <>
      <Commanheadbg />
      <section class="Privacy-Policy-info">
        <div class="container">
          <h2 class="main-head-tleft" style={{marginBottom:"0px"}}>
            Contact <span>Us </span>
          </h2>
          <div className="backend-html contact-us">
            <iframe src={html}></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
