import AllImages from "../Images";
import { useEffect, useRef, useState } from "react";
import IntroSection from "../components/IntroSection";
import { useLocation } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


function Fashiontv() {
  const { hash } = useLocation();
  const michal = useRef(null);
  const kashiff = useRef(null);      
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  
  const sectionRefs = {
    michel: michal,
    kashiff: kashiff,
  };

  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            if (target === sectionRef1.current) {
              sectionRef1.current.classList.add("is-reveal");
              setTimeout(() => {
                setIsFlipped1(true);
              }, 1400);
            } else if (target === sectionRef2.current) {
              sectionRef2.current.classList.add("is-reveal");
              setTimeout(() => {
                setIsFlipped(true);
              }, 1400);
            }
          } else {
            const { target } = entry;
            if (target === sectionRef1.current) {
              sectionRef1.current.classList.remove("is-reveal");
              setIsFlipped1(false);
            } else if (target === sectionRef2.current) {
              sectionRef2.current.classList.remove("is-reveal");
              setIsFlipped(false);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef1.current);
    observer.observe(sectionRef2.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const id = hash?.substring(1);
    const targetRef = sectionRefs[id];
    
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <section className="videos-section">
        <div className="videos">
          <video
            className="d-sm-block d-none"
            autoPlay
            muted
            loop={true}
            poster={AllImages.ftvBanner}
            data-aos="zoom-out"
          >
            <source src={AllImages.luxuryDesktopVideo} type="video/mp4" />
          </video>
          <video
            className="d-sm-none d-block"
            autoPlay
            muted
            loop={true}
            poster={AllImages.ftvBanner}
            data-aos="zoom-out"
          >
            <source src={AllImages.luxuryMobVideo} type="video/mp4" />
          </video>
          <div className="videos-content">
            {/* <h1 className="split-text" data-aos="fade-up">
              FashionTV
            </h1> */}
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
      {/*  */}
      <IntroSection
        introPara="At FTV Real Estate, we go beyond mere buildings; we believe in fostering influential collaborations to help you craft truly exceptional spaces. With our licensing solutions for real estate brands for realtors in India you could bring FashionTV's global recognition and style to your real estate projects. Whether you're developing residential properties, commercial spaces, hospitality venues, or value-enhancing concepts like malls and outlets, we have the tools and expertise to elevate your projects to new heights. Our mission is to empower developers, offering B2B real estate licensing for developers in India, providing access to an extraordinary lifestyle that combines personal and business satisfaction. Join us in reshaping the luxury lifestyle industry, making every moment extraordinary."
        heading="FashionTV"
        subheading="About"
        btnsource="https://fashiontv.in/fashiontv"
        intro1={AllImages.abooutImg1}
        intro2={AllImages.abooutImg2}
        showButton={false}
        externalBtn={false}
        readmoreText="Management"
      />
      {/*  */}
      <section className="philosophy-section">
        <div className="container">
          <div className="row align-items-center gap-5 gap-md-0">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Swiper
                spaceBetween={0}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={1000}
                allowTouchMove={false}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="philosophy-img">
                    <img
                      data-aos="fade-up"
                      loading="lazy"
                      src={AllImages.vision}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="philosophy-img">
                    <img
                      loading="lazy"
                      data-aos="fade-up"
                      src={AllImages.Mission}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="philosophy-img">
                    <img
                      loading="lazy"
                      data-aos="fade-up"
                      src={AllImages.Aim}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="offset-xl-1 col-xl-4 offset-lg-1 col-lg-5 col-md-6 col-sm-12">
              <div className="philosophy-heading">
                <h2 className="section-heading py-4" data-aos="fade-up">
                  Philosophy
                </h2>
              </div>
              <div className="swiper-brdr">
                <Swiper
                  spaceBetween={0}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  allowTouchMove={false}
                  loop={true}
                  speed={1000}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="philosophy-content">
                      <h3>Vision</h3>
                      <p>
                        To become the preferred partner for developers seeking
                        to elevate their real estate projects, setting new
                        industry standards for quality, aesthetics, and customer
                        satisfaction.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="philosophy-content">
                      <h3>Mission</h3>
                      <p>
                        To redefine luxury living by infusing FashionTVs global
                        recognition and style into real estate developments,
                        creating exceptional experiences for discerning
                        individuals and businesses.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="philosophy-content">
                      <h3>Aim</h3>
                      <p>
                        To empower developers with FTV Licensing, enabling them
                        to craft spaces that transcend the ordinary, enhance
                        lifestyles, and establish a strong presence in the
                        luxury real estate market.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="statics-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="statics-heading text-center">
                <h2 className="section-heading split-text" data-aos="fade-up">
                  Statistics
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="statics-grid">
              <div className="statistic-card" data-aos="fade-up">
                <h2 data-counter="200000000">2B+</h2>
                <p>Viewers</p>
              </div>
              <div className="statistic-card" data-aos="fade-up">
                <h2 data-counter="6500000">65M</h2>
                <p>
                  Million View on <br /> Youtube
                </p>
              </div>
              <div className="statistic-card" data-aos="fade-up">
                <h2 data-counter="12">12</h2>
                <p>
                  Thematic Channels <br /> Worldwide
                </p>
              </div>
              <div className="statistic-card" data-aos="fade-up">
                <h2 data-counter="50000000">500M</h2>
                <p>HouseHold</p>
              </div>
              <div className="statistic-card" data-aos="fade-up">
                <h2 data-counter="196">196</h2>
                <p>Countries</p>
              </div>
              <div className="statistic-card" data-aos="fade-up">
                <h2 data-counter="1200000">12M</h2>
                <p>Views per week</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <div className="meetboard">
        <h2 className="section-heading" data-aos="fade-up">
          Meet Our Board
        </h2>
        <section ref={michal} className="intro-section ma-section" id="michel">

          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
              <div className={`flip-card ${isFlipped1 ? "flipped" : ""}`}>
                  <div className="flip-card-inner">
                    <div ref={sectionRef1} className="flip-card-front intro-images">
                      <img
                        loading="lazy"
                        src={AllImages.maImg1}
                        alt=""
                        className="intro-img1"
                      />
                    </div>
                    <div className="flip-card-back">
                    <video
                        autoPlay
                        muted
                        loop
                        src={AllImages.michalvideo}
                        poster={AllImages.maImg1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 offset-md-1 col-md-6 col-sm-12">
                <div className="intro-content">
                  <h2 data-aos="fade-up" className="section-heading">
                    Michel Adam
                  </h2>
                  <p data-aos="fade-up">
                    Michel Adam Lisowski is the founder and chairman of
                    FashionTV. He founded FashionTV to create a global fashion
                    platform that focuses on fashion, luxury, and beauty. He is
                    known as the ‘FASHION MAESTRO’ for his remarkable
                    contribution to the fashion, luxury, and lifestyle
                    industries across the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="intro-section kk-section" ref={kashiff} id="kashiff">
          <div className="kk-section-brnd">
            <img src={AllImages.bgDiaBottom} alt="branding" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="intro-content">
                  <h2 data-aos="fade-up" className="section-heading">
                    Kashiff Khan
                  </h2>
                  <p data-aos="fade-up">
                    Kashiff Khan, the Managing Director of the worlds largest
                    fashion and lifestyle media brand, FashionTV,
                    is an iconic name in the world of fashion and brand business
                    development in India. Moreover, Mr. Kashiff is also
                    recognized as an author, writer, and start-up specialist for
                    businesses all over the globe.
                  </p>

                  <div className="text-start">
                    <a
                      data-aos="fade-up"
                      aria-label="link"
                      rel="noreferrer"
                      href="https://kashiffkhan.com/"
                      target="_blank"
                      className="theme-btn"
                    >
                      Know more{" "}
                      <img
                        className="arrow-icon"
                        src={AllImages.uprightarrow}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="offset-xl-1 col-xl-5 offset-lg-1 col-lg-5 offset-md-1 col-md-5 col-sm-12"
              >
                <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                  <div className="flip-card-inner">
                    <div ref={sectionRef2} className="flip-card-front intro-images">
                      <img
                        loading="lazy"
                        src={AllImages.kkImg1}
                        alt=""
                        className="intro-img1"
                      />
                    </div>
                    <div className="flip-card-back">
                      <video
                        autoPlay
                        muted
                        loop
                        src={AllImages.kkvideos}
                        poster={AllImages.kkImg1}
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*  */}
    </>
  );
}

export default Fashiontv;
