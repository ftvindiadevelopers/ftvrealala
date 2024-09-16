// import AllImages from "../Images";
import MainSection from "../components/MainSection";
import AllImages from "../Images";

export default function Photogallary() {
  const galImages = [
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-1.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-2.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-4.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-5.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-6.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-7.jpeg", 
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-9.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-10.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-11.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-12.jpeg",   
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-17.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-18.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-19.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-20.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-8.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-13.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-14.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-15.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-21.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-22.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-23.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-24.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-25.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-26.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-27.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-28.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-29.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-30.jpeg",
    "https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-31.jpeg",
  ];

  
  return (
    <>
      <div className="home-page-real">
        <MainSection
          mainImage="https://frn.s3.ftvassets.in/media/realestate_website/image-gallery/gal_image-3.jpeg"
          mainHeading="Photo Gallery"
          showPara={false}
        />
        <section className="main-gallary-sec">
          
          <div className="main-gallery-flex">
            {galImages.map((url, index) => (
              <div key={index} className="main-grid-card">
                <img src={url} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="main-gallary-brnd">
            <img src={AllImages.bgDiaBottom} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}
