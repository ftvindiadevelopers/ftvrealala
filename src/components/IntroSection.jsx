import React from "react";
import AllImages from "../Images";
import { Link } from "react-router-dom";

function IntroSection(props) {
  const { showButton } = props;
  const { externalBtn } = props;
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
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

  return (
    <section className="intro-section">
      <div className="container-fluids">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="intro-content">
              <p data-aos="fade-up">{props.subheading}</p>
              <h2 data-aos="fade-up" id="headline" className="section-heading">
                {props.heading}
              </h2>
              <p data-aos="fade-up">{props.introPara}</p>
              {showButton && (
                <div data-aos="fade-up" data-aos-delay="300" className="">
                  <Link to={props.btnsource} className="theme-btn">
                    {props.readmoreText ? (
                      <span>{props.readmoreText}</span>
                    ) : (
                      <span>Know More</span>
                    )}
                    <img
                      className="arrow-icon"
                      src={AllImages.uprightarrow}
                      alt=""
                    />
                  </Link>
                </div>
              )}
                 {externalBtn && (
                <div data-aos="fade-up" data-aos-delay="300" className="">
                  <a href={props.btnsource}  rel="noopener noreferrer" target="_blank" download className="theme-btn">
                    {props.readmoreText ? (
                      <span>{props.readmoreText}</span>
                    ) : (
                      <span>Know More</span>
                    )}
                    <img
                      className="arrow-icon"
                      src={AllImages.uprightarrow}
                      alt=""
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="offset-xl-1 col-xl-4 offset-lg-1 col-lg-4 mo-none col-md-12 col-sm-12">
            <div ref={sectionRef} className="intro-images">
              <img
                loading="lazy"
                src={props.intro1}
                alt=""
                className="intro-img1"
              />
              <div className="intro-img2">
                <img
                  loading="lazy"
                  src={props.intro2}
                  alt=""
                  className=""
                  data-aos="fade-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
