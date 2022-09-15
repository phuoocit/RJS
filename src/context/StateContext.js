import React, { createContext, useContext, useReducer, useEffect } from "react";

import reducer, { initialState } from "./reducer";
import * as ActionTypes from "./actions";
import logger from "../pages/logger";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  useEffect(() => {
    fetchStaff("dishes");
    fetchStaff("comments");
    fetchStaff("promotions");
    fetchStaff("leaders");
  }, []);
  const fetchStaff = (type) => {
    fetch(`http://localhost:3001/${type}`)
      .then((res) => res.json())
      .then((data) => {
        switch (type) {
          case "dishes":
            dispatch({
              type: ActionTypes.LOADING_DISHES,
              payload: data,
            });
            break;
          case "comments":
            dispatch({
              type: ActionTypes.LOADING_COMMENTS,
              payload: data,
            });
            break;
          case "leaders":
            dispatch({
              type: ActionTypes.LOADING_LEADERS,
              payload: data,
            });
            break;
          case "promotions":
            dispatch({
              type: ActionTypes.LOADING_PROMOTIONS,
              payload: data,
            });
            break;
        }
      });
  };
  return (
    <StateContext.Provider
      value={{
        ...state,
        fetchStaff,
        dispatch,
        state,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
