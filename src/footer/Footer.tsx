import "./Footer.css";
// import footerLogo from "../assets/logo.jpg";
import googlePlay from "../assets/PlayStore.png";
import appStore from "../assets/AppStore.png";
import TalkifyLogo from '../assets/talkify.svg'; // Adjust the path as necessary

const Footer = () => {
  return (
    <div className="footer">
 
      <div className="container">
      <hr />
        <div className="row mt-5">
          <div className="col-sm-4 footer-col me-5">
            <div>
              <img src={TalkifyLogo} alt="Talkify Logo" className="footer_logo" />
            </div>
           
            <div className="footer-subscribe">
            <p>
              Subscribe to stay updated with the latest features, AI tools, and platform announcements from Talkify.
            </p>
              <div className="d-flex gap-2 mb-2">
                <input
                  type="email"
                  className="form-control-3 form-control-3-sm py-1 footer_form"
                  placeholder="Enter your email"
                  aria-label="Email subscription"
                  style={{ width: "270px" }}
                />
                <button className="btn subscribe_but-2 btn-primary">
                  <i className="fa-light fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>


          <div className="col-sm">
            <h5 className="fw-bold mb-4">Platform</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Features</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Pricing</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Documentation</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Integrations</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Changelog</a></li>
            </ul>
          </div>

          <div className="col-sm">
            <h5 className="fw-bold mb-4">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Blog</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Tutorials</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Help Center</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Community</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">FAQs</a></li>
            </ul>
          </div>

          <div className="col-sm">
            <h5 className="fw-bold mb-4">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">About Us</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Careers</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Press</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Contact</a></li>
            </ul>
          </div>

          <div className="col-sm">
            <h5 className="fw-bold mb-4">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Privacy Policy</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Terms of Use</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Cookies Policy</a></li>
              <li className="mb-3"><a href="#" className="text-decoration-none text-dark">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <h5 className="fw-bold mb-4">Follow Us</h5>
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-dark"><i className="fa-brands fa-x-twitter fa-2xl"></i></a>
                <a href="#" className="text-dark"><i className="fa-brands fa-github fa-2xl"></i></a>
                <a href="#" className="text-dark"><i className="fa-brands fa-discord fa-2xl"></i></a>
                <a href="#" className="text-dark"><i className="fa-brands fa-youtube fa-2xl"></i></a>
                <a href="#" className="text-dark"><i className="fa-brands fa-whatsapp fa-2xl"></i></a>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <h5 className="fw-bold mb-4">Download Our App</h5>
              <div className="d-flex justify-content-center gap-3">
                <img src={googlePlay} alt="Google Play" style={{ height: "40px" }} />
                <img src={appStore} alt="App Store" style={{ height: "40px" }} />
              </div>
            </div>

            <div className="col-md-4 text-center">
              <h5 className="fw-bold mb-4">Contact Us</h5>
              <p className="mb-2">support@talkify.com</p>
              <p className="mb-0">+91 (020) 123-4567</p>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-between align-items-center py-2">
          <div>
            <a href="#" className="text-decoration-none text-dark me-3">Privacy Policy</a>
            <a href="#" className="text-decoration-none text-dark">Terms of Use</a>
          </div>
          <div>
            <a href="#" className="text-decoration-none text-dark me-3">Talkify</a>
            <span className="text-dark">© 2025 OMO Digital Pte. Ltd.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
