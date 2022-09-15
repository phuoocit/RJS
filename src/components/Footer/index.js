import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateContext";

function Footer(props) {
  const { fetchStaff } = useStateValue();

  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              id="nav-tab"
              role="tablist"
            >
              <li
                className="nav-item"
                name="dishes"
                onClick={(e) => fetchStaff("dishes")}
              >
                <Link to="/Home" className="nav-link" aria-selected="true">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                name="Menu"
              >
                <Link
                  to="/"
                  className="nav-link"
                  aria-selected="false"
                >
                  Menu
                </Link>
              </li>
              <li
                className="nav-item"
                name="staffsSalary"
              >
                <Link
                  to="/Contact"
                  className="nav-link"
                  aria-selected="false"
                >
                  Contact
                </Link>
              </li>
              <li
                className="nav-item"
                name="staffsSalary"
              >
                <Link
                  to="/About"
                  className="nav-link"
                  aria-selected="false"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-google btn-success"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-facebook btn-primary"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-linkedin btn-secondary"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-twitter btn-warning"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-danger" href="http://youtube.com/">
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-dark" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
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
  );
}

export default Footer;
