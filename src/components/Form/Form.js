import { useState } from "react";
import {useDispatch} from "react-redux";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase64 from "react-file-base64";
import useStyles from './styles';
import {createPost} from "../../actions/posts";

const Form = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const initialPostState = {
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    }
    const [postData, setPostData] = useState(initialPostState);

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clearFormHandler = () => {
        setPostData(initialPostState);
    }

    return <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handlerSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            <TextField
                name="creator"
                variant="outlined"
                label="Creator"
                fullWidth
                value={postData.creator}
                onChange={(e) => setPostData({...postData, creator: e.target.value})}
            />
            <TextField
                name="title"
                variant="outlined"
                label="Post Title"
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({...postData, title: e.target.value})}
            />
            <TextField
                name="message"
                variant="outlined"
                label="Post Message"
                fullWidth
                value={postData.message}
                onChange={(e) => setPostData({...postData, message: e.target.value})}
            />
            <TextField
                name="tags"
                variant="outlined"
                label="Tags"
                fullWidth
                value={postData.tags}
                onChange={(e) => setPostData({...postData, tags: e.target.value})}
            />
            <div className={classes.fileInput}>
                <FileBase64 type="file" multilple={false} onDone={({ base64 }) => setPostData({...postData, selectedFile: base64})}/>
            </div>
            <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth>
                Submit
            </Button>
            <Button
                onClick={clearFormHandler}
                variant="contained"
                color="secondary"
                size="small"
                fullWidth>
                Clear
            </Button>
        </form>
    </Paper>
}

export default Form;
