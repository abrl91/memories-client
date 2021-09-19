import * as api from '../api';

// Actions creators - functions that return an action which is an object that have type and payload properties

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (err) {
        console.log(err.message, '***error from get posts actions');
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data });

    } catch (err) {
        console.log('error from create post action');
    }
}
