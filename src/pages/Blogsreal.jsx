import AllImages from "../Images";
import { useState, useEffect } from "react";
import MainSection from "../components/MainSection";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import Axios from "axios";
import BlogCards from "../components/BlogCards";


function Blogsreal() {

  
  const [blogList, setBlogList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await Axios.get(
          "https://node.ftvlifestylebay.in:3030/api/blogs/website/ftvrealestateblog"
        );
        setBlogList(data);
      } catch (error) {
        console.log("No data found", { type: "error" });
      }  
    };
    getData();
  }, []);

  return (
    <div className="blog-main">
      <MainSection
        mainImage={AllImages.blogBanner}
        mainHeading="Blogs"
        showPara={true}
        mainPara="Step into the captivating world of real estate as we unravel stories that shed light on our expertise and the ever-evolving industry landscape."
      />
      {/* <section className="blogs-section section-bold">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tabs-content">
                <div className="blogs_filter">
                  <div className="blog-heading">
                    <h2 className="section-heading">Latest Blogs</h2>
                  </div>
                  <Swiper
                    navigation={true}
                    className="mySwipser"
                    autoHeight={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation]}
                  >
                    {blogList.map((blog) => (
                      <SwiperSlide key={blog._id}>
                        <div className="blog-swiper-division">
                          <div className="blog-images">
                            <img
                              loading="lazy"
                              src={
                                "https://node.ftvlifestylebay.in:3030/api/" +
                                blog.thumbnail
                              }
                              alt={blog.title}
                            />
                          </div>
                          <div className="blog-content">
                            <small className="mb-3" data-aos="fade-up">
                              {new Date(blog.timestamp).toLocaleString()}
                              <time dateTime={blog.timestamp}></time>
                            </small>{" "}
                            <h3>{blog.title}</h3>
                            <p>{blog.subtitle}</p>
                            <Link
                              to={`/blogs/${blog.slug}`}
                              className="theme-btn"
                            >
                              Read More{" "}
                              <img
                                className="arrow-icon"
                                src={AllImages.uprightarrow}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
       <section className="blogs-section blogs_c-section">
        <div className="container">
          <div className="row m-0 gap-4 gap-md-0">
            {blogList.map((blog) => (
              <div className="col-lg-6 col-md-6 col-sm-12">
                <BlogCards
                  key={blog._id}
                  blogImg={
                    `https://node.ftvlifestylebay.in:3030/api/` + blog.thumbnail
                  }
                  blogTime={blog.timestamp}
                  blogHeading={blog.title}
                  blogsAlt={blog.title}
                  blogPara={blog.subtitle}
                  blogSrc={blog.slug} />
              </div>
            ))}
          </div>
        </div>
 
      </section>
    </div>
  );
}

export default Blogsreal;
