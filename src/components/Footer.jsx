import { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { login } from "../api/api";
import { subValidate } from "../api/FormValidation";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaArrowRight,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import AllImages from "../Images";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const sendEmailToAPI = async (email) => {
    try {
      const fetchedToken = await login();
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fetchedToken}`,
      };
  
      const response = await fetch(
        `https://node.ftvrealestate.in:8089/api/enquiry/subscribe/${email}`,
        {
          method: "GET",
          headers,
          mode: "cors",
        }
      );
  
      console.log("Response Status:", response.status);
      console.log("Response Status Text:", response.statusText);
  
      if (response.ok) {
        const data = await response.json();
        navigate("/thank-you");
        console.log("Subscription successful:", data);
      } else {
        console.error("Failed to subscribe:", response.statusText);
        throw new Error("Subscription failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Rethrow to be caught in handleSubmit
    }
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate the form data
    const subError = subValidate({ email });
    if (Object.keys(subError).length === 0) {
      try {
        await sendEmailToAPI(email);
        setEmail(""); // Clear input on success
        setError(""); // Clear any previous errors
      } catch (error) {
        setError("Subscription failed. Please try again.");
        console.error("Error during subscription:", error);
      }
    } else {
      setError(subError); // Display validation errors
    }
  };
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when input changes
  };

  return (
    <>
      <a
        href="https://api.whatsapp.com/send?phone=918655675630&text=Hii%2C%20I%27m%20interested%20in%20FTV%20Real%20Estate"
        target="_blank"
        aria-label="link"
        rel="noreferrer"
        className="btn-whatsapp-pulse"
      >
        <FaWhatsapp />
      </a>
      <footer className="footer">
        <div className="container-fluids">
          <div className="row g-4 align-items-center footer1-row">
            <div className="col-lg-2 col-md-12 col-sm-12">
              <div className="footer-logo">
                <img
                  loading="lazy"
                  src={AllImages.mainLogo}
                  alt="Real Estate Logo"
                />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-9 col-md-12 col-sm-12">
              <div className="footer-about">
                <h4>About | FTV Real Estate</h4>
                <p>
                FashionTV, a world-renowned icon in fashion and lifestyle media, introduces F Real Estate Brand Licensing - an exceptional business partnership. Associate with FTV Real Estate Brand Licensing to leverage the unparalleled brand prestige of FashionTV, guaranteeing substantial returns on your investment in the real estate industry.

                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-5 col-sm-6">
              <div className="footer-side2">
                <div className="footer-pages-links">
                  <h4>Quick Links</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="projects" title="Projects">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="about-us" title="F About">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="contact-us" title="Contact Us">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://ftvjobs.in/"
                        target="_blank"
                        title="Careers"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="terms-and-conditions"
                        title="Terms&nbsp;&&nbsp;Conditions"
                      >
                        Terms&nbsp;&&nbsp;Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="privacy-policy" title="FTV Privacy Policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="faq" title="FAQ">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-6">
              <div className="footer-side2">
                <div className="footer-pages-links">
                  <h4>Residences</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="residences/residences" title="F Residences">
                        F Residences
                      </Link>
                    </li>
                    <li>
                      <Link to="residences/villas" title="F Villas">
                        F Villas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="residences/furnished-apartments"
                        title="F furnished-apartments"
                      >
                        F Furnished-Apartments
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-5 col-sm-6">
              <div className="footer-side2">
                <div className="footer-pages-links">
                  <h4>Commercials</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="commercial-spaces/co-works" title="F Coworks">
                        F Coworks
                      </Link>
                    </li>
                    <li>
                      <Link to="commercial-spaces/malls" title="F Malls">
                        F Malls
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="commercial-spaces/business-bay"
                        title="FTV Business Bay"
                      >
                        F Business Bay
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="commercial-spaces/outlet-malls"
                        title="F Outlet Malls"
                      >
                        F Outlet Malls
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-5 col-sm-6">
              <div className="footer-side2">
                <div className="footer-pages-links">
                  <h4>Hospitality</h4>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="hospitality/house" title="F House">
                        F House
                      </Link>
                    </li>
                    <li>
                      <Link to="hospitality/hotels" title="F Hotels">
                        F Hotels
                      </Link>
                    </li>
                    <li>
                      <Link to="hospitality/resorts" title="F Resorts">
                        F Resorts
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="footer-newsletter">
                <h3>
                  Stay <span>connected</span>
                </h3>
                <p>
                  Subscribe to the regular newsletter and updates from FTV Real
                  Estate
                </p>
                <form onSubmit={handleSubmit} className="" id="subscribtion">
                  <input
                    type="email"
                    className=""
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    autoComplete="off"
                  />
                  <button
                    aria-label="submit"
                    type="submit"
                    className=""
                    name="newsletter_submit"
                  >
                    <FaArrowRight />
                  </button>
                </form>
                {error.email && <p className="input-error">{error.email}</p>}
              </div>
              <div className="footer-social-links">
                <ul className="d-flex align-items-center list-unstyled">
                  <li>
                    <a
                      aria-label="link"
                      rel="noreferrer"
                      href="https://www.instagram.com/frealestatebyftv.in/"
                      target="_blank"
                      title="FTV Real Estate Instagram"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      aria-label="link"
                      rel="noreferrer"
                      href="https://www.facebook.com/frealestatebyftv"
                      target="_blank"
                      title="FTV Real Estate Facebook"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      aria-label="link"
                      href="https://www.youtube.com/channel/UCocBUhO0LsGUpzqfeosQWfw"
                      title="FTV Real Estate Youtube"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/FtvRealestate"
                      title="FTV Real Estate Twitter"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="link"
                    >
                      <FaXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/ftv-real-estate/"
                      title="FTV Real Estate LinkedIn"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="link"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 col-md-5 col-sm-12">
              <div className="links">
                <ul className="list-unstyled cont-flex">
                  <li>
                    <a
                      href="https://goo.gl/maps/wm66opcvRUNqa3P47"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="link"
                    >
                      <FaMapMarkerAlt /> The Capital, Level 7, G Block, Bandra
                      Kurla Complex, Bandra East, Mumbai, Maharashtra 400051
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-7 col-sm-12">
              <div className="links">
                <ul className="list-unstyled cont-flex">
                  <li>
                    <a
                      aria-label="link"
                      href="tel: +918655675630"
                      title="Call us to know more"
                    >
                      <FaPhoneAlt /> +91 8655675630
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:ftv.realestate@ftv.ind.in"
                      aria-label="link"
                      title="Email"
                    >
                      <FaRegEnvelope /> ftv.realestate@ftv.ind.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="copyright text-center">
                <p>
                  Copyright © 2024{" "}
                  <Link to="https://www.ftvlicenses.in/" target="_blank">
                    {" "}
                    FTV License{" "}
                  </Link>{" "}
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
