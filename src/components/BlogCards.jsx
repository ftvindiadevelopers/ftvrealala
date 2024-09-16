import { Link } from "react-router-dom";

export default function BlogCards(props) {
  return (
    <>
      <article className="blogs-cards-items" data-aos="fade-up">
        <div className="blog-images">
          <picture>
            <source srcSet={props.blogImg} type="image/avif" />
            <source srcSet={props.blogImg} type="image/webp" />
            <img
              src={props.blogImg}
              alt={props.blogsAlt}
              loading="lazy"
              data-aos="zoom-out"
            />
          </picture>
          {/* <img src={props.blogImg} alt={props.blogsAlt} loading="lazy" /> */}
        </div>
        <div className="blog_cards-content">
          <small>
            {new Date(props.blogTime).toLocaleString()}
            {/* Latest | <time>{props.blogTime}</time> */}
          </small>
          <h3>{props.blogHeading}</h3>
          <p>{props.blogPara}</p>
          <div className="blog-link">
            <Link to={props.blogSrc} className="theme-btn">
              Read More
            </Link>
            <span></span>
          </div>
        </div>
      </article>
    </>
  );
}