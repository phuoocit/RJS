import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateContext";
import imgLogo from "../../assets/images/logo.png";
import { SearchContext } from "../../pages/SearchContext";
import {
  Nav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  ModalFooter,
} from "reactstrap";
import { LocalForm} from "react-redux-form";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);
  const [changeForm, setChangeForm] = useState("ĐĂNG NHẬP");
  const { fetchStaff } = useStateValue();
  const searchContext = useContext(SearchContext);
  const handleSubmit = (value) => {
    console.log(value);
  };
  const handleChangeForm = (value) => {
    if (value === "ĐĂNG KÝ")
      return (
        <div className="mb-2">
          <Input type="password" placeholder="Nhập lại mật khẩu của bạn" />
        </div>
      );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link to="/">
            <img src={imgLogo} width="40" alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              id="nav-tab"
              role="tablist"
            >
              <li className="nav-item" name="Home">
                <Link to="/Home" className="nav-link" aria-selected="true">
                  <i className="fa fa-home fa-lg m-1"></i>
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                name="dishes"
                onClick={(e) => fetchStaff("dishes")}
              >
                <Link to="/" className="nav-link" aria-selected="false">
                  <i className="fa fa-list fa-lg m-1"></i>
                  Menu
                </Link>
              </li>
              <li className="nav-item" name="About">
                <Link to="/About" className="nav-link" aria-selected="false">
                  <i className="fa fa fa-info fa-lg m-1"></i>
                  About Us
                </Link>
              </li>
              <li className="nav-item" name="Contact">
                <Link to="/Contact" className="nav-link" aria-selected="false">
                  <i className="fa fa fa-address-card fa-lg m-1"></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <Input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchContext.searchInput}
              onChange={(e) => searchContext.handleSearch(e.target.value)}
            />
            <Link
              to={`/Search/${searchContext.searchInput}`}
              className="btn btn-success"
              type="submit"
            >
              Search
            </Link>
          </form>
          <Nav className="ms-2" navbar>
            <NavItem>
              <button
                className="btn btn-success"
                onClick={() => setOpen(true)}
                style={{ color: "white" }}
              >
                <span className="fa fa-sign-in fa-lg"></span> Login
              </button>
              <Modal isOpen={open} toggle={() => setOpen(false)}>
                <ModalHeader toggle={() => setOpen(false)}>
                  {changeForm}
                </ModalHeader>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                  <ModalBody>
                    <div className="auth">
                      <div>
                        <div className="d-flex align-items-center justify-content-between border-bottom mb-2 pb-2">
                          <button
                            onClick={(e) => setChangeForm("ĐĂNG NHẬP")}
                            className="btn btn-danger"
                          >
                            ĐĂNG NHẬP
                          </button>
                          <button
                            onClick={(e) => setChangeForm("ĐĂNG KÝ")}
                            className="btn btn-primary"
                          >
                            ĐĂNG KÝ
                          </button>
                        </div>
                        <div className="auth__body">
                          <div className="mb-2">
                            <Input
                              type="text"
                              placeholder="Nhập Email của bạn"
                            />
                          </div>
                          <div className="mb-2">
                            <Input
                              type="password"
                              placeholder="Mật khẩu của bạn"
                            />
                          </div>
                          {handleChangeForm(changeForm)}
                        </div>
                        <div className="d-flex justify-content-between">
                          <a href="/" className="auth__help-link primary-color">
                            Quên mật khẩu
                          </a>
                          <a href="/" className="auth__help-link">
                            Cần trợ giúp?
                          </a>
                        </div>
                      </div>
                      <div className="py-2 container text-center">
                        <div className="row">
                          <button className="btn btn-success col">
                            <i className="auth__footer-icon fab fa-facebook-square"></i>
                            <span className="auth__footer-text">
                              Kết nối với Facebook
                            </span>
                          </button>
                          <button className="btn btn-primary col">
                            <i className="auth__footer-icon fab fa-google"></i>
                            <span className="auth__footer-text">
                              Kết nối với Google
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit" color="primary">
                      {changeForm}
                    </Button>
                    <Button color="secondary" onClick={() => setOpen(false)}>
                      TRỞ LẠI
                    </Button>
                  </ModalFooter>
                </LocalForm>
              </Modal>
            </NavItem>
          </Nav>
        </div>
      </nav>
      <div className="jumbotron mb-2">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
