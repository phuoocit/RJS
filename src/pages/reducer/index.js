import { ADD_STAFF, DELETE_STAFF, LOADING_STAFF} from '../constants';
export let initState = [];
const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOADING_STAFF:
            return initState = [...action.payload]
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