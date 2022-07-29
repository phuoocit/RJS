import * as ActionTypes from "./actions";

export const initialState = {
    staffs: [],
    departments: [],
    staffsSalary: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.LOADING_STAFF:
            return {
                ...state,
                staffs: [...action.payload]
            }
        case ActionTypes.LOADING_DEPARTMENT:
            return {
                ...state,
                departments: [...action.payload]
            }
        case ActionTypes.LOADING_SALARYSHEET:
            return {
                ...state,
                staffsSalary: [...action.payload]
            }
        case ActionTypes.ADD_STAFF:
            const addStaffs = [...state.staffs, action.payload]
            return {
                ...state,
                staffs: addStaffs,
            }
        case ActionTypes.DELETE_STAFF:
            const newStaffs = [...state.staffs]
            newStaffs.splice(action.payload, 1)
            return {
                ...state,
                staffs: newStaffs,
            }
        default:
            throw new Error('Invalid action!');
    }
}

export default reducer 