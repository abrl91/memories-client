import useStyles from './styles';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import {LockOutlined} from "@material-ui/icons";
import Input from "./Input";

const Auth = () => {
    const classes = useStyles();
    const isSignup = false;

    const submitHandler = () => {

    }

    const handleChange = () => {

    }

    return <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>
            <Typography variant="h5">
                {isSignup && <p>Sign up</p>}
                {!isSignup && <p>Sign In</p>}
            </Typography>
            <form className={classes.form} onSubmit={submitHandler}>
                <Grid container spacing={2}>
                    { isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                    )}
                    <Input name="email" label="Email" type="email" handleChange={handleChange} />
                    <Input name="password" label="Password" type="password" handleChange={handleChange} />
                </Grid>
            </form>
        </Paper>
    </Container>
}

export default Auth;
