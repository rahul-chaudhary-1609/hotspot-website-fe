import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
function renderhtml(page_url) {
  let url = `http://3.228.159.69/website/htmlFileUrlToTextConvert?file_url=${page_url}`;
  return <object type="text/html" data={url}></object>;
}
function Termofserviceinfo() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios("http://3.228.159.69/website/getStaticContent/1");
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
        <div className="backend-html termofservice">{renderhtml(html)}</div>

        {/* <div class="sercive-info">
          <p class="middle-heading">1. Introduction: Our App and the Hotspot Service</p>
          <p class="middle-text">
            We are pleased to offer you access to our smart phone application (the “App”) and/or our
            website, togohotspot.com (the “Website”), through which we offer a proprietary service
            (together with the App and the Website, the “Hotspot Service”) designed to connect
            customer users of the Hotspot Service (“Customers”) interested in placing orders for
            food, groceries, beverages, and other products and services from participating
            restaurants and other merchants (“Merchants”) with independent couriers (“Rushers”)
            interested in delivering such orders. These Terms (“Terms”) shall also apply to any
            other websites or apps owned or operated by Hotspot which link to them. The term “you”
            refers to a Customer user of the Hotspot Service.
          </p>
        </div>
        <div class="sercive-info">
          <p class="middle-heading">
            2. Our Agreement: This is a binding contract between you and us. You agree to our
            Privacy Policy.
          </p>
          <p class="middle-text">
            Please read these Terms of Service carefully. These Terms and other documents we refer
            to in these Terms, like our Privacy Policy (together, the “Agreement”), govern your
            access to the Hotspot Service.
            <br />
            <br />
            By clicking the “I AGREE” button, installing the App, or using the Hotspot Service, you
            agree, effective as of such date (the “Effective Date”) to be bound by this Agreement.
            <br />
            <br />
            You are only authorized to use the Hotspot Service if you agree to abide by all
            applicable laws and this Agreement. Please read this Agreement carefully and save it. If
            you do not agree with it, you should not install the App or visit the Website and should
            discontinue use of the Hotspot Service immediately.
            <br />
            <br />
            NOTE THAT SECTION 23 OF THESE TERMS CONTAINS A MANDATORY ARBITRATION PROVISION THAT
            REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS AND LIMITS THE REMEDIES AVAILABLE
            TO YOU IN THE EVENT OF CERTAIN DISPUTES, INCLUDING BUT NOT LIMITED TO THE WAIVER OF A
            JURY TRIAL. If you do not agree with it, you should not install the App or visit the
            Website and should discontinue use of the Hotspot Service immediately. If you are under
            the age of 18, you may not use the Hotspot Service for any purpose.
          </p>
        </div>
        <div class="sercive-info">
          <p class="middle-heading">
            3. About us: We are a technology company. We are not a courier or logistics provider.
          </p>
          <p class="middle-text">
            To Go Hotspot LLC., a Texas corporation d/b/a Hotspot (“Hotspot,” “us,” or “we”) is a
            technology provider. You acknowledge and agree that we are not a courier, logistics
            provider, common carrier, or food service operator. We do not supply any food,
            groceries, beverages, or other products that are delivered to you. Rushers are not our
            employees, representatives, or agents.
          </p>
        </div>
        <div class="sercive-info">
          <p class="middle-heading">
            4. Provision of Hotspot Service and License Grant: We grant you rights to use the
            Hotspot Service.
          </p>
          <p class="middle-text">
            The Hotspot Service (including all content therein and the compilation of such content,
            including but not limited to all photos, videos, recipes, text, graphics, data, and
            images) are each owned by Hotspot and/or its licensors and are subject to trademark,
            service mark, copyright, and/or other intellectual property rights. The Hotspot names
            and logos, and all related product and service names, design marks, and slogans, are the
            trademarks or service marks of Hotspot. All other marks are the property of their
            respective companies. Nothing contained in the Hotspot Service grants any rights to use
            any trade name, trademark, service mark, logo, or other intellectual property without
            the express prior written consent of the owner.
            <br />
            <br />
            Subject to your compliance with the terms and conditions of this Agreement, during the
            Term, Hotspot hereby grants you a limited, non-exclusive, and nontransferable license to
            use the Hotspot Service, including the right to download, install, and use the App on a
            smartphone, tablet, or other mobile device that you own or control, solely for so long
            as you are permitted by Hotspot to use the Hotspot Service.
          </p>
        </div>
        <div class="sercive-info">
          <p class="middle-heading">
            5. Representations about you: You make certain representations about yourself.
          </p>
          <p class="middle-text">
            You represent and warrant that (a) you have read and understand this Agreement, (b) you
            are 18 years of age or older, (c) the information that you provide to us about you or
            your account in connection with the Hotspot Service will be current, true, accurate,
            supportable, and complete, (d) you are not located in a country that is subject to a US
            government embargo, or that has been designated by the US government as a “terrorist
            supporting” country, and (e) you are not listed on any US government list of prohibited
            or restricted parties. Additionally, if you are entering into this Agreement on behalf
            of your organization, you represent that you are the authorized agent of the
            organization and have the legal authority to enter into this Agreement on its behalf.
          </p>
        </div>
        <div class="sercive-info">
          <p class="middle-heading">6. Users: Certain terms apply to Customers and Rushers.</p>
          <p class="middle-text">
            There are two types of users of the Hotspot Service: (a) Customers who request Merchant
            products to be delivered, and (b) Rushers who provide delivery services. This Agreement
            applies to your use of the Hotspot Service as a Customer. As a Customer, you agree that
            you will: (i) as a condition to placing an order via the Hotspot Service, link your
            Hotspot account with a valid credit card, debit card, and/or other authorized payment
            method (“Payment Method”), (ii) pay for the orders that you place via the Hotspot
            Service, and (iii) comply with all applicable laws at all times. You agree to keep your
            Payment Method information current at all times while using the Hotspot Service (such as
            your card number and expiration date). Additionally, you may add more than one Payment
            Method per account.
            <br />
            <br />
            You acknowledge that each Rusher retains total and complete discretion as to the
            Rusher’s provision of services. You further acknowledge and agree that Hotspot has no
            responsibility and makes no guarantees regarding: (1) Rushers or their vehicles, or (2)
            Merchants or the quality of any products delivered by Rushers. Hotspot retains a portion
            of the payments made via the Hotspot Service, but solely as a service fee for
            facilitating the transactions and payments envisioned by this Agreement. You accept all
            risks related to interacting with and transacting with Rushers and Merchants and all
            risk related to the Merchant products that Rushers deliver to you.
            <br />
            <br />
            You may need to register to use all or part of the Hotspot Service. We may reject or
            require that you change any account name, password, or other information that you
            provide to us in registering. Your account name and password are for your personal use
            only. You are responsible for maintaining the confidentiality of your account and
            password (including any related security questions and answers), and for restricting
            access to your computer or other device, and you are responsible for all activities,
            including purchases, that occur in connection with your account or password. Your
            account may not always transfer to other websites owned or operated by Hotspot; such
            websites may require you to create a separate account. You represent and warrant that
            any information you provide in connection with the Hotspot Service is and will remain
            accurate, current, and complete, and that you will maintain and update such information
            as needed. By creating an account, you also agree to immediately notify us if you
            discover or otherwise suspect any security breaches related to the Hotspot Service or
            your account.
            <br />
            <br />
            Hotspot reserves the right, but does not have any obligation, to monitor the Hotspot
            Service electronically. Hotspot furthers reserves the right to disclose any content,
            records, or electronic communication of any kind, including feedback, if required to do
            so by any law, rule, regulation, or court order, or if such disclosure is necessary or
            appropriate to operate the Hotspot Service or to protect Hotspot’s rights or property,
            or the rights of other Hotspot Service users, or our partners, affiliates, sponsors,
            providers, licensors, or Merchants, or as otherwise permitted in our Privacy Policy.
            <br />
            <br />
            Without limiting Section 16 below, we may terminate or suspend your access to or use of
            your account, and/or close your account, for any reason or no reason at any time, upon
            notice to you, including without limitation if you (A) have violated these Terms, the
            Customer Community Guidelines, the Rusher Community Guidelines, or any other terms
            referenced herein, (B) pose an unacceptable credit or fraud risk to us, (C) attempt to
            abuse, game, or otherwise exploit the Hotspot Service or any discounts, offers,
            promotion codes, or referral codes offered in connection therewith (as determined by
            Hotspot in its sole discretion), (D) attempt to gain unauthorized access to portions of
            the App or Hotspot Service or information in the Hotspot Service that is not yours, such
            as other accounts, or (E) provide any false, incomplete, inaccurate, or misleading
            information, or otherwise engage in fraudulent or illegal conduct. Upon any such
            termination or suspension, you must immediately stop using the Hotspot Service,
            including without limitation the mobile payment functionality, and we reserve the right
            to delete all of your account information stored on our servers. We will not be liable
            to you for compensation, reimbursement, or damages in connection with your use of the
            mobile payment functionality, or any such termination, suspension, or deletion of
            information.
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default Termofserviceinfo;
