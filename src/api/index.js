import axios from 'axios';

const url = 'http://localhost:5001/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPostData) => axios.post(url, newPostData);

export const updatePost = (postId, updatedPostData) => axios.put(`${url}/${postId}`, updatedPostData);

export const deletePost = (postId) => axios.delete(`${url}/${postId}`);

export const likePost = (postId) => axios.patch(`${url}/${postId}/likePost`);
