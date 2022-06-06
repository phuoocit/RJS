import { ADD_STAFF, DELETE_STAFF } from './constants';


export const addStaff = payload => {
    return {
        type: ADD_STAFF,
        payload,
    }
}
export const deleteStaff = payload => {
    return {
        type: DELETE_STAFF,
        payload,
    }
}