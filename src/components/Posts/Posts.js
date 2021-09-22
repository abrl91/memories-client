import {Fragment} from "react";
import Post from "./Post/Post";
import useStyles from './styles';
import {useSelector} from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = ({ setCurrentId  }) => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts);

    return <Fragment>
        {!posts.length && <CircularProgress />}
        {posts.length && (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={12} md={2} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )}
    </Fragment>
}

export default Posts;
