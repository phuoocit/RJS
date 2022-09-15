import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import {
  Button,
  Label,
  Col,
  Modal,
  Row,
  ModalBody,
  ModalHeader,
  Breadcrumb,
  BreadcrumbItem,
  ModalFooter,
  Input,
} from "reactstrap";
import { LocalForm, Errors, Control } from "react-redux-form";
import { required, minLength, maxLength, isNumber } from "./constants";
import * as ActionTypes from "../context/actions";
import { DishContext } from "./DishContext";
import { useStateValue } from "../context/StateContext";
function Menu() {
  const [open, setOpen] = useState(false);
  const { dishes, dispatch } = useStateValue();
  const dishContext = useContext(DishContext);

  const staff = {
    id: dishes.length,
    image: "/assets/images/alberto.png",
    label: "New",
  };
  const handleSubmit = (values) => {
    const newStaff = { ...staff, ...values };
    dispatch({
      type: ActionTypes.ADD_DISHES,
      payload: newStaff,
    });
    setOpen(false);
    return newStaff;
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/Home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="d-flex justify-content-between border-bottom">
        <h3 className="mt-2">Menu</h3>
        <Button
          color="primary"
          className="p-2 fs-4"
          onClick={() => setOpen(true)}
        >
          <i className="fa fa-folder-plus fa-lg"></i>
        </Button>

        <Modal isOpen={open} toggle={() => setOpen(false)}>
          <ModalHeader toggle={() => setOpen(false)}>
            Thêm nhân viên
          </ModalHeader>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <ModalBody>
              <Row className="form-group mb-2">
                <Label md={4} htmlFor="name">
                  Name:
                </Label>
                <Col>
                  <Control.text
                    md={8}
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Dish name..."
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
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
                <Label md={4} htmlFor="price">
                  Price:
                </Label>
                <Col>
                  <Control.text
                    md={8}
                    model=".price"
                    id="price"
                    name="price"
                    type="number"
                    className="form-control"
                    validators={{
                      required,
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".price"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>

              <Row className="form-group mb-2">
                <Label htmlFor="description" md={4}>
                  Your Feedback
                </Label>
                <Col>
                  <Input
                    id="description"
                    name="description"
                    type="textarea"
                    rows="8"
                    onChange={(e) => (staff.description = e.target.value)}
                  />
                  <Errors
                    className="text-danger"
                    model=".description"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">
                Add Dish
              </Button>
              <Button color="secondary" onClick={() => setOpen(false)}>
                Đóng
              </Button>
            </ModalFooter>
          </LocalForm>
        </Modal>
      </div>
      <ul className="row g-2 mt-2">
        {dishes.map((dish, index) => (
          <li className="col-6 mt-5 d-flex" key={dish.id}>
            <Link
              to={`/Dish/${dish.id}`}
              className="col-11 d-flex"
              onClick={(e) => {
                dishContext.handleCilck(dish);
              }}
            >
              <div className="col-6 border rounded p-2 text-center d-flex justify-content-evenly align-items-center">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="img-fluid col-5"
                />
              </div>
              <div className="col-6 border rounded p-2 text-center">
                <h5>{dish.name}</h5>
                <p>{dish.description}</p>
              </div>
            </Link>
            <Button
              className="col-1 border rounded p-2 text-center"
              color="danger"
              onClick={() =>
                dispatch({
                  type: ActionTypes.DELETE_DISHES,
                  payload: index,
                })
              }
            >
              &times;
            </Button>
          </li>
        ))}
      </ul>
      {/* {openComment && (
        <ul className="row g-2 mt-2">
          <li className="col-6 mt-5 d-flex border rounded justify-content-evenly">
            <img src={menu.image} alt={menu.name} className="img-fluid" />
          </li>
          <li className="col-6 mt-5">
            <div className="border rounded p-2">
              <h3>Comments</h3>
              <ul>
                {comment.map((comments) => (
                  <li key={comments.id}>
                    <p>{comments.comment}</p>
                    <p>
                      -- {comments.author},{" "}
                      {dateFormat(comments.date, "mediumDate")}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      )} */}
    </div>
  );
}
export default Menu;
