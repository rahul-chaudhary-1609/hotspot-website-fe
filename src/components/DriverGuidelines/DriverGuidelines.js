import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import {apiConstatnts} from "../../constants";

function DriverGuidelines() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios(`${apiConstatnts.BASE_URL}${apiConstatnts.getStaticContent}/11`);
      // console.log(data);
      setdata(data);
      sethtml(data.data.getStaticContentsData.staticContent.page_url);
    };
    getdata();
  }, []);
  console.log(data && data.data.getStaticContentsData.staticContent);
  return (
    <>
      <div class="Driver-Guidelines-bgimg"></div>

      <section class="Privacy-Policy-info">
        <div class="container">
          <h2 class="main-head-tleft">
            Driver<span> Guidelines</span>
          </h2>

          <div className="backend-html">
            <iframe src={html}></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
export default DriverGuidelines;
