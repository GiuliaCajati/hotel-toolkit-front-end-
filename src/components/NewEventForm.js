import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';//display 
import { addEvent } from '../actions';
import {  useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
    // display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      marginLeft: '20%',
      overflow: 'auto',
      height: 400
      // overflow: 'auto',
    },
    form: {
      marginLeft: '10%',
      marginTop: '10%',
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    //calandar
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(35),
      width: 150,
    },
    //drop down
    formControl: {
      margin: theme.spacing(10),
      minWidth: 300,
    },
    title: {
      marginBottom: theme.spacing(5),
      fontFamily: "serif",
    }
    
}));

  //Input fealds (setting state)
  const handleChange = (event) => {
    let {id , value} = event.target   
    if(value === 0 ){
    value = event.target.getAttribute("data-value")
    }
}

export default function NewEventForm() {
  const classes = useStyles();
  const departments = useSelector(state => state.departments)
  const dispatch = useDispatch()
  const history = useHistory()

  //Setting State for create new user 
  const [state , setState] = useState({
    name: "",
    number_of_attendees: "",
    date_info_id: "",
  })



  const handleChange = (event) => {
    const {id , value} = event.target   
    setState(prevState => ({
        ...prevState,
        [id] : value,
    }))
  }

  const submitEvent = (e) => {
    e.preventDefault();

    let newEvent = {
      name: state.name,
      importance: state.importance,
      number_of_attendees: state.number_of_attendees
    }
    dispatch(addEvent(newEvent))
    history.push(`/events/`)
    //resturn to the show page
  }

  return ( 
    <Paper className={classes.paper}> 
      <div>
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2} className={classes.title}>
            Add Event
        </Typography>
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Event Name"
                autoFocus
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="number_of_attendees"
                label="Attendees"
                name="number_of_attendees"
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="importance"
                label="Importance"
                name="importance"
                autoComplete="importance"
                onChange={handleChange} 
              />
            </Grid>

            <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={submitEvent}
          >
            Add Event
          </Button>
  
          </Grid>
        </form>
        </div>
    </Paper>
  );
}