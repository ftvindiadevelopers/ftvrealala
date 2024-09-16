export default function MainSection(props) {
  const { showPara } = props;

  return (
    <section className="mainBanner-section">
      <div className="mainBanner">
        <img loading="lazy" src={props.mainImage} alt="" data-aos="zoom-out" />
        <div className="mainBanner-content">
          <h1 data-aos="fade-up" className="split-text">
            {props.mainHeading}
          </h1>
          {showPara && <p data-aos="fade-up"> {props.mainPara} </p>}
        </div>
      </div>
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
      <div className="image-overlay"></div>
    </section>
  );
}
