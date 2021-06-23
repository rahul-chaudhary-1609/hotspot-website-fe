import React, { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser";
function renderhtml(page_url) {
  let url = `http://3.228.159.69/website/htmlFileUrlToTextConvert?file_url=${page_url}`;
  return <object type="text/html" data={url}></object>;
}
function DriverGuidelines() {
  const [data, setdata] = useState(null);
  const [html, sethtml] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const data = await axios("http://3.228.159.69/website/getStaticContent/11");
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

          <div className="backend-html">{renderhtml(html)}</div>

          {/* <div class="sercive-info">
            <p class="middle-text">
              We want the Hotspot App to be a safe experience for everyone involved: Rushers,
              customers, and merchants. Accordingly, Hotspot does not allow the purchase or
              transport of any restricted products and reserves the right to terminate any such
              orders in accordance with the Community Guidelines. Such restricted products include,
              but not limited to, the following:
            </p>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">PROHIBITED UNDER ALL CIRCUMSTANCES:</p>
            <div class="Restricted">
              <p class="middle-heading black">Animals and Regulated Species</p>
              <p class="middle-text">
                Just like we have guidelines for Rushers, we also have guidelines for Customers.
                These guidelines outline situations in which a user’s access to the Hotspot App
                could be limited, suspended, or even deactivated. These situations include but are
                not limited to fraud, threats to safety, discrimination, and the quality of other
                users’ experiences.
              </p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Biohazard Material</p>
              <p class="middle-text">
                Bodily fluids, medical waste, or other organic matter that may be hazardous
              </p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Counterfeit and Unauthorized Goods</p>
              <p class="middle-text">
                Replicas or imitations of designers or other goods; items without celebrity
                endorsement that would normally require such an association; fake autographs; fake
                currency; fake stamps, fake tickets; other potentially unauthorized goods.
              </p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Illegal Drugs</p>
              <p class="middle-text">Controlled substances, narcotics, and illegal drugs</p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Gaming/Gambling</p>
              <p class="middle-text">
                Lottery tickets, sports bets, memberships/enrollment in online gambling sites, and
                related content.
              </p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Gift Cards</p>
              <p class="middle-text">
                No third party gift cards, including products like Visa Gift Cards.
              </p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Illegal/Stolen Goods</p>
              <p class="middle-text">
                Materials, products, or information promoting illegal goods or enabling illegal
                acts; goods you do not own or have the right to sell; goods produced in violation of
                a third-party’s rights; smuggled goods and goods in violation of export-import or
                labeling restrictions; motor vehicles subject to transfer restriction; goods
                recorded on public registers (such as real estate) and whose transfer requires
                formalities that cannot be legally completed online
              </p>
            </div>

            <div class="Restricted">
              <p class="middle-heading black">Offensive Goods</p>
              <p class="middle-text">Goods, literature, products, or other materials that:</p>

              <ul>
                <li>
                  • Defame or slander any person or groups of people based on race, ethnicity,
                  national origin, religion, sex, or other factors
                </li>
                <li>
                  • Defame or slander any person or groups of people protected from defamation or
                  slander by applicable law
                </li>
                <li>• Encourage or incite violent acts</li>
                <li>• Promote intolerance or hatred</li>
                <li>• Contravene public morality</li>
              </ul>
            </div>

            <div class="Restricted">
              <p class="middle-heading black">Precious Materials</p>
              <p class="middle-text">Bulk sales of rare, scarce, or valuable materials or stones</p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Pyrotechnic Devices and Hazardous Materials</p>
              <p class="middle-text">
                Fireworks and related goods in markets where delivery of such goods are: toxic,
                flammable, and radioactive materials and substances; gun powder; explosives,
                gasoline, propane tanks.
              </p>
            </div>

            <div class="Restricted">
              <p class="middle-heading black">Prohibited by Law from being Delivered</p>
              <p class="middle-text">
                Airbags; batteries containing mercury; Freon or similar substances/refrigerants;
                chemical/industrial solvents; medical procedures; car number plates; police badges
                and law enforcement equipment; lock-picking devices; medical devices; pesticides and
                insecticides; postage meters; recalled items; slot machines; surveillance equipment
                that is primarily used to obtain unlawful interception of wire, oral, or electronic
                communications and/or to facilitate the unlawful view or recording of individuals;
                goods regulated by government or other agency specifications.
              </p>
            </div>

            <div class="Restricted">
              <p class="middle-heading black">Undeliverable Personal Items</p>
              <p class="middle-text">
                Identification documents, credit or debit cards, items containing cash
                (wallets/purses/money clips), personal electronics
                (phones/laptops/tablets/computers), enclosed packages or envelopes, closed large
                bags or packages (backpacks/gym bags/duffel bags), and any other potential
                high-value items or items which may contain sensitive personal information.
              </p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Weapons</p>
              <p class="middle-text">
                Firearms, ammunition, and other items including but not limited to firearms,
                disguised, undetectable or switchblade knives, martial arts weapons, silencers,
                ammunition, ammunition magazine, BB guns, and tear gas. Sharp objects such as
                knives, axes, and/or shovels are required to be in original packaging and purchased
                directly from a merchant.
              </p>
            </div>
          </div>

          <div class="sercive-info">
            <p class="middle-heading">LIMITED QUANTITIES ALLOWED:</p>
            <div class="Restricted">
              <p class="middle-heading black">Whipped Cream Chargers</p>
              <p class="middle-text">Limited to two boxes (50 each) per order.</p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Cigarettes</p>
              <p class="middle-text">Limited to two cartons per order.</p>
            </div>
          </div>
          <div class="sercive-info">
            <p class="middle-heading">AGE VERIFICATION ITEMS:</p>
            <div class="Restricted">
              <p class="middle-heading black">Alcohol</p>
              <p class="middle-text">Must be 21+ to purchase</p>
            </div>
            <div class="Restricted">
              <p class="middle-heading black">Tobacco</p>
              <p class="middle-text">Must be 21+ to purchase.</p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
export default DriverGuidelines;
