import MainSection from "../components/MainSection";
import AllImages from "../Images";
import Cta from "../components/Cta";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import AccordionItem from "../components/AccordianItem";

function Faq() {
  const itemList = [
    {
      heading: "What is Brand Licensing? ",
      description:
        "Brand licensing enables brand owners to expand their fan base and explore new business categories without substantial investments in new manufacturing. It helps retailers and manufacturers differentiate themselves from competitors by offering consumers popular brands, boosting market sales, and optimizing growth.",
    },
    {
      heading: "How will Getting a License from FTV help me grow my business? ",
      description:
        "FTV operates in over 196 countries and boasts an exceptionally high brand recall rate. Securing an FTV license provides access to a global customer base of high-net-worth individuals, facilitating exponential business growth with minimal risk. In addition to brand access, FTV offers comprehensive end-to-end support to help you steer your business in your desired direction.",
    },
    {
      heading: "How can I get an FTV Brand License?",
      description:
        "Simply get in touch with us at www.ftvlicenses.in and expect a call shortly from the concerned authority for a detailed breakdown of the possible opportunities. ",
    },
    {
      heading:
        "How much do I pay to get a License? ",
      description:
        "We at FTV Believe that every brand and every representative has their own distinct value proposition, thus the deals would not be rigid with a rate card. We can mutually come down to an agreement where both parties are satisfied. For the same, kindly contact us by filling the Enquiry form mentioned on www.ftvlicenses.in. ",
    },
    {
      heading:
        "What would be the Tenure of this Licensing deal? ",
      description:
        "A license agreement for a single project is granted in perpetuity / all time. However, if a builder or developer wishes to undertake a new project with an FTV license, a new license must be obtained.",
    },
    {
      heading:
        "Who is Eligible to get an FTV Brand License? ",
      description:
        "As FTV possesses an Immense Name in the market and would have to be contained by a vessel that can sustain the name, we run in-depth background checks about the company history and the company's future forecasting. ",
    },
    {
      heading:
        "Deliverables",
      description:
        "Rights Delivered, Brand Name, Logo, Logo Usage, Colors, Typography, Brand Guidelines, Supporting Deliverables ➡️ Branding & Marketing, Designing Assistance,Social Media Marketing",
    },
    {
      heading:
        "How much is the licensing fee? ",
      description:
        "License fees depend on the project which is coming up and the same is calculated as 4% of the Saleable Project Value / Cost.",
    },
    {
      heading:
        "What is the ROI?",
      description:
        "Return on investment, money invested against the return. Duration varies from 3 to 4 months depending on the project. ",
    },
    {
      heading:
        "What are the deliverables which FTV will deliver?",
      description:
        "Marketing - Digital Assistance, Architectural & Interior Designing Assistance, Branding, Direct contact with HNI Investors, Additional Franchising support in the project for a discounted rate (optional).",
    },
    {
      heading:
        "Does FTV help with location hunting ?",
      description:
        "No. License work only happens before the area (planning stage) & RERA is done. ",
    },
    {
      heading:
        "FTV is known for luxury and wants to cater to HNI or the elite class. How will you do that in tier 2 or tier 3 cities where people don’t have budgets and want a simple and standard lifestyle? The flats / houses won’t sell?",
      description:
        "FTV will give licenses only where we feel it is the right location to go ahead. Our 11 products cater to all tier cities.",
    },
    {
      heading:
        "Why an FTV license?",
      description:
        "Fashion TV is world’s largest fashion & lifestyle media brand, it’s brand name will enhance the value of your project & bring you an elite clientele for this collaboration. The brand can be used as a marketing tool with the help of which the developers construe a landmark project in the said area.",
    },
    {
      heading:
        "What Benefits will be given to builders?",
      description:
        "FTV will handle all aspects of marketing, including social media and digital presence. Most crucially, FTV will oversee the project's design to ensure international quality and brand refinement. This comprehensive approach enhances property branding and increases inventory value for sale.",
    },
    {
      heading:
        "Architectural assistance or design?",
      description:
        "Yes, both are provided by FTV.",
    },
    {
      heading:
        "How soon license paperwork can be completed?",
      description:
        "Within 48 hours, you can get over the entire documentation procedure.",
    },
    {
      heading:
        "Payment Plan?",
      description:
        "First, we sign the Letter of Confirmation (LOC) where the developers transfer a token amount of 25% of the Licensing Fee. Then the developer is given a period of 30 days to transfer the remaining 75% where we sign the Long Form Agreement (LFA).",
    },
    {
      heading:
        "Investment From FTV?",
      description:
        "  FashionTV does NOT INVEST in any of the brand partnership projects. ",
    },
    {
      heading:
        "Is the license royalty recurring in nature ?",
      description:
        "The licensing royalty is optional for the builder in cases where they want FTV to take the Sales Mandate. FTV charges 2% or 3% depending on the market rate of the Sale Value of the unit as a Royalty. This will only be charged on the units sold by FTV solely.",
    },
    
    {
      heading:
        "How much token amount does this deal require ?",
      description:
        "25% of the Licensing Fee.",
    },
    {
      heading:
        "Why should I take an FTV license where I can use my own brand ?",
      description:
        "Refer to question no. 6 and the answer provided. Even the biggest of the brands are always open to collaborations. No company likes to go as a monopoly for the harmony of the industry. This project is going to be a collaboration between FTV & your company. It will help escalate the project as a brand that becomes a landmark.",
    },
    {
      heading:
        "What is the further process once real estate agents are onboarded ?",
      description:
        "Agents / CHP( Channel Partners)  introduce Builders with FTV for getting a deal closed in their city.",
    },
    {
      heading:
        "Can we assist the builder with respect to paperwork clearance?",
      description:
        "No, there’s apparently no need for that.",
    },
    {
      heading:
        "What are the litigation and non-litigation clauses of our agreement?",
      description:
        "Details will be shared on agreement & can be discussed before signing as per the comfort of the client.",
    },
    {
      heading:
        "Is there a minimum project size required to get the license ?",
      description:
        "Project size is not an issue. Minimum project valuation FTV that would incur is 25 CR.",
    },
    {
      heading:
        "What about the security of business associates if they introduce Builder (What if builder approaches us directly)?",
      description:
        "FTV will ensure that their business associate becomes the primary point of contact for all projects introduced by the developer. The Channel Partner will not have any involvement in deals where the developer directly engages with FTV.",
    },
    {
      heading:
        "Visiting Cards to associates for meeting builders (certified channel partner).",
      description:
        "Yes, visiting cards are provided to all our business partners.",
    },
    {
      heading:
        "Will broadcasting be conducted internationally? If so, will inquiries be directly forwarded to the builder, or will FTV handle the brokerage and commissions for those inquiries?",
      description:
        "No broadcasting is provided for the licensing agreement by FashionTV.",
    },
    {
      heading:
        "Who will bear the cost for celebrity endorsement ?",
      description:
        "Builder / developer* will have to bear the cost of the celebrity endorsement, if any. ",
    },
    {
      heading:
      "Besides the royalty FTV receives from flat sales, does FTV also take brokerage fees and compensate the associated channel partner who facilitated the licensing deal?",
      description:
      "1. FTV collects royalty only for inventories that it exclusively sells and for which it has a mandate. 2. FTV requests a mandate from developers to be granted to the Channel Partner. The brokerage agreement between the Channel Partner and the developer is independent of FTV, which does not participate in or provide any brokerage fees.",
    },
    {
      heading:
        "Who will bear the cost for an international Interior Designer / Architect?",
      description:
        "The Developer will have to bear the cost incurred as the fees of the International Designer or Architect.",
    },
    {
      heading:
        "If the builder takes the help of FTV interior designers is that included in the licensing fee?",
      description:
        "Basic standards of the design can be amended & enhanced by the in-house FTV designers regarding property branding, adding luxury or aesthetic elements. Otherwise if the project has to be designed right from the scratch then the designing fees will be charged separately. ",
    },
    {
      heading:
        "Why would your existing franchisees assist in branding?   Wrong question. It should be how? ",
      description:
        "Existing FTV franchise owners become a direct customer base for the developer,  facilitating the purchase of inventories. Thus, they become a medium in branding of the said project.",
    },
    {
      heading:
        "Explain Marketing support in detail?",
      description:
        "  1. FTV will handle all social media marketing (SMM) and provide comprehensive   digital support and promotion for the project across PAN India. 2. A customized direct-to-consumer (D2C) website will be created specifically for this project, with targeted campaigns also run on the site."
    },
    
  ];
  const [filteredList, setFilteredList] = useState(itemList);

  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = [...itemList];

    updatedList = updatedList.filter((item) => {
      return (
        item.heading.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        item.description.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });

    setFilteredList(updatedList);
  };

  return (
    <>
      <MainSection
        mainImage={AllImages.faqBanner}
        mainHeading="FAQ"
        showPara={false}
      />
      {/*  */}
      <section className="faq-main-section">
        {/* <div className="faq-main-brnd">
          <img src={branding.fadeF} alt="branding" loading="lazy" />
        </div> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-10 col-12 pb-5">
              <div className="faq-main-para text-center pb-4">
                <h4 data-aos="fade-up" className="pb-4 section-heading">
                  <span>Frequently </span> Asked Questions
                </h4>
                <p data-aos="fade-up">
                  Checkout out our FAQ's and get to know, what all you need to
                  know
                </p>
                <div className="formclass" data-aos="fade-up">
                  <input
                    className="faq-input"
                    type="text"
                    onChange={filterBySearch}
                    placeholder="Which Property are you interested in?"
                  />
                  <div className="faq-btn">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 p-0">
              <div className="desc">
                <div className="accordion" id="accordionExample">
                  {filteredList.map((item, index) => (
                    <AccordionItem
                      key={index}
                      show={index === 0 ? "show" : ""}
                      accId={`heading${index + 1}`}
                      collapseName={`collapse${index + 1}`}
                      itemHeading={item.heading}
                      itemPara={item.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export default Faq;
