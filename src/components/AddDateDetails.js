import React, { useState } from 'react';
import {  useHistory } from "react-router-dom";
import { addDateEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
//addDateEvent, dates, event 

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      marginLeft: '20%',
      overflow: 'auto',
      height: 350
    },
    form: {
      marginLeft: '10%',
      marginTop: '10%',
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(10),
    },
    submit: {
      margin: theme.spacing(3, 5, 3),
    },
    //calandar
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(35),
      width: 150,
    },
    //drop down
    formControl: {
      margin: theme.spacing(5),
      minWidth: 200,
      maxWidth: 200,
    }
}));

  //Input fealds (setting state)
  const handleChange = (event) => {
    let {id , value} = event.target   
    if(value === 0 ){
    value = event.target.getAttribute("data-value")
    }
}

export default function AddDateDetails() {
   
  const classes = useStyles()
  const event = useSelector(state => state.event)
  const dates = useSelector(state => state.dates)
  const dispatch = useDispatch()
  const history = useHistory()

  const [state , setNewUser] = useState({
    date_info_id: "",
    event_id: event[0].id,
    arrivals: "",
    house: "",
    departures: "",
    department_id: null,
    details: ""
  })

  const handleChange = (event) => {
    let {id , value} = event.target 
    if(value === 0 ){
        value = event.target.getAttribute("data-value")
        }  
      setNewUser(prevState => ({
        ...prevState,
        [id] : value,
    }))
  }

  const submitDateEvent = (e) => {
    e.preventDefault();
    let newDateEvent = {   
      date_info_id: state.date_info_id,//drop down 
      event_id: state.event_id,//change
      arrivals: state.arrivals,
      in_house: state.house,
      departures: state.departures
    }
    dispatch(addDateEvent(newDateEvent))
    history.push(`/events/${event.id}`)
  }

  return (
  
    <Paper className={classes.paper}>
      <div>
      
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2}>
            Add Date Details
        </Typography>
       
          <Grid container spacing={2}>
          {/* Drop down  */}
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Dates</InputLabel>
              <Select defaultValue="" id="grouped-select">
                {dates.map((date)=>            
                  <MenuItem 
                  value={date.id}
                  id="date_info_id" 
                  onClick={handleChange}>{date.date}
                  </MenuItem>)}
              </Select>
              </FormControl>
            <Grid item xs={12} sm={2}>
              <TextField
                autoComplete="arrivals"
                name="arrivals"
                variant="outlined"
                required
                fullWidth
                id="arrivals"
                autoFocus
                onChange={handleChange} 
              />
              <FormHelperText>Arrivals</FormHelperText>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                autoComplete="in_house"
                name="in_house"
                variant="outlined"
                required
                fullWidth
                id="house"
                autoFocus
                onChange={handleChange} 
              />
              <FormHelperText>In-house</FormHelperText>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                autoComplete="departures"
                name="departures"
                variant="outlined"
                required
                fullWidth
                id="departures"
                autoFocus
                onChange={handleChange} 
              />
              <FormHelperText>Departures</FormHelperText>
            </Grid>
            <Button
            type="submit"
            variant="contained"
            className={classes.submit}
            style={{minWidth: '260px'}}
            onClick={submitDateEvent}
          >
            Add Date Details
          </Button>
  
          </Grid>
        
        </form>
        </div>
    </Paper>
  );
}