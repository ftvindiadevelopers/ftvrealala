// import React from "react";
// import MainSection from "../components/MainSection";
import AllImages from "../Images";

export default function Kk() {
  return (
    <>
      {/* <MainSection
        mainvideoDesk="https://frn.s3.ftvassets.in/media/videos/kashiff-khan/kk-Franchise-desktop.mp4"
        mainvideoMob="https://frn.s3.ftvassets.in/media/videos/kashiff-khan/kk-Franchise-mobile.mp4"
        poster={AllImages.kkBannerImg}
        mainHeading="Kashiff Khan"
      /> */}
      <section className="videos-section">
        <div className="videos">
          <video
            className="d-sm-block d-none"
            autoPlay
            muted
            loop={true}
            poster={AllImages.kkBannerImg}
            data-aos="zoom-out"
          >
            <source src="https://frn.s3.ftvassets.in/media/videos/kashiff-khan/kk-Franchise-desktop.mp4" type="video/mp4" />
          </video>
          <video
            className="d-sm-none d-block"
            autoPlay
            muted
            loop={true}
            poster={AllImages.kkBannerImg}
            data-aos="zoom-out"
          >
            <source src="https://frn.s3.ftvassets.in/media/videos/kashiff-khan/kk-Franchise-mobile.mp4" type="video/mp4" />
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
      <section className="kk_intro-section">
        <div className="kk_intro-brnd">
          <img src={AllImages.fdimondcrown2} alt="branding" data-aos="fade-up" loading="lazy"/>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center gap-4 gap-md-0">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="kk_intro-content">
                <h2 className="section-heading" data-aos="fade-up">Kashiff Khan</h2>
                <p data-aos="fade-up"><b>Managing Director of FashionTV </b></p>
                <p data-aos="fade-up">
                  Kashiff Khan, the Managing Director of the world's largest
                  fashion and lifestyle media brand, 'FashionTV, Asia Pacific,
                  is an iconic name in the world of Fashion and Brand Business
                  Development in India. Moreover, Mr Kashiff is also recognised
                  as an author, writer, and start-up specialist for businesses
                  all over the globe.
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-6 col-sm-12">
              <div className="kk_intr-img" data-aos="reveal-left">
                <img src={AllImages.kkworkImg} alt="Kashiff Khan Image" data-aos="zoom-out" loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="kk_intro-section">
        <div className="kk_intro-brnd2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 628.65 1066.64"
            data-aos="fade-up"
          >
            <title>f-stroke</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <g className="cls-f1">
                  <path
                    className="cls-f2"
                    d="M366,452.74H240.59v-75.4c0-107.35-12.16-312.49,100.94-342,17.07-4.37,41.56-4.37,58.63,4.37-6.82,37.66-25.76,85.56,23,107.09,77.42,33.62,121.71-64.49,41.57-123.48C430.6-2.4,363.8-2.95,322.23,6.34A255.57,255.57,0,0,0,248,37.48C116.78,120.27,120.17,321,120.17,455.32H1l-.18.16.74,33.33H118.87V874l2.23,156.27-119.5.54-.74,35H366v-21.31l.06-14.1H240.59V488.81H365.91Zm208.31-37.25A53.48,53.48,0,1,1,520.85,469,53.47,53.47,0,0,1,574.33,415.49Z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="container-fluid">
          <div className="row align-items-center kk_intro-row gap-4 gap-md-0">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="kk_intr-img" data-aos="reveal-left">
                <img src={AllImages.kkImg1} alt="Kashiff Khan Image" data-aos="zoom-out" loading="lazy"/>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-12">
              <div className="kk_intro-content">
                <h2 className="section-heading" data-aos="fade-up">Work Experience</h2>
                <p data-aos="fade-up">
                  Before venturing on his exciting journey of entrepreneurship,
                  Kashiff Khan gained experience working in an Indian MNC SFA,
                  where he started off as a mere sales executive and eventually
                  rose to become the Director On Board of the same company.
                </p>
                <p data-aos="fade-up">
                  He is now a knowledgeable titan in OTT and broadcast while
                  birthing new concepts for business ideas and development in
                  the wellness, beauty, fitness, print and channel broadcast
                  syndication and a master of communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="kk_philosophy-section">
        <div className="container-fluid">
          <div className="row gap-5 gap-md-0 justify-content-between">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="kk_philosophy-card">
                <h2 className="section-heading" data-aos="fade-up">Vision</h2>
                <p data-aos="fade-up">
                  To make FashionTV the leading business brand by outspreading
                  with an exceptional business module and expansion plans
                  globally.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="kk_philosophy-card">
                <h2 className="section-heading" data-aos="fade-up">Mission</h2>
                <p data-aos="fade-up">
                  Establish FashionTV as the global entity to refine lifestyles
                  through synergy, hard work and ingenuity.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="kk_philosophy-card">
                <h2 className="section-heading" data-aos="fade-up">Aim</h2>
                <p data-aos="fade-up">
                  To become a Business Mogul in the international market through
                  numerous business segments in various industry sectors in
                  partnership with our associates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="kkawards-section">
        <div className="kkawards-brnd">
          <img src={AllImages.fdimondcrown} alt="branding" data-aos="fade-up" loading="lazy"/>
        </div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-9 col-sm-12">
              <div className="kkawards-content ">
                <h2 className="section-heading" data-aos="fade-up">Awards & Achievements</h2>
                <p data-aos="fade-up" className="text-center">
                  From a workday salesperson to becoming the Managing Director
                  of FashionTV, a global fashion and lifestyle media brand,
                  Kashiff Khan has reached the top of the game. He is considered
                  an entrepreneurial trailblazer in the fashion and business
                  world by curating an unparalleled business model by setting up
                  numerous business verticals across the nation. Moreover, under
                  his leadership, he helped FashionTV India bag the Licensor of
                  the Year Award at the Star Retailer Awards 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="kk_intro-section">
      <div className="kk_intro-brnd3">
        <img src={AllImages.fdimondcrown} alt="branding" data-aos="fade-up" loading="lazy"/>
      </div>
        <div className="container-fluid">
          <div className="row align-items-center gap-4 gap-md-0">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="kk_intr-img" data-aos="reveal-left">
                <img src={AllImages.kkImg2} alt="Kashiff Khan Image" data-aos="zoom-out" loading="lazy"/>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-12">
              <div className="kk_intro-content">
                <h2 className="section-heading" data-aos="fade-up">Future</h2>
                <p data-aos="fade-up">
                  Kashiff Khan's curious and business savvy mind, unrivalled
                  leadership skills along with powerful drive to succeed have
                  always kept him on the lookout for the next big thing along
                  with some promising plans in the pipeline for the future of
                  FashionTV. He has now also turned into a Venture Capitalist,
                  partnering up with numerous start-ups aspiring to guide,
                  support and nurture them for mutual benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
