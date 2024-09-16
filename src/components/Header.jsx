import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import AllImages from "../Images";
import { HashLink } from "react-router-hash-link";
import Metas from "./Metas";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const closeMenu = () => {
    setIsActive(false);
  };
  const activeStyles = {
    fontWeight: "bold",
    color: "#d6af5c",
  };

  return (
    <>
      <ScrollToTop />
      <Metas />
      <header>
        <nav
          className="navbar navbar-expand-xxl navbar-dark custom-nav"
          id="realestate-nav"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={AllImages.mainLogo} alt="FTV Real Estate Logo" />
            </Link>
            <button
              aria-label="submit"
              className="navbar-toggler collapsed custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <div
                className={`hamburger-toggle ${isActive ? "active" : ""}`}
                onClick={handleToggle}
              >
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
            <div
              className={`collapse navbar-collapse custom-navbar ${
                isActive ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item dropdown position-static">
                  <a
                    aria-label="link"
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    License Categories
                    <FaChevronDown />
                  </a>

                  <div
                    className="dropdown-menu mt-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="container">
                      <div className="row custom-row">
                        <div className="col-md-6 col-xl-4 mb-3 mb-md-0">
                          <div className="list-group list-group-flush">
                            <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                              Residences
                            </p>
                            <NavLink
                              to="residences/residences"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Residences
                            </NavLink>
                            <NavLink
                              to="residences/villas"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Villas
                            </NavLink>
                            <NavLink
                              to="residences/furnished-apartments"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Furnished Apartments
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4 mb-3 mb-md-0">
                          <div className="list-group list-group-flush">
                            <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                              Commercial Spaces
                            </p>
                            <NavLink
                              to="commercial-spaces/co-works"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Coworks
                            </NavLink>
                            <NavLink
                              to="commercial-spaces/malls"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Malls
                            </NavLink>
                            <NavLink
                              to="commercial-spaces/business-bay"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Business Bay
                            </NavLink>
                            <NavLink
                              to="commercial-spaces/outlet-malls"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Outlet Malls
                            </NavLink>
                          </div>
                        </div>
                        <div className="col-md-6 col-xl-4 mb-3 mb-md-0">
                          <div className="list-group list-group-flush border-none-child">
                            <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                              Hospitality
                            </p>
                            <NavLink
                              to="hospitality/hotels"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Hotels
                            </NavLink>
                            <NavLink
                              to="hospitality/resorts"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV Resorts
                            </NavLink>
                            <NavLink
                              to="hospitality/house"
                              className="nav-link"
                              onClick={closeMenu}
                            >
                              FTV House
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item ">
                  <NavLink
                    to="projects"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                    onClick={closeMenu}
                  >
                    Projects
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="about-ftv-real-estate"
                    className="nav-link"
                    onClick={closeMenu}
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                  >
                    About FTV Real Estate
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                 
                </li> */}
                <li className="nav-item">
                  <li className="nav-item dropdown bora-man">
                    <a
                      aria-label="link"
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Management
                      <FaChevronDown />
                    </a>

                    <div
                      className="dropdown-menu forborad mt-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="container-sm">
                        <div className="row">
                          <div className="col-md-12 mb-3 mb-md-0">
                            <div className="list-group list-group-flush">
                              <NavLink
                                to="about-us"
                                className="nav-link"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                  isActive ? activeStyles : null
                                }
                              >
                                About us
                              </NavLink>
                              <HashLink
                                to="/about-us#michel"
                                className="nav-link"
                                onClick={closeMenu}
                              >
                                Michal Adam
                              </HashLink>
                              <HashLink
                                to="/about-us#kashiff"
                                className="nav-link"
                                onClick={closeMenu}
                              >
                                Kashiff Khan
                              </HashLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </li>
                {/* <li className="nav-item">
                  <li className="nav-item dropdown bora-real">
                    <a
                      aria-label="link"
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      MEDIA & PRESS
                      <FaChevronDown />
                    </a>

                    <div
                      className="dropdown-menu forborad mt-0"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="container-sm">
                        <div className="row">
                          <div className="col-md-12 mb-3 mb-md-0">
                            <div className="list-group  list-group-flush">
                              <NavLink
                                to="photo-gallary"
                                className="nav-link"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                  isActive ? activeStyles : null
                                }
                              >
                                PHOTO GALLERY
                              </NavLink>
                              <NavLink
                                to="video-gallary"
                                className="nav-link"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                  isActive ? activeStyles : null
                                }
                              >
                                VIDEO GALLERY
                              </NavLink>
                              <NavLink
                                to="news"
                                className="nav-link"
                                onClick={closeMenu}
                                style={({ isActive }) =>
                                  isActive ? activeStyles : null
                                }
                              >
                                NEWS
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    to="news"
                    className="nav-link"
                    onClick={closeMenu}
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                  >
                    NEWS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="blogs"
                    className="nav-link"
                    onClick={closeMenu}
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item btn-enquiry">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="contact-us"
                    onClick={closeMenu}
                    title="Contact&nbsp;Us"
                  >
                    Contact&nbsp;Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
