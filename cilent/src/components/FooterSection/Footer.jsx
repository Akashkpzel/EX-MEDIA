import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-heading"> ExMedia</h3>
          <p>
            we can shape Your brand story & identites With impact
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li>Email: info@exmedia.in</li>
            <li>Phone: +91 9526123466</li>
            <li>KERALA - UAE</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/exmedia" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/exmedia" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/exmedia" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/exmedia" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} ExMedia. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;