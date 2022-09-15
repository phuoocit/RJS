import React from "react";
import { Button, Label, Col, Row, Input } from "reactstrap";
import {
  required,
  minLength,
  maxLength,
  isNumber,
  validEmail,
} from "./constants";
import { Errors, Control, LocalForm } from "react-redux-form";

function Contact(props) {
  const state = {
    firstname: "",
    lastname: "",
    telnum: "",
    email: "",
    agree: false,
    contactType: "Tel.",
    message: "",
  };
  const handleSubmit = (values) => {
    const newState = { ...state, ...values };
    console.log("Current State is: " + JSON.stringify(newState));
    alert("Current State is: " + JSON.stringify(newState));
    return newState;
  };
  return (
    <div className="container">
      <div className="row row-content border-bottom">
        <div className="col-12">
          <h3 className="border-bottom pb-2">Contact us</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info" href="/">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content border-bottom">
        <div className="col-12">
          <h3 className="border-bottom pb-2">Send us Your Feedback</h3>
        </div>
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
          <Row className="form-group mb-2">
            <Label md={2} htmlFor="firstname">
              First Name:
            </Label>
            <Col>
              <Control.text
                md={10}
                model=".firstname"
                id="firstname"
                name="firstname"
                placeholder="First name..."
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".firstname"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 2 characters",
                  maxLength: "Must be 15 characters or less",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group mb-2">
            <Label md={2} htmlFor="lastname">
              Last Name:
            </Label>
            <Col>
              <Control.text
                md={10}
                model=".lastname"
                id="lastname"
                name="lastname"
                placeholder="Last name..."
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 2 characters",
                  maxLength: "Must be 15 characters or less",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group mb-2">
            <Label md={2} htmlFor="telnum">
              Contact Tel.
            </Label>
            <Col>
              <Control.text
                md={10}
                model=".telnum"
                id="telnum"
                name="telnum"
                placeholder="Tel. number"
                className="form-control"
                type="number"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                  isNumber,
                }}
              />
              <Errors
                className="text-danger"
                model=".telnum"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 2 numbers",
                  maxLength: "Must be 15 numbers or less",
                  isNumber: "Must be a number",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group mb-2">
            <Label md={2} htmlFor="email">
              Email:
            </Label>
            <Col>
              <Control.text
                md={10}
                model=".email"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className="form-control"
                validators={{
                  required,
                  validEmail,
                }}
              />
              <Errors
                className="text-danger"
                model=".email"
                show="touched"
                messages={{
                  required: "Required",
                  validEmail: "Invalid Email Address",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group mb-2">
            <Col md={{ size: 6, offset: 2 }}>
              <Row>
                <Label>
                  <Input
                    type="checkbox"
                    name="checkbox"
                    onChange={(e) => state.agree(e.target.checked)}
                  />{" "}
                  <strong>May we contact you?</strong>
                </Label>
              </Row>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Control.select
                type="select"
                name="contactType"
                model="contactType"
                className="form-control"
                id="contactType"
                onChange={(e) => (state.contactType = e.target.value)}
              >
                <option>Tel.</option>
                <option>Email</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group mb-2">
            <Label htmlFor="message" md={2}>
              Your Feedback
            </Label>
            <Col>
              <Input id="message" name="message" type="textarea" rows='12' onChange={e => (state.message = e.target.value)}/>
            </Col>
          </Row>
          <Row className="form-group mb-2">
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                Send Feedback
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </div>
    </div>
  );
}

export default Contact;
