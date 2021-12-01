import React from "react";
import { withRouter } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";


const Footer = () => {
  return (
  <footer>
        <hr />
        <div className="social-icons-col d-flex justify-content-around">
          <span className="mt-3">
            <span className="mr-1">&copy;</span>2021 Ogadonate
          </span>
          <span className="social-icons mt-3">
            <span className="twitter-icon">
              <a
                href="https://twitter.com/ogadonate"
                className="fitwitter fs-1"
              >
                <FiTwitter />
              </a>
            </span>
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
          </span>
        </div>

    </footer>
  );
};

export default withRouter(Footer);
