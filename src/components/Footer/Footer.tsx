import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Banner Section */}
      <div className="footer-banner">
        <h2>See all that you can accomplish with Hubnex Labs</h2>
        <button className="btn connect-sales">Connect Sales →</button>
      </div>

      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="footer-content">
          <h3>Let’s grow <span className="emoji">💪</span> <h3>together with the faster ecosystem</h3></h3>
          
          <button className="btn contact-us">Contact Us →</button>
        </div>
       

        <div className="footer-info">
          {/* About Section */}
          <div className="footer-about">
            <h4>Hubnex Labs</h4>
            <p>
              We are a leading IT consultancy with expertise in innovative
              solutions for modern challenges. Our client-centric approach
              enables us to design tailored solutions that keep businesses ahead
              in the ever-evolving digital landscape.
            </p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">For Partners</a></li>
              </ul>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li><a href="#">Grievance Redressal Policy</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Insights</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© Copyright 2024, All Rights Reserved by Hubnex Labs</p>
      </div>
    </footer>
  );
};

export default Footer;
