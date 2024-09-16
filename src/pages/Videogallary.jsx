// import AllImages from "../Images";
import MainSection from "../components/MainSection";
import AllImages from "../Images";

export default function Videogallary() {
  return (
    <>
      <div className="home-page-real">
        <MainSection
          mainImage="https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-10.jpeg"
          mainHeading="Video Gallery"
          showPara={false}
        />

        <section className="main-gallary-sec">
          <div className="main-gallery-flex">
            <div className="main-grid-card">
              <video
                poster="https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-6.jpeg"
                autoPlay
                loop={true}
                playsInline
                muted
              >
                <source
                  src="https://frn.s3.ftvassets.in/media/realestate_website/video-gallery/F-Tower-SBP-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="main-grid-card">
              <video
                poster="https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-14.jpeg"
                autoPlay
                loop={true}
                playsInline
                muted
              >
                <source
                  src="https://frn.s3.ftvassets.in/media/realestate_website/video-gallery/danube-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="main-grid-card">
              <video
                poster="https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-3.jpeg"
                autoPlay
                loop={true}
                playsInline
                muted
              >
                <source
                  src="https://frn.s3.ftvassets.in/media/realestate_website/video-gallery/f-Towers-mohali.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="main-gallary-brnd">
            <img src={AllImages.bgDiaBottom} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
