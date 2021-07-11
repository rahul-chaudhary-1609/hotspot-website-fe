import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
function renderhtml(page_url) {
  let url = `http://3.228.159.69/website/htmlFileUrlToTextConvert?file_url=${page_url}`;
  return <object type="text/html" data={url}></object>;
}
export default function CustomerGuideline() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios("http://3.228.159.69/website/getStaticContent/9");
      // console.log(data);
      setdata(data);
      sethtml(data.data.getStaticContentsData.staticContent.page_url);
    };
    getdata();
  }, []);
  console.log(data && data.data.getStaticContentsData.staticContent);
  return (
    <>
      <div class="Customer-Guidelines-bgimg"></div>

      <section class="Privacy-Policy-info">
        <div class="container">
          <h2 class="main-head-tleft">
            Customer Community <span>Guidelines </span>
          </h2>
          <div className="backend-html Community-Guidelines">{renderhtml(html)}</div>

          {/* <div class="sercive-info">
            <p class="middle-text">
              We want the Hotspot App, the Website, and Service (collectively, the “Hotspot App” or
              “App”) to be a fun and flexible way for Customers, Rushers, and Merchants to connect,
              make money, and get anything delivered.
            </p>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">Customer access to the Hotspot App</p>
            <p class="middle-text">
              Just like we have guidelines for Rushers, we also have guidelines for Customers. These
              guidelines outline situations in which a user’s access to the Hotspot App could be
              limited, suspended, or even deactivated. These situations include but are not limited
              to fraud, threats to safety, discrimination, and the quality of other users’
              experiences.
            </p>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">Safety</p>
            <p class="middle-text">
              We want the Hotspot App to be a safe experience for everyone involved: Customers,
              Rushers, and Merchants. Accordingly, Hotspot reserves the right to terminate the
              access of any Customer that threatens the safety of a Rusher, Merchant, other
              Customer, or that otherwise creates a threatening or unsafe situation. Such situations
              include but are not limited to the following:{" "}
            </p>
            <p class="middle-text">
              <span class="top-span">
                <span> • Inappropriate or abusive language.</span>
                Asking overly personal questions, using crude or offensive language, or making
                comments or gestures that are sexual, aggressive, discriminatory, or offensive.
              </span>
              <span class="top-span">
                <span> • Uninvited contact with a Rusher.</span>
                Texting or calling a Rusher without invitation (outside of an accepted Hotspot),
                contacting a Rusher via social media without invitation, hugging a Rusher, or other
                unwanted physical contact.
              </span>
              <span class="top-span">
                <span>• Harassment and causing harm to a Rusher.</span> No one should be subject to
                physical, verbal, or sexual abuse, harassment, domestic violence, robbery, or other
                acts of violence.
              </span>
              <span class="top-span">
                <span> • Using Hotspot in violation of law.</span>
                Asking a Rusher to break local or federal laws, deliver illegal products, or use the
                Hotspot App to commit a crime.
              </span>
              <span class="top-span">
                <span>• Hazardous or unsafe conditions.</span>
                No Rusher should be exposed to conditions that would put a Rusher in immediate
                danger to life or limb or in an unsafe situation that could result in injury to the
                Rusher or others, or otherwise makes the Rusher fear for their personal safety. This
                can include dark paths, limited/difficult access, or other barriers.
              </span>
              <span class="top-span">
                <span>• Aggressive or dangerous animals.</span>
                No Rusher should be exposed to an aggressive or dangerous animal. All animals should
                be kept restrained while delivery is in progress.
              </span>
            </p>
            <p class="middle-text">
              <div class="follows-list">
                <span>
                  We may use your Information, including your Personal Information, as follows:
                </span>

                <p class="top-bottom">
                  Yes. If we believe a Customer has potentially threatened the safety of a Rusher,
                  Customer, or Merchant, or has otherwise created an unsafe or threatening
                  environment, we may contact the Customer to investigate the situation and may
                  suspend the Customer’s access to the Hotspot App as both a Rusher and a Customer
                  pending the outcome of that investigation. We may also temporarily deactivate your
                  account while we investigate the situation. If we ultimately determine a Customer
                  has threatened the safety of a Rusher, Customer, or Merchant, we will permanently
                  deactivate the Customer’s access to the Hotspot App as a Rusher and/or as a
                  Customer. In all such cases, the Customer will be notified of the situation and
                  given an opportunity to respond and appeal. If an unsafe situation exists that
                  would impact the completion of the Hotspot order, Hotspot reserves the right to
                  cancel the order and charge the Customer for the full amount that would have been
                  due upon a successful delivery (including all applicable fees and the suggested
                  tip).
                </p>
              </div>
            </p>
          </div>

          <div class="sercive-info">
            <p class="middle-heading">Discrimination </p>
            <p class="middle-text">
              We prohibit discrimination by or directed at Customers, Rushers, or Merchants because
              of race, color, religion, national origin, disability, sexual orientation, sex, gender
              identity, age, or any characteristic protected under applicable federal, state, or
              local law
            </p>
            <div class="follows-list">
              <span>Can discrimination affect access to the Hotspot App?</span>
              <p class="top-bottom">
                Yes. If we believe a Customer has discriminated against a Rusher, Customer, or
                Merchant’s race, color, religion, national origin, disability, sexual orientation,
                sex, gender identity, age or any characteristic protected under applicable federal,
                state, or local law, we may contact the Customer to investigate the situation and
                may suspend the Customer’s access to the Hotspot App pending the outcome of that
                investigation. If we determine the Customer discriminated against a Rusher,
                Customer, or Merchant on the basis of a Customer’s race, color, religion, national
                origin, disability, sexual orientation, sex, gender identity, age, or any
                characteristic protected under applicable federal, state, or local law, we will
                terminate the Customer’s access permanently. In all such cases, the Customer will be
                notified of the situation and given an opportunity to respond and appeal.
              </p>
            </div>
          </div>

          <div class="sercive-info">
            <p class="middle-heading">Fraud </p>
            <p class="middle-text">
              You may not use the Hotspot App to abuse promotions or refunds, dispute charges for
              fraudulent or illegitimate reasons, provide information that is fraudulent or
              inaccurate, or otherwise unjustly enrich yourself.{" "}
            </p>
            <div class="follows-list">
              <span>Can committing fraud affect access to the Hotspot App? </span>
              <p class="top-bottom">
                Yes. If we have reason to believe a Customer has engaged in fraudulent activity of
                any kind, we may contact the Customer to investigate the situation and may suspend
                the Customer’s access to the Hotspot app pending that investigation. If we determine
                the Customer engaged in fraudulent activity, we may terminate the Customer’s access
                as a Rusher and/or Customer temporarily or permanently. In all such cases, the
                Customer may be notified of the situation and given an opportunity to respond and
                appeal. Finally, we reserve the right to pursue any Customer who uses the Hotspot
                App to commit fraud for repayment, recoupment, and associated attorneys’ fees and
                expenses.
              </p>
            </div>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">Restricted products </p>
            <p class="middle-text">
              We want the Hotspot App to be a safe experience for the Rusher, Customer, and
              Merchant, so we have a shortlist of items that either (a) cannot be delivered to
              Customers, (b) can only be delivered in limited quantities, or (c) require proof of
              age and verification. The Restricted Product List is hereby incorporated herein, as
              may be updated from time to time. If you order delivery of age-restricted products,
              such as alcohol or tobacco, you agree to present a valid government-issued ID bearing
              your photograph and verifying your age. You agree to comply with any other laws
              applicable to the delivery of your order.{" "}
            </p>
            <div class="follows-list">
              <span>
                Can failure to comply with restricted products guidelines affect your access to the
                Hotspot App?{" "}
              </span>
              <p class="top-bottom">
                Yes. If we believe that a Customer has broken the law, such as purchasing alcoholic
                beverages or tobacco products if you are not at least twenty-one (21), or ordering
                items that are prohibited on the The Restricted Products List, Hotspot may suspend
                the Customer’s access to the Hotspot App temporarily or permanently. In all such
                cases, the Customer may be notified of the situation and given an opportunity to
                respond and appeal. If a Customer fails to comply with the above, or if the Customer
                asks for the delivery of any items or combination of items which Hotspot believes
                (in its sole discretion) may be intended for potentially illegal, fraudulent, or
                unsafe purposes, Hotspot reserves the right to cancel the order and charge the
                Customer for the full amount that would have been due upon a successful delivery
                (including all applicable fees and the suggested tip).
              </p>
            </div>
          </div>

          <div class="sercive-info">
            <p class="middle-heading">Areas with restricted access</p>
            <p class="middle-text">
              If ordering to any area with restricted access, such as a school, gated community,
              place of work, or other secure zone, it is the responsibility of the Customer to
              ensure the Rusher is given appropriate information and access necessary to enter and
              complete the delivery. If access is not possible, it is the Customer’s responsibility
              to designate a nearby area to come out and meet the Rusher. If a Customer fails to
              comply with the above, Hotspot reserves the right to cancel the order and charge the
              Customer for the full amount that would have been due upon a successful delivery
              (including all applicable fees and the suggested tip).
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
