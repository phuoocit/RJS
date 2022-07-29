import React, { createContext, useContext, useReducer, useEffect } from 'react';

import reducer, { initialState } from "./reducer";
import * as ActionTypes from "./actions";
import logger from '../pages/logger';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
  useEffect(() => {
    fetchStaff('staffs')
  }, [])
  const fetchStaff = (type) => {
    fetch(`https://rjs101xbackend.herokuapp.com/${type}`)
      .then((res) => res.json())
      .then((staffs) => {
        switch (type) {
          case 'staffs':
            dispatch({
              type: ActionTypes.LOADING_STAFF,
              payload: staffs
            });
            break;
          case 'departments':
            dispatch({
              type: ActionTypes.LOADING_DEPARTMENT,
              payload: staffs
            });
            break;
          case 'staffsSalary':
            dispatch({
              type: ActionTypes.LOADING_SALARYSHEET,
              payload: staffs
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
        state
      }}
    >
      {children}
    </StateContext.Provider>
  )
};

export const useStateValue = () => useContext(StateContext);