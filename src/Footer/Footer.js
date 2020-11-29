import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="fixed-footer">
        <div className="all">
          <div className="social-item">
            <a href="https://www.clarusway.com">
              <img
                className="social-item"
                src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
                alt="clarusway"
              />
            </a>
          </div>
          <div className="social-item">
            <a className="link" href="https://www.facebook.com/clarusway">
              <FaFacebook />
            </a>
          </div>
          <div className="social-item">
            <a className="link" href="https://www.twitter.com/clarusway">
              <FaTwitter />
            </a>
          </div>
          <div className="social-item">
            <a className="link" href="https://www.instagram.com/clarusway">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="container">Copyright &copy; 2020 Clarusway</div>
      </div>
    </div>
  );
};

export default Footer;
