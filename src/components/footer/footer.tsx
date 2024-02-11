function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 hidden">
              <div className="footer-widget widget-newsletter">
                <h2 className="widget-title">Newsletters</h2>
                <p>
                  Enter your email address to receive new patient information
                  and other useful information right to your inbox.
                </p>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Subscribe
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-2 col-xs-12">
              <div className="footer-widget">
                <h2 className="widget-title">Therapies</h2>
                <ul className="listnone">
                  <li>
                    <a href="#">Massage Therapy </a>
                  </li>
                  <li>
                    <a href="#">Physiotherapy</a>
                  </li>
                  <li>
                    <a href="#">Geriatric</a>
                  </li>
                  <li>
                    <a href="#">Rehabilition</a>
                  </li>
                  <li>
                    <a href="#">Diagnostics</a>
                  </li>
                  <li>
                    <a href="#">Acunpuncture</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
              <div className="footer-widget footer-social">
                <h2 className="widget-title">Social Feed</h2>
                <ul className="listnone">
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-facebook"></i> Facebook{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i> Google Plus
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i> Linked In
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <i className="fa fa-youtube"></i>Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-2 col-sm-2 col-xs-12">
              <div className="footer-widget footer-social">
                <h2 className="widget-title">Clinic Address</h2>
                <ul className="listnone contact">
                  <li>
                    <i className="fa fa-map-marker"></i> 8-2-703, 4/A, Road No.
                    12, opp. Asian Vascular Hospital, Sai Enclave, Bhola Nagar,
                    Banjara Hills, Hyderabad, Telangana 500034
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +91 9000095336
                  </li>
                  <li>
                    <i className="fa fa-envelope-o"></i> info@gastrology.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tiny-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="copyright-content">
                Shared by <i className="fa fa-love"></i>
                <a href="https://bootstrapthemes.co">BootstrapThemes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
