import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import MainSection from "../components/MainSection";
import AllImages from "../Images";
import { FiDownload } from "react-icons/fi";
import Cta from "../components/Cta";
import { useParams } from "react-router-dom";
import { login } from "../api/api";
import Loading from "../components/Loading";

function Vertical() {
  const [verticalData, setVerticalData] = useState({});
  const {any: slug } = useParams();

  useEffect(() => {
    const fetchPageData = async () => {
      const fetchedToken = await login();
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fetchedToken}`,
      };

      try {
        const response = await fetch(
          `https://node.ftvrealestate.in:8089/api/enquiry/brands/${slug}`,
          {
            method: "POST",
            headers,
            mode: "cors",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setVerticalData(data);
        } else {
          console.error("Fetch data failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setVerticalData(null);
    fetchPageData();
  }, [slug]);
  return (
    <>
      {verticalData ? (
        <div className="vetical-main">
          <MainSection
            mainImage={verticalData?.data?.brand_details?.Images?.mainBanner}
            mainHeading={verticalData?.data?.name}
            showPara={false}
          />
          <section className="verticalIntro-section">
            <div className="container-fluid">
              <div className="row align-items-center gap-3 gap-md-0">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="verticalIntro-left">
                    <div className="verticalIntro-content">
                      <h4 data-aos="fade-up">
                        Introducing {verticalData?.data?.name}, By The World's
                        Leading Fashion And Lifestyle Media
                      </h4>
                    </div>
                    <div className="verticalIntro-img" data-aos="fade-up">
                      <img
                        loading="lazy"
                        src={
                          verticalData?.data?.brand_details?.Images?.introImg
                        }
                        alt={verticalData?.data?.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <div className="verticalIntro-right">
                    {verticalData?.data?.brand_details?.introduction.map(
                      (item, index) => (
                        <p key={index} data-aos="fade-up">
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="verticalFeatures-section">
            <div className="container-fluid p-0">
              <div className="row m-0">
                <div className="col-12">
                  <div className="verticalFeatures-heading text-center pb-4">
                    <h2 className="section-heading" data-aos="fade-up">
                      Features
                    </h2>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up">
                  <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    speed={1000}
                    navigation={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                      pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      425: {
                        slidesPerView: 1.2,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 60,
                      },
                    }}
                    className="mySwiper"
                  >
                    {verticalData?.data?.brand_details?.features.map(
                      (item, index) => (
                        <SwiperSlide key={index}>
                          <div className="verticalFeatures-card">
                            <div className="verticalFeatures-img">
                              <img loading="lazy" src={item.imageURL} alt="" />
                            </div>
                            <div className="verticalFeatures-content">
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      )
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>

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
            <div className="video_cmn_brand" data-aos="reveal-up">
              <video
                className="d-sm-block d-none"
                autoPlay
                muted
                loop={true}
                poster={
                  verticalData?.data?.brand_details?.Video_contain?.HeaderPoster
                }
              >
                <source
                  src={
                    verticalData?.data?.brand_details?.Video_contain
                      ?.HeaderVideoDesktop
                  }
                  type="video/mp4"
                />
              </video>
              <video
                className="d-sm-none d-block"
                autoPlay
                muted
                loop={true}
                poster={
                  verticalData?.data?.brand_details?.Video_contain?.HeaderPoster
                }
              >
                <source
                  src={
                    verticalData?.data?.brand_details?.Video_contain
                      ?.HeaderVideoMobile
                  }
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          {/*  */}
          <section className="brandSupport-sec">
            <div className="brandSupport-brnd">
              <img src={AllImages.bgDiaTop} alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-8 col-sm-12">
                  <div className="brandSupport-heading">
                    <h2 className="section-heading" data-aos="fade-up">
                      Brand <br /> Support
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-0 col-sm-0"></div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="brandSupport-content">
                    <p data-aos="fade-up">
                    FashionTV gives absolute business support to all our business partners- builders & developers. We help in all aspects, ranging from architectural design guidance, investor portfolios, PR launch plans, social media marketing, auditing, cross-marketing and more. By contributing our specialisation in strategic planning, we provide a step-by-step guidance to help you actualise your real estate vision. 

                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="brandSupport-img" data-aos="reveal-right">
                    <img
                      loading="lazy"
                      src={AllImages.BrandSupport}
                      alt="Brand Licensing"
                      data-aos="zoom-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  */}
          <section className="brand-download-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <div className="brand-download-text">
                    <h2 data-aos="fade-up" className="section-heading">
                      Downloads
                    </h2>
                    <p data-aos="fade-up">
                    The potential for advancing real estate development is limitless. Join us on our journey to dominate the luxury real estate market with our premium real estate projects. Download the kits below to gain insight into our operations and what lies ahead.
                    </p>
                  </div>
                </div>
                <div className="offset-lg-1 col-lg-5 col-md-6 col-sm-12 px-3">
                  <div className="brand-download-content">
                    <div className="brand-download-card" data-aos="fade-up">
                      <a
                        aria-label="link"
                        href={
                          verticalData?.data?.brand_details?.downloads?.saleskit
                            ?.url
                        }
                        download
                        target="_blank"
                        title="FTV Real Estate Sales Kit"
                      >
                        Sales Kit <FiDownload />
                      </a>
                    </div>
                    <div className="brand-download-card" data-aos="fade-up">
                      <a
                        aria-label="link"
                        href={
                          verticalData?.data?.brand_details?.downloads?.lookbook
                            ?.url
                        }
                        download
                        target="_blank"
                        title="FTV Real Estate Look Book"
                      >
                        Look Book <FiDownload />
                      </a>
                    </div>
                    <div className="brand-download-card" data-aos="fade-up">
                      <a
                        aria-label="link"
                        href={
                          verticalData?.data?.brand_details?.downloads
                            ?.videobook?.url
                        }
                        target="_blank"
                        download
                        title="FTV Real Estate Video Book"
                      >
                        Video&nbsp;Book <FiDownload />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*  */}
          <Cta />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Vertical;
