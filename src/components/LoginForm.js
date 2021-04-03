import React, { useState } from 'react';
import {  useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { setLoginState } from '../actions';
//setLoginState,currentUser

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    marginLeft: '35%',
    overflow: 'auto',
    height: 300
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(3),
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  font: {
    fontFamily: "serif"
  }
  
}));

export default function LoginForm() {
  const classes = useStyles();
  const currentUser = useSelector(state => state.currentUser)
  const history = useHistory()
  const dispatch = useDispatch()

    const [state , setState] = useState({
    //Setting State for create new user 
    name: "",
    password: "",
    badLogin: false
  })

  //User text field (setting state)
  const handleChange = (event) => {
    const {id , value} = event.target   
    setState(prevState => ({
        ...prevState,
        [id] : value,
    }))
   
  }

  const handleSubmitClick = async (event) => {
    event.preventDefault();
    let user = {
        name: state.name,
        password: state.password
    }
    dispatch(setLoginState(user))
      //22Star!!
      debugger
    history.push('/welcome')
    
    }



  return (
<Paper className={classes.paper}>  
        <Typography component="h1" variant="h5" id="login" className={classes.font}>
          <b>Login</b>
        </Typography>
        <form className={classes.form} noValidate >
          <TextField
          className={classes.text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
              type="submit"
              fullWidth
              className={classes.font}
              variant="contained"
              className={classes.submit}
              className="btn btn-primary"
              onClick={handleSubmitClick}
          >
            Sign In
          </Button>
        </form>
  
    </Paper> 
  );
}