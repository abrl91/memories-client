import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {deletePost, likePost} from "../../../actions/posts";
import {useDispatch} from "react-redux";
import Likes from "./Likes";

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const { _id, name, title, message, tags, selectedFile, createdAt, likeCount } = post;
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const deletePostHandler = () => {
        dispatch(deletePost(_id));
    }

    const likePostHandler = () => {
        dispatch(likePost(_id));
    }

    return <Card className={classes.card}>
        <CardMedia className={classes.media} image={selectedFile} title={title}/>
        <div className={classes.overlay}>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            {((user?.result?.googleId === post?.creator) || (user?.result?._id === post?.creator)) && (
            <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(_id)}>
                <MoreHorizIcon fontSize="medium" />
            </Button>
            )}
        </div>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{tags.map(tag => `#${tag}`)}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{title}</Typography>
        <CardContent>
            <Typography  variant="body2" color="textSecondary" component="p">{message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={likePostHandler} disabled={!user?.result}>
               <Likes post={post}/>
            </Button>
            {((user?.result?.googleId === post?.creator) || (user?.result?._id === post?.creator)) && (
            <Button size="small" color="primary" onClick={deletePostHandler}>
                <DeleteIcon fontSize="small" />
                Delete
            </Button>
            )}
        </CardActions>
    </Card>
}

export default Post;
