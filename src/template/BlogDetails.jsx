import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MainSection from "../components/MainSection";
import AllImages from "../Images";

function BlogDetails() {
  const [blogData, setBlogData] = useState([]);
  const location = useLocation();
  const path = location.pathname;
  const parts = path.split("/");
  const lastPart = parts[parts.length - 1];

  useEffect(() => {
    // Add a check to only fetch data if the path is not the homepage
    if (path !== "/") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://node.ftvlifestylebay.in:3030/api/blogs/${lastPart}`,
            {
              method: "GET",
              mode: "cors",
            }
          );

          if (response.status === 200) {
            const data = await response.json();
            setBlogData(data);
          } else {
            console.error("Fetch meta data failed:", response.statusText);
          }
        } catch (error) {
          console.error("Error meta fetching data:", error);
        }
      };

      fetchData();
    }
  }, [path, lastPart]);

  console.log("blogName");
  return (
    <div className="blogdetails">
      <MainSection
        mainImage={
          "https://node.ftvlifestylebay.in:3030/api/" + blogData.banner
        }
        mainHeading={blogData.newspapar}
        showPara={false}
        mainPara=""
        showOverlay={false}
      />
      <div className="blogdetails-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-10 col-sm-12">
              <article className="blogdetails-content">
                <small className="mb-3" data-aos="fade-up">
                  {new Date(blogData.timestamp).toLocaleString()}
                  <time dateTime={blogData.timestamp}></time>
                </small>

                <h2 className="mt-4 section-heading">{blogData.title} </h2>
                <div className="blog-para py-2">
                  <div
                    dangerouslySetInnerHTML={{ __html: blogData.blogcontent }}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="blogdetails-brnd">
            <img src={AllImages.bgDiaBottom} alt="" />
          </div>
      </div>
    </div>
  );
}

export default BlogDetails;
