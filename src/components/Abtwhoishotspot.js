import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Parser from "html-react-parser";
import Abtimage from "../assets/images/abt-img.png";
function renderhtml(page_url) {
  let url = `http://3.228.159.69/website/htmlFileUrlToTextConvert?file_url=${page_url}`;
  return <object type="text/html" data={url}></object>;
}
function Abtwhoishotspot() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios("http://3.228.159.69/website/getStaticContent/5");
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
        <h2 class="main-head">
          Who is <span>Hotspot</span>
        </h2>
        <p class="abt-text">
          Hotspot is a technology company that helps local restaurants expand into new markets while
          giving people the opportunity to earn more for doing less
        </p>
        <div className="backend-html about">{renderhtml(html)}</div>

        {/* <div class="abt-select-wrapper">.
          <div class="abt-select">
            <Form>
              <div class="form-group">
                <select name="" id="">
                  <option value="">What is a Hotspot</option>
                  <option value="">Saab</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">
                    How can I have my work place or living area become a Hotspot
                  </option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">How does Hotspot work?</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">What is the delivery calendar schedule?</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">What is the cut of time period?</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">Are there max orders per delivery time?</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">Will the driver deliver my order directly to me?</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">How will I know which order is mine?</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">
                    What if I’m missing or if there is a problem with my order?
                  </option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">Can I place a future order </option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">Can I check the status of my order</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">What fees do I pay</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">Can I cancel my order</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
              <div class="form-group">
                <select name="" id="">
                  <option value="">What do I do if I need to contact the driver</option>
                  <option value="">Mercedes</option>
                  <option value="">Audi</option>
                </select>
              </div>
            </Form>
          </div>
          <div class="about-img">
            <img class="img-fluid" src={Abtimage} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default Abtwhoishotspot;
