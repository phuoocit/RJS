import { ADD_STAFF, DELETE_STAFF } from './constants';
import { STAFFS } from './staffs';

export let initState = STAFFS;


// 3.Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ADD_STAFF:
            
            return initState = [...state, action.payload]
        case DELETE_STAFF:
            const newStaffs = [...state]
            newStaffs.splice(action.payload, 1)
            return newStaffs
        default:
            throw new Error('Invalid action!');
    }
}

export default reducer 