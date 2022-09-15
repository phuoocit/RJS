import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { useStateValue } from "../context/StateContext";
import { SearchContext } from "./SearchContext";
import { DishContext } from "./DishContext";

function Searchpage() {
  const { dishes } = useStateValue();
  const dishContext = useContext(DishContext);
  const searchContext = useContext(SearchContext);
  const searchList = dishes.filter((dish) => {
    return dish.name.toLowerCase().includes(searchContext.searchInput);
  });

  return (
    <div className="container overflow-hidden">
      <h3 className="border-bottom p-2">{`Search/ ${searchContext.searchInput}`}</h3>
      <ul className="row g-2 mt-2">
        {searchList.map((dish, index) => (
          <li className="col-6 d-flex" key={dish.id}>
            <Link
              to={`/Dish/${dish.id}`}
              className="col-12 d-flex"
              onClick={(e) => {
                dishContext.handleCilck(dish);
              }}
            >
              <div className="col-6 border rounded p-2 text-center d-flex justify-content-evenly align-items-center">
                <img
                  src={`../${dish.image}`}
                  alt={dish.name}
                  className="img-fluid col-5"
                />
              </div>
              <div className="col-6 border rounded p-2 text-center">
                <h5>{dish.name}</h5>
                <p>{dish.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Searchpage;
