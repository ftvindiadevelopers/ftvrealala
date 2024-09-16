import AllImages from "../Images";
// import { useState, useEffect } from "react";
import MainSection from "../components/MainSection";

function Blogs() {
  const galleryItems = [
    {
      image: "/media/images/news/news-1.png",
      link: "",
    },
    {
      image: "/media/images/news/news-2.png",
      link: "",
    },
    {
      image: "/media/images/news/news-3.png",
      link: "",
    },
    {
      image: "/media/images/news/news-4.png",
      link: "",
    },
    {
      image: "/media/images/news/news-5.png",
      link: "",
    },
    {
      image: "/media/images/news/news-6.png",
      link: "",
    },
    {
      image: "/media/images/news/news-7.png",
      link: "",
    },
    {
      image: "/media/images/news/news-8.png",
      link: "",
    },
    {
      image: "/media/images/news/news-9.png",
      link: "",
    },
    {
      image: "/media/images/news/news-11.png",
      link: "",
    },
    {
      image: "/media/images/news/news-12.png",
      link: "",
    },
    {
      image: "/media/images/news/news-13.png",
      link: "",
    },
    {
      image: "/media/images/news/news-14.png",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-1.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-2.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-3.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-4.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-5.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-6.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-7.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-8.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-9.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-10.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-11.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-12.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-13.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-14.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-15.webp",
      link: "",
    },
    {
      image: "/media/images/news/sbp-ftv-16.webp",
      link: "",
    },
   
  ];

  return (
    <div className="blog-main">
      <MainSection
        mainImage={AllImages.newsBanner}
        mainHeading="News"
        showPara={true}
        mainPara="Step into the captivating world of real estate as we unravel stories that shed light on our expertise and the ever-evolving industry landscape."
      />

      <section className="main-gallary-sec">
        <a href="javascript:void(0);" className="main-gallery-flex">
          {galleryItems.map((item, index) => (
            // <a href={item.link} key={index} className="main-grid-card">
            <a href="javascript:void(0);" key={index} className="main-grid-card">
              <img src={item.image} alt={`Gallery image ${index + 1}`} />
            </a>
          ))}
        </a>
        <div className="main-gallary-brnd">
          <img src={AllImages.bgDiaBottom} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Blogs;
