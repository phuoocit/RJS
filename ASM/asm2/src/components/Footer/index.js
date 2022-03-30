import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container border">
            <div className="row justify-content-center">             
                <div className="col-7 col-sm-5 g-4">
                    <h5>Our Address</h5>
                    <address>
		              121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon<br />
		              HONG KONG<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-google btn-success" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-facebook btn-primary" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-linkedin btn-secondary" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-twitter btn-warning" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-danger" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-dark" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright Funix</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;