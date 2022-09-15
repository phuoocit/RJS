import * as ActionTypes from "./actions";

export const initialState = {
  dishes: [],
  leaders: [],
  promotions: [],
  comments: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_DISHES:
      return {
        ...state,
        dishes: [...action.payload],
      };
    case ActionTypes.LOADING_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };
    case ActionTypes.LOADING_LEADERS:
      return {
        ...state,
        leaders: [...action.payload],
      };
    case ActionTypes.LOADING_PROMOTIONS:
      return {
        ...state,
        promotions: [...action.payload],
      };
    case ActionTypes.ADD_DISHES:
      const addDishes = [...state.dishes, action.payload];
      return {
        ...state,
        dishes: addDishes,
      };
    case ActionTypes.DELETE_DISHES:
      const newdishes = [...state.dishes];
      newdishes.splice(action.payload, 1);
      return {
        ...state,
        dishes: newdishes,
      };
    default:
      throw new Error("Invalid action!");
  }
};

export default reducer;
