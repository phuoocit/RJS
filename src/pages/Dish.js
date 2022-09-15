import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import React, { useContext } from "react";
import { useStateValue } from "../context/StateContext";
import { DishContext } from "./DishContext";

function Dishpage() {
  const { comments } = useStateValue();
  const dishContext = useContext(DishContext);
  const dish = dishContext.dish;
  const commentList = comments.filter((comment) => {
    return comment.dishId === dish.id;
  });
  return (
    <div className="container overflow-hidden">
      <h5 className="d-flex align-items-baseline justify-content-center bg-light col-3 border rounded">
        <Link to="/" className="nav-link">
          Menu \
        </Link>
        <p className="text-black-50">{dish.name}</p>
      </h5>
      <ul className="row g-2 mt-2">
        <div className="col-6 card d-flex align-items-center justify-content-center border rounded">
          <img
            src={`../${dish.image}`}
            alt={dish.name}
            className="img-fluid"
            style={{
              height: "400px",
            }}
          />
        </div>
        <li className="col-6 mt-2">
          <div className="border rounded p-2">
            <h3>Comments</h3>
            <ul>
              {commentList.map((comments) => (
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
    </div>
  );
}
export default Dishpage;
