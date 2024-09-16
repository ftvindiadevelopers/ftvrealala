import { useState, useEffect } from "react";
import MainSection from "../components/MainSection";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { login } from "../api/api";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function ProjectDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [projectData, setProjectData] = useState({});
  const { any: slug } = useParams();
  useEffect(() => {
    const fetchProjectDetails = async () => {
      const fetchedToken = await login();
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fetchedToken}`,
      };

      try {
        const response = await fetch(
          `https://node.ftvrealestate.in:8089/api/enquiry/projects/${slug}`,
          {
            method: "POST",
            headers,
            mode: "cors",
          }
        );
        if (response.status === 200) {
          const data = await response.json();
          setProjectData(data);
          // console.log(data);
        } else {
          console.error("fetch data failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProjectDetails();
  }, [slug]);
  return (
    <>
      {projectData ? (
        <>
          <MainSection
            mainImage={projectData?.data?.Header_img}
            mainHeading={projectData?.data?.listtitlename}
            showPara={false}
            mainPara=""
          />
          <section className="projectDetails-section">
            <div className="container-fluid">
              <div className="row">
                <div className="offset-lg-1 col-lg-5 col-md-12 col-sm-12">
                  <div className="projectDetails-content">
                    <h2 className="section-heading">Overview</h2>
                    <p className="para">{projectData?.data?.overview}</p>
                    <h2 className="section-heading">Amenities</h2>
                    <ul>
                      {projectData?.data?.section1?.list1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <h2 className="section-heading">
                      Connectivity & Convenience
                    </h2>
                    <ul>
                      {projectData?.data?.section1?.list2.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    {/* {projectData?.data?.mapURL && (
                      <div className="projectDetails-map py-3">
                        <iframe
                          src={projectData?.data?.mapURL}
                          className="w-90"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    )} */}
                    {projectData?.data?.mapURL ? (
                      <iframe
                        src={projectData.data.mapURL}
                        className="w-90"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <div className="w-90">
                        <p> </p>
                      </div>
                    )}
                  </div>
                </div>
                {projectData?.data?.sliderImage? (            
                <div className="col-lg-6 col-md-12 col-sm-12 project-Img">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={300}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    { projectData?.data?.sliderImage?.data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img loading="lazy" src={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    {projectData?.data?.sliderImage?.data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img loading="lazy" src={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {projectData?.data?.brochure && (
                    <div className="project-button">
                      <a
                        title="Download Brochure"
                        className="nav-link"
                        download={true}
                        aria-label="link"
                        rel="noreferrer"
                        target={"_blank"}
                        href={projectData?.data?.brochure}
                      >
                        Download Brochure
                      </a>
                    </div>
                  )}
                </div>
                   ) : (
                    <div className="w-90">
                      <p> </p>
                    </div>
                  )}
              </div>
            </div>
          </section>
        </>
      ) : (
        <Loading />
      )}
      
    </>
  );
}

export default ProjectDetails;
