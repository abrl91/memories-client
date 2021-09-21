import {ACTIONS_CONSTANTS} from "../constants/actionTypes";
const {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} = ACTIONS_CONSTANTS;
// state === posts
const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter(post => post._id !== action.payload);
            return
        default:
            return posts;
    }
}

export default postsReducer;
