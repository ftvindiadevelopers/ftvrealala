import AllImages from "../Images";
import ProjectCards from "../components/ProjectCards";
function Projects() {
  return (
    <>
      <section className="videos-section">
        <div className="videos">
          <video
            className="d-sm-block d-none"
            autoPlay
            muted
            loop={true}
            poster={AllImages.projectBanner}
            data-aos="zoom-out"
          >
            <source src={AllImages.ftvVideo} type="video/mp4" />
          </video>
          <video
            className="d-sm-none d-block"
            autoPlay
            muted
            loop={true}
            poster={AllImages.projectBanner}
            data-aos="zoom-out"
          >
            <source src={AllImages.ftvVideoMob} type="video/mp4" />
          </video>
          <div className="videos-content">
            {/* <h1 className="split-text" data-aos="fade-up">
            Partner with Luxury</h1> */}
          </div>
        </div>
        {/* <div className="image-overlay"></div> */}

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

      <section className="projectstabs-section">
        <div className="projectstabs-brnd">
          <img src={AllImages.bgDiaBottom} alt="" />
        </div>
        <div className="container-fluid p-0">
          <div className="row m-0 justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-11 col-sm-12">
              <div className="">
                <ul
                  className="projectstabs_ul nav nav-pills mb-3 "
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="showall-tab"
                      data-bs-toggle="pill"
                      aria-label="tablist"
                      data-bs-target="#showall"
                      type="button"
                      role="tab"
                      aria-controls="showall"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-latest-tab"
                      aria-label="tablist"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-latest"
                      type="button"
                      role="tab"
                      aria-controls="pills-latest"
                      aria-selected="true"
                    >
                      Latest
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-existing-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-existing"
                      type="button"
                      aria-label="tablist"
                      role="tab"
                      aria-controls="pills-existing"
                      aria-selected="false"
                    >
                      Existing
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-upcoming-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-upcoming"
                      type="button"
                      role="tab"
                      aria-label="tablist"
                      aria-controls="pills-upcoming"
                      aria-selected="false"
                    >
                      Upcoming
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="showall"
                    role="tabpanel"
                    aria-labelledby="showall-tab"
                  >
                    <div className="projectstabs-container">
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectfTower}
                        ProjectsAlt="FTV F-Towers Chandigarh Tricity Project Image"
                        ProjectsHeading="F-Towers - Chandigarh Tricity"
                        btnsource="/projects/ftowerschandigarhtricity-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsMalad}
                        ProjectsAlt="FTV Malad Project Image"
                        ProjectsHeading="F Residences - Malad, Mumbai"
                        btnsource="/projects/malad-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsGhatkopar}
                        ProjectsAlt="F Residences - Ghatkopar, Mumbai"
                        ProjectsHeading="F Residences - Ghatkopar, Mumbai"
                        btnsource="/projects/ghatkopar-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsNoida}
                        ProjectsAlt="F Residences - Greater Noida"
                        ProjectsHeading="F Residences - Greater Noida"
                        btnsource="/projects/greater-noida-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectskalyaniNagar}
                        ProjectsAlt="F Residences - Kalyani Nagar, Pune"
                        ProjectsHeading="F Residences - Kalyani Nagar, Pune"
                        btnsource="/projects/kalyani-nagar-pune-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsBalewadi}
                        ProjectsAlt="F Residences - Balewadi, Pune"
                        ProjectsHeading="F Residences - Balewadi, Pune"
                        btnsource="/projects/balewadi-pune-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsDubai}
                        ProjectsAlt="Fashionz Danube - Dubai, UAE"
                        ProjectsHeading="Fashionz Danube - Dubai, UAE"
                        btnsource="/projects/dubai-uae-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectslLudhiana}
                        ProjectsAlt="F Towers - Ludhiana"
                        ProjectsHeading="F Towers - Ludhiana"
                        btnsource="/projects/ludhiana-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsPoland}
                        ProjectsAlt="F Master Plan - Poland"
                        ProjectsHeading="F Master Plan - Poland"
                        btnsource="poland-Warsaw-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsBaliVilla}
                        ProjectsAlt="F Residences & Resorts  - Bali"
                        ProjectsHeading="F Residences & Resorts  - Bali"
                        btnsource="bali-diamond-cabanas-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsLoveHotelBali}
                        ProjectsAlt="Love F Hotel - Bali"
                        ProjectsHeading="Love F Hotel - Bali"
                        btnsource="bali-hotel-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsHotelsBali}
                        ProjectsAlt="F Hotels & Residences - Jimbaran, Bali"
                        ProjectsHeading="F Hotels & Residences - Jimbaran, Bali"
                        btnsource="bali-Jimbaran-project-details"
                      />
                     <ProjectCards
                        ProjectsImg={AllImages.ProjectsPunePaud}
                        ProjectsAlt=""
                        ProjectsHeading="F Villas - Paud, Pune (Upcoming)"
                        btnsource="pune-paud-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsPuneTathawade}
                        ProjectsAlt=""
                        ProjectsHeading="F Residences - Tathawade,Pune (Upcoming)"
                        btnsource="pune-Tathawade-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsKolkataUpComing}
                        ProjectsAlt=""
                        ProjectsHeading="F Residences - Gopalpur, West Bengal (Upcoming)"
                        btnsource="bangal-Gopalpur-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsRanchiUpComing}
                        ProjectsAlt=""
                        ProjectsHeading="F Imperial Spaces - Ranchi (Upcoming)"
                        btnsource="imperial-spaces-ranchi-project-details"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-latest"
                    role="tabpanel"
                    aria-labelledby="pills-latest-tab"
                  >
                    <div className="projectstabs-container">
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectfTower}
                        ProjectsAlt="FTV F-Towers Chandigarh Tricity Project Image"
                        ProjectsHeading="F-Towers - Chandigarh Tricity"
                        btnsource="/projects/ftowerschandigarhtricity-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectslLudhiana}
                        ProjectsAlt="F Towers - Ludhiana"
                        ProjectsHeading="F Towers - Ludhiana"
                        btnsource="/projects/ludhiana-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsDubai}
                        ProjectsAlt="Fashionz Danube - Dubai, UAE"
                        ProjectsHeading="Fashionz Danube - Dubai, UAE"
                        btnsource="/projects/dubai-uae-project-details"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-existing"
                    role="tabpanel"
                    aria-labelledby="pills-existing-tab"
                  >
                    <div className="projectstabs-container">
                     
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsMalad}
                        ProjectsAlt="FTV Malad Project Image"
                        ProjectsHeading="F Residences - Malad, Mumbai"
                        btnsource="/projects/malad-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsGhatkopar}
                        ProjectsAlt="F Residences - Ghatkopar, Mumbai"
                        ProjectsHeading="F Residences - Ghatkopar, Mumbai"
                        btnsource="/projects/ghatkopar-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsNoida}
                        ProjectsAlt="F Residences - Greater Noida"
                        ProjectsHeading="F Residences - Greater Noida"
                        btnsource="/projects/greater-noida-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectskalyaniNagar}
                        ProjectsAlt="F Residences - Kalyani Nagar, Pune"
                        ProjectsHeading="F Residences - Kalyani Nagar, Pune"
                        btnsource="/projects/kalyani-nagar-pune-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsBalewadi}
                        ProjectsAlt="F Residences - Balewadi, Pune"
                        ProjectsHeading="F Residences - Balewadi, Pune"
                        btnsource="/projects/balewadi-pune-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsDubai}
                        ProjectsAlt="Fashionz Danube - Dubai, UAE"
                        ProjectsHeading="Fashionz Danube - Dubai, UAE"
                        btnsource="/projects/dubai-uae-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectslLudhiana}
                        ProjectsAlt="F Towers - Ludhiana"
                        ProjectsHeading="F Towers - Ludhiana"
                        btnsource="/projects/ludhiana-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsPoland}
                        ProjectsAlt="F Master Plan - Poland"
                        ProjectsHeading="F Master Plan - Poland"
                        btnsource="poland-Warsaw-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsBaliVilla}
                        ProjectsAlt="F Residences & Resorts  - Bali"
                        ProjectsHeading="F Residences & Resorts  - Bali"
                        btnsource="bali-diamond-cabanas-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsLoveHotelBali}
                        ProjectsAlt="Love F Hotel - Bali"
                        ProjectsHeading="Love F Hotel - Bali"
                        btnsource="bali-hotel-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsHotelsBali}
                        ProjectsAlt="F Hotels & Residences - Jimbaran, Bali"
                        ProjectsHeading="F Hotels & Residences - Jimbaran, Bali"
                        btnsource="bali-Jimbaran-project-details"
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-upcoming"
                    role="tabpanel"
                    aria-labelledby="pills-upcoming-tab"
                  >
                    <div className="projectstabs-container">
                    <ProjectCards
                        ProjectsImg={AllImages.ProjectfTower}
                        ProjectsAlt="FTV F-Towers Chandigarh Tricity Project Image"
                        ProjectsHeading="F-Towers - Chandigarh Tricity"
                        btnsource="/projects/ftowerschandigarhtricity-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsPunePaud}
                        ProjectsAlt=""
                        ProjectsHeading="F Villas - Paud, Pune (Upcoming)"
                        btnsource="pune-paud-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsPuneTathawade}
                        ProjectsAlt=""
                        ProjectsHeading="F Residences - Tathawade,Pune (Upcoming)"
                        btnsource="pune-Tathawade-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsKolkataUpComing}
                        ProjectsAlt=""
                        ProjectsHeading="F Residences - Gopalpur, West Bengal (Upcoming)"
                        btnsource="bangal-Gopalpur-project-details"
                      />
                      <ProjectCards
                        ProjectsImg={AllImages.ProjectsRanchiUpComing}
                        ProjectsAlt=""
                        ProjectsHeading="F Imperial Spaces - Ranchi (Upcoming)"
                        btnsource="imperial-spaces-ranchi-project-details"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
