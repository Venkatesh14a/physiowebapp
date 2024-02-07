function Header() {
    return (
        <>
        <div className="header-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <span className="text-block time-block">  
                                <span className="time-text">Mon to Sat: <strong>5pm -9pm</strong> - Sunday: <strong>10am - 1pm</strong></span>
                    </span>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8  col-xs-12">
                    <div className="top-text">
                        <span className="text-block call-block"> 
                               <span className="call-no">+91 90000 95336</span>
                        </span>
                        <span className="text-block mail-block hidden-xs hidden-sm">  
                                <span className="mail-text">info@yourdomain.com</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <a href="#"><img src="src/assets/images/dr.logo-3.png" alt=""/></a>
                </div>
                <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
                     <div className="navigation">
                        <div id="navigation">
                            <ul>
                                <li className="active"><a href="index.html" title="Home">Home</a></li>
                               
                                <li className="has-sub"><a href="service-list.html" title="Service List">Service List</a>
                                    <ul>
                                        <li><a href="service-list.html" title="Service List">Service List</a></li>
                                        <li><a href="service-detail.html" title="Service Detail">Service Detail</a></li>
                                    </ul>
                                </li>
                                <li className="has-sub"><a href="blog-default.html" title="Blog">News</a>
                                    <ul>
                                        <li><a href="blog-default.html" title="Blog" >Blog Default</a></li>
                                        <li><a href="blog-single.html" title="Blog Single" >Blog Single</a></li>
                                    </ul>
                                </li>
                                 <li><a href="#" title="Features">Features</a></li>
                                <li><a href="contact.html" title="Contact Us">Contact</a> </li>
                                <li><a href="styleguide.html" title="Styleguide">styleguide</a> </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
        </>
      )
    }

export default Header;