import React from "react";
import { Link } from "react-router-dom";
import AllImages from "../Images";

export default function ProjectCards(props) {
  return (
    <>
      <div className="projectstabs-card">
        <div className="projectstabs-img">
          <img loading="lazy" src={props.ProjectsImg} alt={props.ProjectsAlt} />
        </div>
        <div className="projectstabs-heading">
          <h5>{props.ProjectsHeading}</h5>
        </div>
        <div className="projectstabs-btn">
          <Link to={props.btnsource} className="theme-btn">
            Know more
            <img className="arrow-icon" src={AllImages.uprightarrow} alt="" />
          </Link>
        </div>
      </div>
      {/* <ProjectCards ProjectsImg={AllImages.ProjectsMalad} ProjectsAlt="FTV Malad Project Image" ProjectsHeading="F Residence - Malad, Mumbai" btnsource=""/> */}
    </>
  );
}
