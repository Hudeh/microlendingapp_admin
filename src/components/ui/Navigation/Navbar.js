import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TheHeaderDropdown } from "components/containers/dashboard/containers";
import MenuToggle from "./MenuToggle";
import logo from "assets/images/homepage/logo.jpeg/"

const Navbar = ({ menuOpen, history, match}) => {
  const authState = useSelector(state => state.authReducer);
  const { isAuthenticated } = authState;

  const dispatch = useDispatch();


  return (
    <>
      {/* nav */}
      <nav className="navbar__corporate image-slider pt-2">
        {/* logo */}
        <div className="logo">
          <NavLink
            to="/"
            exact
            activeClassName="navigation-link--active"
            className="navigation-logo text-white fs-2 corporate-nav-img"
            >
            <img src={logo} alt='logo'className="logo"
              style={{ width: "150px", height:"50px" }} />
          </NavLink>
        </div>
          <MenuToggle isMenuClicked={menuOpen} />

        {/* right container */}
        <div className="__end-right-container pt-3">
          <ul className="bar-right">
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="navigation-link--active"
                className="navigation-link text-white"     
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to="/auction-products"
                exact
                activeClassName="navigation-link--active"
                className="navigation-link text-white"        
               >
                Auction
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                exact
                activeClassName="navigation-link--active"
                className="navigation-link text-white"
                
              >
                Project
              </NavLink>
            </li>
            {isAuthenticated ? (
              <li className="nav-item nav-signup-login navbar-right-loggedin-hidden">
                <TheHeaderDropdown />
              </li>
            ) : (
              <li className="nav-item nav-signup-login navbar-right-hidden">
                <Link
                  to="/auth"
                  onClick={() =>
                    window.scrollTo(
                      {
                        top: 0,
                        behavior: "smooth"
                      },
                      history.push("/auth")
                    )
                  }
                  exact
                  activeClassName="navigation-link--active"
                  className="navigation-link text-white"
                  >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);

