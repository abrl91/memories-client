import {Fragment} from "react";
import Post from "./Post/Post";
import useStyles from './styles';
import {useSelector} from "react-redux";

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts);
    console.log(posts);

    return <Fragment>
        <h1>Posts</h1>
        <Post />
    </Fragment>
}

export default Posts;
