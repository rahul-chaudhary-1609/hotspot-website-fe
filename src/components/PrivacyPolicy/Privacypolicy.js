import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
import Commanheadbg from "../Commanheadbg";
function renderhtml(page_url) {
  let url = `http://3.228.159.69/website/htmlFileUrlToTextConvert?file_url=${page_url}`;
  return <object type="text/html" data={url}></object>;
}
function Privacypolicy() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios("http://3.228.159.69/website/getStaticContent/2");
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
          <h2 class="main-head-tleft">
            Privacy <span>Policy </span>
          </h2>
          <div className="backend-html">{renderhtml(html)}</div>

          {/* <div class="sercive-info">
            <p class="middle-heading">This Privacy Policy applies to:</p>
            <p class="middle-text">
              Effective October 7, 2020
              <br />
              <br />
              NeighborFavor Inc., a Delaware corporation d/b/a Favor (“Favor,” “our,” “us,” or “we“)
              respects your privacy. We created this Privacy Policy to let you know what Information
              we collect and how we use it, as well as our practices regarding such Information.
            </p>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">This Privacy Policy does not apply to:</p>
            <ul class="middle-text">
              <li>
                • The website Togohotspot.com or any other website owned or operated by Hotspot
                which links to this Privacy Policy (the “Website”);
              </li>
              <li>• Our mobile application(s) which link to this Privacy Policy (the “Apps”);</li>
              <li>
                • Our on-demand ordering service (together with the Website and the Apps, the
                “Hotspot Service” or the “Service”); and
              </li>
              <li>
                • Any email, text, and other electronic communications between you and Hotspot.
              </li>
            </ul>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">This Privacy Policy does not apply to:</p>
            <ul class="middle-text">
              <li>
                • Information we collect offline or by any other means (such as through other
                websites or services we may offer); and
              </li>
              <li>
                • Information collected by our affiliates or any other third parties, which may have
                their own privacy policies
              </li>
            </ul>
            <p class="middle-text">
              Please read this Privacy Policy carefully and save it. If you do not agree with it,
              you should not access the Website or use the Service or the App. By using the Service,
              the Website, the App, or by submitting electronic communications to us, you consent to
              the practices described in this Privacy Policy.
            </p>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">What Information does Hotspot collect?</p>
            <p class="middle-text">
              <span class="top-span">
                <span> Personal Information -</span> When we refer to “Personal Information” in this
                Privacy Policy, we mean any Information by which you may be personally identified or
                contacted, whether online or offline. When you use the Service or fill out any forms
                located on the Website or Apps, we may collect certain Personal Information from
                you, such as your first and last name, address/location, email address, phone
                number, and gender, photograph, and copies of your government-issued identification
                card. Additionally, if you apply to be a Rusher, we may collect certain other
                Personal Information from you as further described in our Rusher Software Agreement
                and/or Rusher policies and procedures. As a Customer user or a Rusher, it is always
                your choice whether or not to provide Personal Information. If you choose not to
                provide requested Personal Information, you may not be able to participate in
                certain activities or use certain features of the Service or the Apps.
              </span>
              <span class="top-span">
                <span> Technical Information. -</span>We may also collect and use technical data and
                related Information, such as Information about your device, system and application
                software, peripherals, and other data related to your interactions with the Service
                (“Technical Information”). We automatically collect Technical Information through
                the use of “cookies” and other similar collection technologies, like pixels, web
                beacons, and local storage. The Information we collect from these technologies may
                include your web settings and preferences, website analytics Information, device
                type, phone operating system, and push ID. Hotspot does not consider this
                Information to be Personal Information. Hotspot owns all Technical Information and
                may use it for any lawful purpose. Depending on your browser, you may be able to
                remove and reject cookies from our Website or the Service by changing your browser
                settings. The default setting of many browsers is set to accept cookies until you
                change your settings. Please note that if you disable or refuse cookies, certain
                features of the Website or the Service may become inaccessible or may not function
                properly.
              </span>
              <span class="top-span">
                <span>Location Information -</span> We also collect Information about your
                geographic location from you or your device, including your country, region, city,
                ZIP code, street address, time zone, latitude, longitude, and horizontal position
                representation Information (“Location Information”).
              </span>
              <span class="top-span">
                <span>Social Information -</span> We may also collect Information about you from
                various third-party services (e.g., Facebook, Twitter, Instagram, and others)
                through their applicable APIs or otherwise (“Social Information”).
              </span>
              <span class="top-span">
                <span>Tracking Information and Do Not Track signals -</span> We use the Website, the
                Apps, and the Service to collect Information about your activities over time and
                across third-party websites, applications, or other online services (“Tracking
                Information”). Your web browser, application platform, or device may allow you to
                opt out of our collection of Tracking Information by selecting a “do not track” (or
                similar) setting. However, we do not currently have processes to address those
                settings or other “do not track” requests, and consequently, cannot guarantee that
                we will honor such requests. If you do not want us to collect this Information, do
                not use the Website, the Apps, or the Service.
              </span>
              <span class="top-span">
                <span>Order information and other information you voluntarily disclose -</span>
                Certain features of the Service and the Apps are designed to display information you
                choose to provide to other users (such as texts between Customer users and the
                Rushers delivering products), or to other third parties (such as Merchants from whom
                you order products). Please keep in mind that whenever you voluntarily disclose
                information by ordering products or otherwise providing such information through the
                Service or the Apps (including, for example, if you provide building or security
                codes to Rushers), that information can be seen by those users or third parties to
                whom you send that information. We are not responsible for the security or privacy
                of any information you choose to submit in connection with these features.
              </span>
            </p>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">How does Hotspot use this information?</p>
            <p class="middle-text">
              Except as described in this Privacy Policy or in our Terms of Service, Personal
              Information, Technical Information, Location Information, Social Information, and
              Tracking Information (collectively, “Information”) that you provide or that we collect
              will be kept confidential and used to support your relationship with Hotspot
            </p>
            <div class="follows-list">
              <span>
                We may use your Information, including your Personal Information, as follows:
              </span>
              <ul>
                <li>• For order fulfillment, billing, and delivery purposes;</li>
                <li>
                  • To enable you to participate in interactive features of the Service or the Apps
                  (such as communications between Customers and Rushers);
                </li>
                <li>• To provide services and Customer support to you;</li>
                <li>
                  • To improve, test, measure, update, and monitor Hotspot’s products, services, and
                  communications for a better user experience;
                </li>
                <li>
                  • To communicate with you, including about the Service, the Apps or your account;
                </li>
                <li>
                  • To verify your age and identity, for example when purchasing age-restricted
                  products;
                </li>
                <li>
                  • To market or promote the Service, the Apps, or products and services of
                  Hotspot’s affiliates or third-party partners;
                </li>
                <li>
                  • To personalize your experience (for example, we may personalize the content and
                  features you see when visiting or otherwise using the Website, our Service, or
                  Apps. In addition, we may personalize advertisements, marketing communications,
                  and recommendations to make them more tailored to your interests); and
                </li>
                <li>
                  • For any other purpose we may describe when you provide the Information, or to
                  which you otherwise consent.
                </li>
              </ul>
              <p>
                In addition, Hotspot and its third-party partners may also use the Information to:
                remember your Information so you will not have to re-enter it during a subsequent
                visit; help you efficiently access your Information after you sign in; diagnose or
                fix technology problems; and for security and fraud prevention purposes including
                without limitation identifying and distinguishing between fraudulent and legitimate
                transactions; and To maintain legal and regulatory compliance (for example, to pay
                our taxes, fulfill our business obligations, or otherwise manage legal risks or
                comply with applicable laws).
              </p>
            </div>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">Information we share:</p>
            <span class="top-span-part-two">
              <span>
                Except as described in this Privacy Policy, Hotspot does not share, rent, or sell
                your Personal Information with third parties.
              </span>
              <span>
                {" "}
                NeighborFavor Inc., a Delaware corporation d/b/a Favor (“Favor,” “our,” “us,” or
                “we“) respects your privacy. We created this Privacy Policy to let you know what
                Information we collect and how we use it, as well as our practices regarding such
                Information.
                <span>
                  {" "}
                  • To our third-party service providers, agents, vendors, or contractors that we
                  use to support the operations of our business including the Service, the Apps, and
                  the Website and who are required to keep the Information confidential and use it
                  only for the purposes for which we disclose it to them. Such purposes include but
                  are not limited to payment processing, advertising services, marketing services,
                  web analytics, data processing, IT services, Customer support, and other services;
                </span>
                <ul>
                  <li>
                    • To our third-party service providers, agents, vendors, or contractors that we
                    use to support the operations of our business including the Service, the Apps,
                    and the Website and who are required to keep the Information confidential and
                    use it only for the purposes for which we disclose it to them. Such purposes
                    include but are not limited to payment processing, advertising services,
                    marketing services, web analytics, data processing, IT services, Customer
                    support, and other services;
                  </li>
                  <li>
                    • To our affiliates for business purposes (provided that these entities will
                    also be required to comply with the terms of this Privacy Policy with regard to
                    their use of your Information);
                  </li>
                  <li>
                    • If required to do so by law, comply with legal process or to comply with a
                    governmental or regulatory request;
                  </li>
                  <li>
                    • To protect and defend the rights or property of Hotspot or its agents or
                    contractors;
                  </li>
                  <li>• To enforce our Terms of Service or other Hotspot agreements;</li>
                  <li>• To verify your age and identity for certain purchases;</li>
                  <li>
                    • To act in urgent circumstances to protect the personal safety of users of the
                    Service, the App, the Website, or the public;
                  </li>
                  <li>
                    • As part of a transaction or potential transaction where Hotspot or any of its
                    affiliates merges with another organization, files for bankruptcy, or sells its
                    assets or capital stock;
                  </li>
                  <li>
                    • When you place an order, we will provide the following Information to the
                    Rusher that fulfills your order: your name, phone number, order details, the
                    Merchant whose products you are requesting, and Location Information so the
                    Rusher can fulfill your order and communicate with you about your order;
                  </li>
                  <li>
                    • To Merchants whose products you have requested to help fulfill your order; and
                  </li>
                  <li>
                    • With your consent, we may share or disclose Information as you have directed
                    or approved elsewhere.
                  </li>
                </ul>
                <span>
                  If you are a Rusher, we may share Information related to amounts paid to you with
                  our third-party payment processor and the relevant taxing authorities for tax
                  purposes, as further described in our Rusher Software Agreement.
                </span>
              </span>
            </span>

            <div class="sercive-info">
              <p class="middle-heading">Third-party websites, services, and technologies </p>
              <p class="middle-text">
                We may provide links to third-party websites on the Website or in other
                communications to you. These links may appear as a specific domain name or URL or
                may be activated by clicking on an advertisement or other icon or graphic. Please be
                aware that other websites and services, including the websites of third parties you
                connect with through the Service, may collect personally identifiable Information
                about you. We cannot control and are not responsible for the Information collection
                practices of any third-party websites, services, or applications. We encourage you
                to carefully review their terms of use, privacy policies, and any other legal
                notifications before using or providing Information through such websites, services,
                or applications. Further, the Service may employ third-party technologies that
                require you to accept such third party’s terms. This Privacy Policy does not cover
                the Information practices of those third-party technologies.
              </p>
            </div>
            <div class="sercive-info">
              <p class="middle-heading">Children’s privacy </p>
              <p class="middle-text">
                The Website, the Apps, and the Service are not intended for children under the age
                of 13. We do not knowingly collect Information from children under 13. If you
                believe that we may have collected Information from a child under the age of 13,
                please contact us via <a href="">privacy@togohotspot.com</a>
              </p>
            </div>

            <div class="sercive-info">
              <p class="middle-heading">Information choices and changes</p>
              <p class="middle-text">
                We may need to communicate with you about the Service and the App, and we would like
                to make certain commercial offers available to you from time to time. As such, you
                consent to receive commercial messages (whether by phone, email, text, or push
                notifications) from us or our third-party partners, and acknowledge and agree that
                your primary phone numbers and email addresses and other Information may be used for
                the purpose of initiating commercial messages. We will allow you to opt out of
                receiving commercial messages, but in order to stop receiving any messages from us
                whatsoever (including administrative messages regarding the Service or messages that
                are primarily about transactions enabled via the Service), you will need to
                terminate your account.
              </p>
            </div>

            <div class="sercive-info">
              <p class="middle-heading">Regarding Customers outside Texas </p>
              <p class="middle-text">
                The Services are currently not intended for use outside of the State of Texas. If
                you reside or are otherwise located outside of the State of Texas, you may not
                access or otherwise use the Website, Service, or Apps, nor may you provide Hotspot
                with any Personal Information or cause Hotspot to receive any Personal Information
                of any non-Texas resident, resident of California, or resident of the European
                Union.
              </p>
            </div>

            <div class="sercive-info">
              <p class="middle-heading">Changes to this Privacy Policy</p>
              <p class="middle-text">
                This is our entire Privacy Policy and it replaces any earlier version. We may change
                this Privacy Policy by posting a new version on the Website or through the Service
                or the App, and it is your responsibility to review this Privacy Policy
                periodically. If we make material changes to our practices regarding the collection,
                use and sharing of your Personal Information, we will notify you via email to the
                email address you provide to us and/or through a notice on the Website home page or
                via the Service or the Apps. When we do change the Privacy Policy, we will also
                revise the effective date. Your continued use of the Service or the Apps after such
                date constitutes your agreement to this Privacy Policy and any updates
              </p>{" "}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Privacypolicy;
