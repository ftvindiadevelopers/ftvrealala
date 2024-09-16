import { Swiper, SwiperSlide } from "swiper/react";
import BlogCards from "../components/BlogCards";
import AllImages from "../Images";

function BlogCategories(props) {
  return (
    <>
      <div className="tabs-content is-active">
        <div className="blog-heading">
          <h2 className="section-heading" data-aos="fade-up">
            {props.Mainheading}
          </h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <BlogCards
              blogImg={AllImages.BlogImg1}
              blogHeading="Designing the Perfect Home Office: Tips for Fashion-Forward Workspaces"
              paraBlog="With the rise of remote work, the home office has become an essential space for many individuals. An inviting and stylish workspace not only enhances productivity but also has the potential to inspire creativity. 

              Designing a modern and fashion-forward home office setup in India requires careful consideration of aesthetics, functionality, and ergonomics"
              blogTime="Latest | 02 Dec, 2023"
              blogsrc=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCards
              blogImg={AllImages.BlogImg2}
              blogHeading="Designing for Multigenerational Living: Creating Homes for Extended Families"
              paraBlog="In recent years, the concept of multigenerational living has gained significant attention as families strive to maintain closer bonds and support one another. As a result, the demand for homes that cater to extended families has soared.               
              Designing homes for multigenerational living requires careful consideration, creativity, and practicality. High-end condo brand licensing in India is a commendable alternative that uncovers evergreen designs that fit modern-day needs."
              blogTime="Latest | 02 Dec, 2023"
              blogsrc=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogCards
              blogImg={AllImages.BlogImg3}
              blogHeading="Beyond Traditional Investments: Exploring Alternative Real Estate Investment Options "
              paraBlog="Alternative real estate investment possibilities have attracted substantial interest as investors strive to diversify their portfolios and venture beyond standard investment routes such as stocks and bonds. These alternatives offer unique opportunities and the potential for attractive returns in the dynamic and ever-evolving real estate market. From real estate investment trusts (REITs) to crowdfunding platforms and property flipping, alternative real estate investments provide advantages such as diversification, liquidity, and access to previously inaccessible markets. "
              blogTime="Latest | 09 June, 2023"
              blogsrc=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default BlogCategories;
