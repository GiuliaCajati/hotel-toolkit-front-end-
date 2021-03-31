import React, { useState } from 'react';
import {  useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../actions';
//addTask, event, dates, departments

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
      margin: theme.spacing(2),
      minWidth: 200,
      maxWidth: 200,
    }
}));

  const handleChange = (event) => {
    let {id , value} = event.target   
    if(value === 0 ){
    value = event.target.getAttribute("data-value")
    }
}

export default function AddDateDetails() {
   
  const classes = useStyles();
  const departments = useSelector(state => state.departments)
  const event = useSelector(state => state.event)
  const dates = useSelector(state => state.dates)
  const dispatch = useDispatch()
  const history = useHistory()
  //debugger

  //Setting State for create new user 
  const [state , setState] = useState({
    date_info_id: "", //might add date 
    event_id: event[0].id,
    department_id: null,
    details: ""
  })


  const handleChange = (event) => {
    let {id , value} = event.target 
    if(value === 0 ){
        value = event.target.getAttribute("data-value")
        }  
    setState(prevState => ({
        ...prevState,
        [id] : value,
    }))
  }

  const submitTask = (e) => {
    e.preventDefault();

    let newTask = {
      department_id: state.department_id,
      event_id: state.event_id, 
      certificate: false,
      project: false,
      date_info_id: state.date_info_id,
      details: state.details
    }

    dispatch(addTask(newTask))
    history.push(`/events/${event.id}`)
  }

  return (
  
    <Paper className={classes.paper}>
      <div>
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2}>
            Add Task
        </Typography>
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
        
          {/* Drop down  */}
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Department</InputLabel>
            <Select defaultValue="" id="grouped-select">
                {departments.map(
                (department)=>            
                  <MenuItem 
                  value={department.id}
                  id="department_id" 
                  onClick={handleChange}>{department.name}
                  </MenuItem>)}
            </Select>
        </FormControl>
       
              <TextField
                variant="outlined"
                required
                fullWidth
                name="details"
                label="Task Details"
                type="details"
                id="details"
                onChange={handleChange} 
              />
                  
        </form>
        <Button
            style={{minWidth: '200px'}}
            type="submit"
            variant="contained"
            className={classes.submit}
            onClick={submitTask}
          >
            Add Task
          </Button>
        </div>
    </Paper>
  );
}