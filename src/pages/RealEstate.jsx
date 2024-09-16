// import MainSection from "../components/MainSection";
import AllImages from "../Images";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FiDownload } from "react-icons/fi";
function RealEstate() {
  return (
    <div className="realestate"> 
      <div className="home-page-real">
        <video
          preload="auto"
          loop
          autoPlay
          muted
          poster={AllImages.realesateBanner}
          className="absolute top-0 left-0 h-full w-full"
        >
          <source
            src="https://ftvassets.in/frn.s3/media/realestate_website/video-gallery/Real-Estate-Video-Book.mp4"
            media="(min-width: 981px)"
            type="video/mp4"
          />
          <source
            src="https://ftvassets.in/frn.s3/media/realestate_website/video-gallery/Real-Estate-Video-Book-Mobile.mp4"
            media="(max-width: 980px)"
            type="video/mp4"
          />
        </video>

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
      </div>
      {/*  */}
      <div className="main-img-realestate">
        <section className="realIntro-section">
          <div className="container-fluid">
            <div className="row align-items-center gap-5 gap-md-0">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="realIntro-image" data-aos="fade-up">
                  <img loading="lazy" src={AllImages.realIntro} alt="Image" />
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-12">
                <div className="realIntro-content">
                  <div className="realIntro-heading">
                    <p>FashionTV</p>
                    <h2 data-aos="fade-up" className="section-heading">
                      Real Estate
                    </h2>
                  </div>
                  <p data-aos="fade-up">
                    At FTV Real Estate, we are more than just a brand; we embody
                    a commitment to excellence and enhancing lifestyles. Our
                    mission is to empower you in crafting spaces where opulence
                    seamlessly integrates with practicality, enabling you to
                    cultivate tranquility, nurture growth, and infuse every
                    aspect of your life with a touch of grandeur. With us, you
                    take the lead in creating the most lavish spaces and setting
                    standards that resonate on a global scale.
                  </p>
                  <p data-aos="fade-up">
                    For forward-thinking real estate developers in India, we
                    offer an innovative partnership through our brand licensing.
                    We provide you with the visionary means to unlock an
                    extraordinary realm of luxury and grace within your
                    projects, aligning perfectly with the best practices in real
                    estate licensing for developers in India and ensuring a high
                    licensing ROI for real estate developers across the nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="brand-download-section">
          <div className="container-fluid">
            <div className="row align-items-center m-0 gap-4 gap-md-0 ">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="brand-download-text">
                  <img src={AllImages.licenseOpp} alt="" />
                </div>
              </div>
              <div className="offset-lg-1 col-lg-5 col-md-6 col-sm-12 px-3">
                <div className="brand-download-content">
                  <h2 data-aos="fade-up" className="section-heading">
                    License Opportunity
                  </h2>
                  <p data-aos="fade-up">
                    F Real Estate Brand Licensing provides an extensive global
                    platform for the development of luxury real estate projects
                    in a brand synergy with the world's largest fashion &
                    lifestyle media brand, FashionTV. Evolve to the top-notch
                    niche in the premium real estate market segment with a
                    global brand identity that's synonymous with luxury,
                    lifestyle and grandeur.
                  </p>
                  <div className="brand-download-card" data-aos="fade-up">
                  <a
                      aria-label="link"
                      href="https://frn.s3.ftvassets.in/saleskits/license/real-estate/ftv-realestate-master.pdf"
                      download  
                      title="FTV Real Estate Sales kit"
                    > 
                      Sales Kit <FiDownload />
                    </a>
                  </div>
                  <div className="brand-download-card" data-aos="fade-up">
                  <a
                      aria-label="link"
                      href="https://frn.s3.ftvassets.in/look-book/license/real-estate/ftv-realestate-look-book.pdf"
                      download  
                      title="FTV Real Estate Look book kit"
                    > 
                     Look Book <FiDownload />
                    </a>
                  </div>
                  <div className="brand-download-card" data-aos="fade-up">
                  <a
                      aria-label="link"
                      href="https://frn.s3.ftvassets.in/video-book/license/real-estate/ftv-realstate-video-book.mp4"
                      download  
                      title="FTV Real Estate Video Book"
                    > 
                     Video Book <FiDownload />
                    </a>
                  </div>
                  <div className="brand-download-card" data-aos="fade-up">                  
                    <a
                      aria-label="link"
                      href="https://ftvassets.in/realestate/11-Products-Video-Final.mp4"
                      download  
                      title="FTV Real Estate Service Menu"
                    >
                      {/* Our Real Estate Licenses <FiDownload /> */}
                      License Opportunities <FiDownload />
                    </a>
                  </div>
                  <div className="brand-download-card" data-aos="fade-up">
                    <a
                      aria-label="link"
                      href="https://frn.s3.ftvassets.in/saleskits/license/real-estate/ftv-realestate-ratecard.pdf" 
                      download
                      title="FTV Real Estate Rate Card"
                    >
                      Rate Card <FiDownload />
                    </a>
                  </div>
                  <div className="brand-download-card" data-aos="fade-up">
                    <Link
                      aria-label="link"
                      to="/faq"
                      title="FTV Real Estate Faqs"
                    >
                      Faq's <img src={AllImages.uprightarrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <section className="vertical-section">
          <div className="container-fluid p-0">
            <div className="row m-0">
              <div className="offset-lg-1 col-lg-11 col-md-11 col-sm-12 p-0">
                <div className="vertical-tabs">
                  <div className="d-flex vertical-flex">
                    <div
                      className="nav flex-column nav-pills me-3 vertical-pillsnav"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link active"
                        id="v-pills-residences-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-residences"
                        type="button"
                        aria-label="tablist"
                        role="tab"
                        aria-controls="v-pills-residences"
                        aria-selected="true"
                      >
                        Residences
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-commercial-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-commercial"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-commercial"
                        aria-selected="false"
                        aria-label="tablist"
                      >
                        Commercial Spaces
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-hospitality-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-hospitality"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-hospitality"
                        aria-selected="false"
                        aria-label="tablist"
                      >
                        Hospitality
                      </button>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-residences"
                        role="tabpanel"
                        aria-labelledby="v-pills-residences-tab"
                      >
                        <Swiper
                          spaceBetween={30}
                          navigation={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Navigation, Autoplay]}
                          speed={1000}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Residences By FTV</h2>
                                <p>
                                  F Residences By FTV epitomize the fusion of luxury
                                  and urban living, presenting the zenith of
                                  cosmopolitan elegance and convenience,
                                  redefining contemporary city life.
                                </p>
                                <div className="">
                                  <Link
                                    to="/residences/residences"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  data-aos="fade-up"
                                  loading="lazy"
                                  src={AllImages.categoriesImg8}
                                  alt="FTV Residences"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Villas By FTV</h2>
                                <p>
                                  F Villas By FTV, an oasis of opulence and
                                  luxury, redefine the art of countryside
                                  living with unparalleled serenity,
                                  sophistication, and grandeur.
                                </p>
                                <div className="">
                                  <Link
                                    to="/residences/villas"
                                    className="theme-btn"
                                  >
                                    Know More
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg10}
                                  alt="FTV Villas"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Furnished Apartments By FTV</h2>
                                <p>
                                  F Furnished Apartments By FTV, where convenience
                                  and elegance seamlessly unite to offer
                                  discerning urban dwellers a sanctuary of
                                  sophistication, comfort, and refined urban
                                  living.
                                </p>
                                <div className="">
                                  <Link
                                    to="/residences/furnished-apartments"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg3}
                                  alt="FTV Furnished Apartments"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-commercial"
                        role="tabpanel"
                        aria-labelledby="v-pills-commercial-tab"
                      >
                        <Swiper
                          spaceBetween={30}
                          navigation={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          modules={[Navigation, Autoplay]}
                          speed={1000}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Business Bay By FTV</h2>
                                <p>
                                  F Business Bay By FTV is where corporate excellence
                                  meets contemporary design. Elevate your
                                  commercial spaces with cutting-edge office
                                  facilities, setting new standards for business
                                  environments and productivity.
                                </p>
                                <div className="">
                                  <Link
                                    to="/commercial-spaces/business-bay"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg1}
                                  alt="FTV Business Bay"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Co-Works By FTV</h2>
                                <p>
                                  F Co-Works By FTV offers an innovative and
                                  collaborative workspace solution that
                                  redefines the way professionals work. Elevate
                                  your commercial real estate project with
                                  flexible and modern co-working spaces designed
                                  for success.
                                </p>
                                <div className="">
                                  <Link
                                    to="/commercial-spaces/co-works"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg2}
                                  alt="FTV Co-Works"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Malls By FTV</h2>
                                <p>  
                                  F Malls By FTV are more than shopping destinations;
                                  they are cultural and fashion hubs that
                                  breathe life into your commercial real estate
                                  project. Partner with us to create vibrant and
                                  dynamic mall experiences that captivate
                                  visitors.
                                </p>
                                <div className="">
                                  <Link
                                    to="/commercial-spaces/malls"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg6}
                                  alt="FTV Malls"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Outlet Malls By FTV</h2>
                                <p>
                                  F Outlet Malls By FTV offer a unique
                                  shopping experience that blends luxury and
                                  affordability. Partner with us to create
                                  outlet destinations that attract discerning
                                  shoppers seeking premium brands at unmatched
                                  prices.
                                </p>
                                <div className="">
                                  <Link
                                    to="/commercial-spaces/outlet-malls"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg7}
                                  alt="FTV Outlet Malls"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-hospitality"
                        role="tabpanel"
                        aria-labelledby="v-pills-hospitality-tab"
                      >
                        <Swiper
                          spaceBetween={30}
                          autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                          }}
                          navigation={true}
                          modules={[Navigation, Autoplay]}
                          // loop={true}
                          speed={1000}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Hotels By FTV</h2>
                                <p>
                                  Unveil a world of possibilities with F
                                  Hotels By FTV as a developer. Elevate your projects
                                  with our renowned brand, ensuring a fusion of
                                  opulence and top-notch hospitality that sets
                                  your ventures apart in the competitive
                                  industry.
                                </p>
                                <div className="">
                                  <Link
                                    to="/hospitality/hotels"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg4}
                                  alt="FTV Hotels"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F Resorts By FTV</h2>
                                <p>
                                  As a developer, partner with F Resorts By FTV to
                                  transform your projects into serene and
                                  luxurious retreats. Seamlessly blend natures
                                  beauty with opulent living to create
                                  unparalleled getaways, setting your
                                  developments on a path to distinction.
                                </p>
                                <div className="">
                                  <Link
                                    to="/hospitality/resorts"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg9}
                                  alt="FTV Resorts"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="vertical-content">
                              <div className="vertical-para">
                                <h2>F House By FTV</h2>
                                <p>
                                F House By FTV is a remarkable synergy of brand ethos, luxury, lifestyle and premium hospitality. Develop opulent and versatile luxury retreat that combines various businesses and offers a premium leisure destination.
                                </p>
                                <div className="">
                                  <Link
                                    to="/hospitality/house"
                                    className="theme-btn"
                                  >
                                    Know more
                                    <img
                                      className="arrow-icon"
                                      src={AllImages.uprightarrow}
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </div>
                              <div className="vertical-image">
                                <img
                                  loading="lazy"
                                  src={AllImages.categoriesImg5}
                                  alt="F-House"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        {/*  */}
      </div>
      {/*  */}
      <Cta />
    </div>
  );
}

export default RealEstate;
