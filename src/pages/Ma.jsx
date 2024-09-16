import AllImages from "../Images";
// import MainSection from "../components/MainSection";

export default function Ma() {
  return (
    <>

        {/* <MainSection
          mainvideoDesk="https://frn.s3.ftvassets.in/media/videos/michel-adam/Michel-adam-desktop.mp4"
          mainvideoMob="https://frn.s3.ftvassets.in/media/videos/michel-adam/Michel-adam1-square.mp4"
          poster={AllImages.maBannerImg}
          mainHeading="Michel Adam"
        /> */}
        <section className="videos-section">
        <div className="videos">
          <video
            className="d-sm-block d-none"
            autoPlay
            muted
            loop={true}
            poster={AllImages.maBannerImg}
            data-aos="zoom-out"
          >
            <source src="https://frn.s3.ftvassets.in/media/videos/michel-adam/Michel-adam-desktop.mp4" type="video/mp4" />
          </video>
          <video
            className="d-sm-none d-block"
            autoPlay
            muted
            loop={true}
            poster={AllImages.maBannerImg}
            data-aos="zoom-out"
          >
            <source src="https://frn.s3.ftvassets.in/media/videos/michel-adam/Michel-adam1-square.mp4" type="video/mp4" />
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
            <img
              src={AllImages.fdimondcrown2}
              alt="branding"
              data-aos="fade-up"
              loading="lazy"
            />
          </div>
          <div className="container-fluid">
            <div className="row align-items-center gap-4 gap-md-0">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="kk_intro-content">
                  <h2 className="section-heading" data-aos="fade-up">
                    Michel Adam
                  </h2>
                  <p data-aos="fade-up">
                    <b>Chairman & Founder of FashionTV</b>
                  </p>
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
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="kk_intr-img" data-aos="reveal-left">
                  <img
                    src={AllImages.maIntro}
                    alt="Michel Adam Image"
                    data-aos="zoom-out"
                    loading="lazy"
                  />
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
                  <img
                    src={AllImages.maImg}
                    alt="Michel Adam Image"
                    data-aos="zoom-out"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-12">
                <div className="kk_intro-content">
                  <h2 className="section-heading" data-aos="fade-up">
                    Work Experience
                  </h2>
                  <p data-aos="fade-up">
                    He started a textile business in Thailand called "Eden
                    Group". In 1997, he established FashionTV, an international
                    fashion and lifestyle broadcasting television channel in
                    France. Currently, he is the Chairman of FashionTV along
                    with being a brilliant entrepreneur running and supporting
                    several businesses in various fields across the globe.
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
                  <h2 className="section-heading" data-aos="fade-up">
                    Vision
                  </h2>
                  <p data-aos="fade-up">
                    To seek ventures that auxiliary our love for fashion, and
                    make his mark in India, one of the world’s second-largest
                    consumer markets.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="kk_philosophy-card">
                  <h2 className="section-heading" data-aos="fade-up">
                    Mission
                  </h2>
                  <p data-aos="fade-up">
                    We look forward to making FashionTV a household name by
                    providing the masses with nothing but the best in
                    association with our partners.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="kk_philosophy-card">
                  <h2 className="section-heading" data-aos="fade-up">
                    Aim
                  </h2>
                  <p data-aos="fade-up">
                    We aim to become the leading brand in the Indian market not
                    only in the fashion industry but in numerous business
                    sectors recognised for its synergy, brilliance and
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="kkawards-section maawards-section">
          <div className="kkawards-brnd">
            <img
              src={AllImages.fdimondcrown}
              alt="branding"
              data-aos="fade-up"
              loading="lazy"
            />
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-9 col-sm-12">
                <div className="kkawards-content text-center">
                  <h2 className="section-heading" data-aos="fade-up">
                    Awards & Achievements
                  </h2>
                  <p data-aos="fade-up" className="text-center">
                    A precocious student initially granted a scholarship for
                    Mathematics at Princeton University turned out to be a
                    brilliant businessman, recognised globally for his
                    phenomenal media creation, FashionTV. Along with this
                    exclusive channel, he also went on to invest in successful
                    real estate projects such as love-f-cafe in several cities
                    of Europe along with numerous nightclubs and restaurants,
                    making them one of the most popular spots for meetings and
                    events in the fashion community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="kk_intro-section">
          <div className="kk_intro-brnd3">
            <img
              src={AllImages.fdimondcrown}
              alt="branding"
              data-aos="fade-up"
              loading="lazy"
            />
          </div>
          <div className="container-fluid">
            <div className="row align-items-center gap-4 gap-md-0">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="kk_intr-img" data-aos="reveal-left">
                  <img
                    src={AllImages.ma3}
                    alt="Michel Adam Image"
                    data-aos="zoom-out"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-12">
                <div className="kk_intro-content">
                  <h2 className="section-heading" data-aos="fade-up">
                    Future
                  </h2>
                  <p data-aos="fade-up">
                    With FashionTV, Michel Adam Lisowski is committed to
                    building partnerships that propel affiliates towards
                    success. Michel Adam Lisowski's entrepreneurial mindset
                    makes him think beyond, and he is always interested in
                    taking fashion and the brand to greater heights. He is
                    keenly aware of the potential and reach of FTV in India and
                    therefore, the brand is introducing various LUXURIOUS FTV
                    Businesses in the world’s second most populated country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
}
