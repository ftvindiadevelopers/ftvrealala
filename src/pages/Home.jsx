import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import AllImages from "../Images";
import Cta from "../components/Cta";
import { useInView } from "react-intersection-observer";
import IntroSection from "../components/IntroSection";
import { Helmet } from "react-helmet";
import PopUp from "../components/PopUp";
import { gsap, CSSPlugin } from "gsap";
import { Link } from "react-router-dom";

gsap.registerPlugin(CSSPlugin);
SwiperCore.use([Autoplay, Navigation]);

const updateCounters = (counters) => {
  return counters.map((counter) => {
    const increment = Math.ceil(counter.finalValue / 100);
    const newValue = counter.value + increment;
    return {
      ...counter,
      value: newValue > counter.finalValue ? counter.finalValue : newValue,
    };
  });
};

const resetCounters = (counters) => {
  return counters.map((counter) => ({
    ...counter,
    value: 0,
  }));
};

const cityData = [
  { name: "Pune", image: "../media/images/cphome/pune.jpg" },
  { name: "Ludhiana", image: "../media/images/luxury.png" },
  { name: "Delhi", image: "../media/images/cphome/delhi.jpg" },
  { name: "Chennai", image: "../media/images/cphome/cha.jpg" },
  { name: "Noida", image: "../media/images/cphome/noida.jpg" },
  { name: "Kolkata", image: "../media/images/cphome/kolkata.jpg" },
  { name: "Bangalore", image: "../media/images/cphome/bangalore.webp" },
  { name: "Ahmedabad", image: "../media/images/cphome/ahmedabad.jpg" },
  { name: "Coimbatore", image: "../media/images/cphome/coimbatore.webp" },
  { name: "Jaipur", image: "../media/images/cphome/jaipur.jpg" },
  { name: "Surat", image: "../media/images/cphome/surat.jpg" },
  { name: "Hydrabad", image: "../media/images/cphome/hydrabad.jpeg" },
  { name: "Visakhapatnam", image: "../media/images/cphome/visakhapatnam.jpg" },
  { name: "Indore", image: "../media/images/cphome/indor.jpg" },
  { name: "Chandigarh", image: "../media/images/cphome/chandigarh.webp" },
];

const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [cityName, setCityName] = useState(cityData[0].name);
  const [currentIndex, setCurrentIndex] = useState(0);

  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    preloadImages(cityData.map((city) => city.image));

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cityData.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCityName(cityData[currentIndex].name);
  }, [currentIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const [showbranding, setBranding] = useState(false);

  const [counters, setCounters] = useState([
    { label: "Total No. of Projects", value: 0, finalValue: 15 },
    { label: "Valuation", value: 0, finalValue: 500 },
    { label: "Total Units", value: 0, finalValue: 2000 },
    { label: "Total SqFt Designed", value: 0, finalValue: 10 },
  ]);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const slideOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: { clickable: true },
    autoHeight: true,
    onSlideChange: (swiper) => {
      if (swiper === swiper1 && swiper2) {
        swiper2.slideTo(swiper1.activeIndex);
      } else if (swiper === swiper2 && swiper1) {
        swiper1.slideTo(swiper2.activeIndex);
      }
    },
  };

  const sectionRef = React.useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        sectionRef.current.classList.add("is-reveal");
      } else {
        sectionRef.current.classList.remove("is-reveal");
      }
    });

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval;

    if (inView) {
      interval = setInterval(() => {
        setCounters((prevCounters) => updateCounters(prevCounters));
      }, 50);
    } else {
      setCounters((prevCounters) => resetCounters(prevCounters));
    }

    return () => clearInterval(interval);
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setBranding(true);
    }, 4000);
  }, []);

  return (
    <main className="homeMain">
      <div className="homepage active fade-in">
        <Helmet>
          <title>Real Estate Brand Licensing in India | FTV Real Estate</title>
          <meta
            name="description"
            content="Elevate your properties brand with World-class Luxurious real estate network with our Real Estate Brand Licensing Opportunities in India."
          />
          <meta
            name="keywords"
            content="Licensing Solutions for Luxury Real Estate Brands in India,
                    Real Estate Brand Partnership in India,
                    Luxury Real Estate Licensee Marketing in India,
                    Licensing Your Real Estate Brand in India"
          />
        </Helmet>
        <PopUp />

        {showModal && (
          <div
            data-lenis-prevent
            className="modal website-modal"
            id="enquiryModal"
            tabIndex="-1"
            aria-labelledby="enquiryModalLabel"
            aria-hidden="true"
            onClick={handleClickOutside}
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="media-content"
                        style={{
                          backgroundImage: `url(${cityData[currentIndex].image})`,
                          transition: "background-image 1s ease-in-out",
                        }}
                      ></div>
                    </div>
                    <div className="col-lg-12 py-4">
                      <div className="text-content row align-items-center">
                        <div className="text-center">
                          <img
                            src={AllImages.DarkLogo}
                            alt="ftv real Estate logo"
                            className="pop-logo"
                          />
                        </div>
                        <div className="title text-center">
                          <h2>
                            We are looking for Real Estate Partners in
                            <span>{cityName}.</span>
                          </h2>
                          <Link to={"/contact-us"}>Contact US</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="home-page-real">
          <video
            preload="auto"
            loop
            autoPlay
            muted
            poster={AllImages.homeBanner}
            className="absolute top-0 left-0 h-full w-full"
          >
            <source
              src={AllImages.ftvVideo}
              media="(min-width: 981px)"
              type="video/mp4"
            />
            <source
              src={AllImages.ftvVideoMob}
              media="(max-width: 980px)"
              type="video/mp4"
            />
          </video>

          {showbranding && (
            <div className="brands-center-video">
              <div className="brands-video_branding">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 628.65 1066.64"
                  data-aos="fade-down"
                >
                  <title>f-stroke</title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g className="cls-1">
                        <path
                          className="cls-2"
                          d="M366,452.74H240.59v-75.4c0-107.35-12.16-312.49,100.94-342,17.07-4.37,41.56-4.37,58.63,4.37-6.82,37.66-25.76,85.56,23,107.09,77.42,33.62,121.71-64.49,41.57-123.48C430.6-2.4,363.8-2.95,322.23,6.34A255.57,255.57,0,0,0,248,37.48C116.78,120.27,120.17,321,120.17,455.32H1l-.18.16.74,33.33H118.87V874l2.23,156.27-119.5.54-.74,35H366v-21.31l.06-14.1H240.59V488.81H365.91Zm208.31-37.25A53.48,53.48,0,1,1,520.85,469,53.47,53.47,0,0,1,574.33,415.49Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          )}
        </div>
        {/*  */}
        <section className="etra-div">
          <div className="container-fluid">
            <div className="row m-0 justify-content-center">
              <div className="col-lg-8 col-md-10 col-sm-12">
                <div className="etra-div_content">
                  <p>
                    FashionTV, the world's largest fashion and lifestyle media
                    brand, has led the industry in luxury, fashion, and
                    lifestyle for the past 27 years. By diversifying into real
                    estate, hospitality, wellness, and events through brand
                    licensing and franchising, FashionTV offers a unique
                    business proposition for ambitious entrepreneurs. With its
                    global platform and international business recognition,
                    FashionTV epitomizes excellence and represents a vision of
                    luxury and lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="new-div-intro fordia">
          <IntroSection
            introPara={
              "FashionTV presents F Real Estate Brand Licensing that is an entire brand vision in the luxury real estate spectrum, comprising different kinds of real estate licensing verticals, ranging from residential to commercial, including hospitality. Exploring new vistas in luxury real estate, FashionTV has extended its brand perspective into real estate developments having introduced a unique concept in the history of real estate. "
            }
            heading="FashionTV Real Estate Brand Licensing"
            subheading="Welcome to"
            showButton={true}
            readmoreText="Know More"
            btnsource="https://frn.s3.ftvassets.in/saleskits/license/real-estate/ftv-realestate-master.pdf"
            intro1={AllImages.intro1}
            intro2={AllImages.intro2}
          />
          {/*  */}
          <div className="fordia-brndabs">
            <img src={AllImages.bgDiaBottom} alt="" />
          </div>
          <section className="features-section">
            <div className="container-fluids">
              <div className="row align-items-center m-0 gap-5 gap-md-0">
                <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                  <div className="features-images">
                    <Swiper
                      ref={sectionRef}
                      {...slideOptions}
                      onSwiper={setSwiper1}
                      className="featureSwiper"
                    >
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features1}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features2}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features3}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features4}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features7}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features6}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          loading="lazy"
                          src={AllImages.features5}
                          alt="Your Image"
                          className="main-img-feature"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12">
                  <div className="features-heading pb-2">
                    <h2 data-aos="fade-up" className="section-heading">
                      Features
                    </h2>
                  </div>
                  <div className="features-content">
                    <Swiper
                      {...slideOptions}
                      onSwiper={setSwiper2}
                      className="featuremySwiper"
                    >
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">
                            Brand Ethos Of Luxury & Lifestyle
                          </h4>
                          <p data-aos="fade-up">
                          F Real Estate Brand Licensing presents a once-in-a-lifetime opportunity to reflect a global brand ethos of luxury, lifestyle & opulence into the aesthetics of real estate developments. Design and develop premium real estate projects with a brand finesse, with the most state-of-the-art branded amenities and exquisite interiors.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">
                            World-Class Standards In Real Estate Aesthetics{" "}
                          </h4>
                          <p data-aos="fade-up">
                            FashionTV real estate brand licensing is all about
                            synergising the realm of real estate development
                            with world-class standards in their designs,
                            architecture and interiors. Impart an avant-garde
                            demeanour to your real estate projects with the
                            expert vision of FashionTV, world’s leading fashion
                            & lifestyle media.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">Absolute Brand Support</h4>
                          <p data-aos="fade-up">
                            Get an absolute business support from FashionTV,
                            right from the designing support, imparting the
                            brand element, selection of strategic locations and
                            marketing master plans. F Real Estate Brand
                            Licensing ensures that your premium real estate
                            project gets remarkable recognition along with
                            enhancing its saleability.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">Assured Brand Loyalty </h4>
                          <p data-aos="fade-up">
                            FashionTV ensures an unshakeable customer brand
                            loyalty due to its worldwide reputation for the
                            finest of standards in luxury, lifestyle and
                            opulence. The FashionTV brand name and the
                            diamond-shaped F LOGO is synonymous with the
                            ultimate in business excellence, brand finesse,
                            quality and aesthetics.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">Designing Assistance </h4>
                          <p data-aos="fade-up">
                          The FashionTV interior designing team is always there to provide mandatory designing assistance which provides required brand aesthetics and diamond-inspired architectural theme to create a unique luxury branded proposition for your real estate project. Our focus is on emphasising and accentuating the brand quality of luxury & lifestyle, blending it seamlessly with utility & functionality in your architectural blueprints.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">
                            Extensive Digital Marketing
                          </h4>
                          <p data-aos="fade-up">
                            F Real Estate Brand Licensing encompasses an
                            extensive digital media marketing through all the
                            social media platforms - Facebook, Linkedin,
                            Twitter, Instagram and YouTube. We assertively
                            update all the FashionTV hallmarked real estate
                            projects across an extensive business network to
                            leverage the real estate development towards
                            commercial acclaim.
                          </p>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="features-slider">
                          <h4 data-aos="fade-up">
                          Personalised Webpage Development & Project Integration
                          </h4>
                          <p data-aos="fade-up">
                          FashionTV provides a personalised webpage development and project integration, creating a landing page for your real estate project connecting it with our centralised website. All the queries regarding the real estate project on our main website will be directed to your customised web page, ensuring a strategic online promotion for your real estate development
                          </p>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="section-clients">
          <div className="section-clients-content-wrapper">
            <div className="section-clients-title-desc-wrapper">
              <div className="heading-wrapper margin-40">
                <h2 className="large-heading text-white text-center">Deliverables</h2>
              </div>

              <div className="dlivery-grid">
                <div className="deliverables-card">
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src={AllImages.BrandLogo}
                    alt="Brand logo usage"
                  />
                  <p data-aos="fade-up">Brand logo usage</p>
                </div>
                <div className="deliverables-card">
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src={AllImages.designingAssitance}
                    alt="Designing Assistance"
                  />
                  <p data-aos="fade-up">Designing Assistance</p>
                </div>
                <div className="deliverables-card">
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src={AllImages.communitySupport}
                    alt="Community support"
                  />
                  <p data-aos="fade-up">Community support</p>
                </div>
                <div className="deliverables-card">
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src={AllImages.digitalMarketing}
                    alt=" 360° Marketing Support "
                  />
                  <p data-aos="fade-up">
                    360° Marketing Support 
                  </p>
                </div>
                <div className="deliverables-card">
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src={AllImages.PerIntegration}
                    alt=" Personalized website D2C Web Integration"
                  />
                  <p data-aos="fade-up">
                    Personalized website <br /> D2C Web Integration
                  </p>
                </div>
                <div className="deliverables-card">
                  <img
                    data-aos="fade-up"
                    loading="lazy"
                    src={AllImages.fConnect}
                    alt="F - Connect"
                  />
                  <p data-aos="fade-up">F - Connect</p>
                </div>
              </div>
            </div>
          </div>

          <div className="image-overlay"></div>

          <div className="brands-center-video">
            <div className="brands-video_branding">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 628.65 1066.64"
                data-aos="fade-down"
              >
                <title>f-stroke</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g className="cls-1">
                      <path
                        className="cls-2"
                        d="M366,452.74H240.59v-75.4c0-107.35-12.16-312.49,100.94-342,17.07-4.37,41.56-4.37,58.63,4.37-6.82,37.66-25.76,85.56,23,107.09,77.42,33.62,121.71-64.49,41.57-123.48C430.6-2.4,363.8-2.95,322.23,6.34A255.57,255.57,0,0,0,248,37.48C116.78,120.27,120.17,321,120.17,455.32H1l-.18.16.74,33.33H118.87V874l2.23,156.27-119.5.54-.74,35H366v-21.31l.06-14.1H240.59V488.81H365.91Zm208.31-37.25A53.48,53.48,0,1,1,520.85,469,53.47,53.47,0,0,1,574.33,415.49Z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </section>

        <section className="main-detli-grid">
          <section className="new-counter-section">
            <div className="newcounter-newbrnd">
              <img src={AllImages.fdimondcr} alt="" />
            </div>
            <div className="container-fluids">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <h2 data-aos="fade-up" className="section-heading">
                    Significant Endeavours
                  </h2>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12">
                  <p data-aos="fade-up">
                  FashionTV has a remarkable legacy of brand licensing in the luxury real estate market segment, with numerous avant-garde residential real estate projects, commercial spaces, luxury villas, premium hotels and resorts developed in collaboration with experienced & leading developers. We diligently strive to uphold the brand integrity of FashionTV and take the legacy forward, ensuring several more ground-breaking real estate developments in the future.

                  </p>
                </div>

                <div className="col-lg-12" ref={ref}>
                  <div className="highlights-numbers-wrapper">
                    {counters.map((counter, index) => (
                      <React.Fragment key={index}>
                        <div className="number-fiv div-number">
                          <h2>
                            {counter.value.toLocaleString()}
                            {index == 1 && <span>M</span>}
                            {index == 3 && <span>M</span>}

                            <span>+</span>
                          </h2>
                          <p>{counter.label}</p>
                        </div>
                        {index !== counters.length - 1 && (
                          <div className="div-vertical-divider"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="future-section">
            <div className="container-fluid">
              <div className="row m-0 justify-content-center align-items-center gap-5 gap-md-0">
                <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12">
                  <div className="future-image">
                    <div className="future-img">
                      <video
                        loading="lazy"
                        autoPlay
                        loop
                        muted
                        src={AllImages.homepageSVideo}
                        poster={AllImages.beThePartImg}
                      ></video>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 offset-xl-1  col-lg-6 col-md-12 col-sm-12">
                  <div className="future-content">
                    <p data-aos="fade-up">Invent</p>
                    <h2 className="section-heading" data-aos="fade-up">
                      The Future
                    </h2>
                    <p data-aos="fade-up">
                      The luxury real estate industry is becoming increasingly
                      intense and competitive. With a surge in demand for luxury
                      living and dynamic lifestyles, there is a strong desire to
                      align with elegance & grandeur. FashionTV, a symbol of
                      luxury since 1997, is poised to be your ideal partner in
                      navigating the future of the luxury real estate industry.
                    </p>
                    <p data-aos="fade-up">
                      <br></br>
                      Collaborating with us in this brand partnership will
                      position you for financial and commercial success as these
                      projects gain the ultimate business recognition under the
                      FashionTV brand name. If you aspire to be a leading force
                      in real estate and embark on this revolutionising concept,
                      we can streamline your journey and strategise your real
                      estate sojourn with our brand ethos of luxury & lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Cta />
      </div>
    </main>
  );
}
