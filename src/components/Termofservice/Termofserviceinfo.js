import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import {apiConstatnts} from "../../constants";

function Termofserviceinfo() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios(`${apiConstatnts.BASE_URL}${apiConstatnts.getStaticContent}/1`);
      // console.log(data);
      setdata(data);
      console.log(data.data.getStaticContentsData.staticContent.page_url)
      sethtml(data.data.getStaticContentsData.staticContent.page_url);
    };
    getdata();
  }, []);
  console.log(data && data.data.getStaticContentsData.staticContent);

  return (
    <section class="term-sercive-info">
      <div class="container">
        <h2 class="main-head-tleft">
          Terms of <span>Service </span>
        </h2>
        <div className="backend-html termofservice">
          <iframe src={html}></iframe>
        </div>
      </div>
    </section>
  );
}

export default Termofserviceinfo;
