// FooterMain.js
import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import "../styles/Footer.css";

const FooterMain = () => {
  return (
    <Footer bgDark>
      <div className="footer-container">
        <div className="footer-section">
          <Footer.Title title="Company" />
          <div className="footer-link-group">
            <a href="#" className="footer-link">
              About
            </a><br></br>
            <a href="#" className="footer-link">
              Careers
            </a><br></br>
            <a href="#" className="footer-link">
              Brand Center
            </a><br></br>
            <a href="#" className="footer-link">
              Blog
            </a><br></br>
            <a href="#" className="footer-link">
              ICare
            </a><br></br>
          </div>
        </div>
        <div className="footer-section">
          <Footer.Title title="Help Center" />
          <div className="footer-link-group">
            <a href="#" className="footer-link">
              Discord Server
            </a><br></br>
            <a href="#" className="footer-link">
              Twitter
            </a><br></br>
            <a href="#" className="footer-link">
              Facebook
            </a><br></br>
            <a href="#" className="footer-link">
              Contact Us
            </a><br></br>
          </div>
        </div>
        <div className="footer-section">
          <Footer.Title title="Legal" />
          <div className="footer-link-group">
            <a href="#" className="footer-link">
              Privacy Policy
            </a><br></br>
            <a href="#" className="footer-link">
              Licensing
            </a><br></br>
            <a href="#" className="footer-link">
              Terms & Conditions
            </a><br></br>
          </div>
        </div>
        <div className="footer-section">
          <Footer.Title title="Download" />
          <div className="footer-link-group">
            <a href="#" className="footer-link">
              iOS
            </a><br></br>
            <a href="#" className="footer-link">
              Android
            </a><br></br>
            <a href="#" className="footer-link">
              Windows
            </a><br></br>
            <a href="#" className="footer-link">
              MacOS
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">© 2024 I Care</div>
        <div className="footer-social-icons">
          <Footer.Icon
            href="#"
            icon={BsFacebook}
            className="footer-icon"
          />
          <Footer.Icon
            href="#"
            icon={BsInstagram}
            className="footer-icon"
          />
          <Footer.Icon
            href="#"
            icon={BsTwitter}
            className="footer-icon"
          />
          <Footer.Icon
            href="#"
            icon={BsGithub}
            className="footer-icon"
          />
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;