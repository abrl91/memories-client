import * as api from '../api';
import {ACTIONS_CONSTANTS} from "../constants/actionTypes";
const {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} = ACTIONS_CONSTANTS;
// Actions creators - functions that return an action which is an object that have type and payload properties

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });

    } catch (err) {
        console.log(err, '***error from get posts actions');
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: CREATE, payload: data });

    } catch (err) {
        console.log(err, 'error from create post action');
    }
}

export const updatePost = (postId, updatedPostData) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(postId, updatedPostData);
        dispatch({type: UPDATE, payload: data});

    } catch (err) {
        console.log(err, 'error from update post action');
    }
}

export const deletePost = (postId) => async (dispatch) => {
    try {
        await api.deletePost(postId);
        dispatch({type: DELETE, payload: postId});

    } catch (err) {
        console.log(err, 'error from delete post action');
    }
}

export const likePost = (postId) => async (dispatch) => {
    try {
        const { data } = await api.likePost(postId);
        dispatch({type: LIKE, payload: data});
    } catch (err) {
        console.log(err, 'error form like post action');
    }
}
