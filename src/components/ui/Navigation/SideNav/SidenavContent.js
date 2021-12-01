import React, { useState } from "react";
import { withRouter, NavLink, Link } from "react-router-dom";
import Logo from "assets/images/homepage/logo.jpeg";
import Button from "@material-ui/core/Button";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { TheHeaderDropdown } from "components/containers/dashboard/containers";
import { useSelector } from "react-redux";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";

const SidenavContent = ({ handleClickAway, history }) => {
  const authState = useSelector(state => state.authReducer);
  const { isAuthenticated } = authState;
  const [showUpArrow, setShowUpArrow] = useState(false);

  const arrowUp = () => {
    setShowUpArrow(!showUpArrow);
  };


  return (
    <>
      <nav className="side-navbar-content">
        {/* logo */}
        <div>
          <NavLink
            to="/"
            exact
            activeClassName="side-navigation-link--active"
            className="side-navigation-link"
          >
            <img src={Logo} alt="log-img" style={{ width: "150px" }} />
          </NavLink>
        </div>

        {isAuthenticated ? (
          <TheHeaderDropdown />
        ) : (
          <li className="side-nav-item">
            <Link
              exact
              activeClassName="side-navigation-link--active"
              className="side-navigation-link"
              onClick={() => {
                handleClickAway();
                window.scrollTo(
                  { top: 0, behavior: "smooth" },
                  history.push("/auth")
                );
              }}
            >
              Login
            </Link>
          </li>
        )}

        {/* sidenav-content home*/}
        <ul className="side-nav-bullet">
          <li className="side-nav-item">
            <Link
              exact
              activeClassName="side-navigation-link--active"
              className="side-navigation-link"
              onClick={() => {
                handleClickAway();
                window.scrollTo(
                  {
                    top: 0,
                    behavior: "smooth"
                  },
                  history.push("/")
                );
              }}
            >
              Home
            </Link>
          </li>

        {/* auction */}      
          <li className="side-nav-item">
            <Link
              exact
              activeClassName="side-navigation-link--active"
              className="side-navigation-link"
              onClick={() => {
                handleClickAway();
                window.scrollTo(
                  {
                    top: 0,
                    behavior: "smooth"
                  },
                  history.push("/auction-products")
                );
              }}
            >
              Auction
            </Link>
          </li>
          <li className="side-nav-item">
            <Link
              exact
              activeClassName="side-navigation-link--active"
              className="side-navigation-link"
              onClick={() => {
                handleClickAway();
                window.scrollTo(
                  {
                    top: 0,
                    behavior: "smooth"
                  },
                  history.push("/projects")
                );
              }}
             >
             Project
            </Link>
          </li>
        </ul>
      
        <ul>
          <div className="sidenav-social-icons d-flex flex-column">
            <span className="mt-3 text-center">
              <span className="mr-1">&copy;</span>2021 Ogadonate
            </span>
            <div className="social-icons mt-3 text-center">
              <span className="facebook-icon">
                <a
                  href="https://web.facebook.com/ogadonate"
                  className="imfacebook fs-1"
                >
                  <ImFacebook />
                </a>
              </span>
              <span className="instagram-icon">
                <a
                  href="https://www.instagram.com/ogadonate/"
                  className="ioinstagram fs-1"
                >
                  <IoLogoInstagram />
                </a>
              </span>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default withRouter(SidenavContent);
