import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import { apiConstatnts } from "../../constants";
import { Frame } from "../../utils/Frame";
function renderhtml(page_url) {
  let url = `${apiConstatnts.BASE_URL}${apiConstatnts.htmlFileUrlToTextConvert}?file_url=${page_url}`;
  //return <object type="text/html" data={url} ></object>;
  return <iframe width="100%" height="100%" src={page_url} style={{width:"100%", height:"100%"}}></iframe>
}
function Termofserviceinfo() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);



  useEffect(() => {
    const getdata = async () => {
      const data = await axios(`${apiConstatnts.BASE_URL}${apiConstatnts.getStaticContent}/1`);
      // console.log(data);
      setdata(data);
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
        <div className="backend-html">
          <Frame url={html}/>
        </div>
      </div>
    </section>
  );
}

export default Termofserviceinfo;
