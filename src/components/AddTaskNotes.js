import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';//display 
import { addTaskNotes } from '../actions';
import {  useHistory } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
    // display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      marginLeft: '20%',
      overflow: 'auto',
      height: 500
      // overflow: 'auto',
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
    checkedIcon: {
      backgroundColor: '#137cbd',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
        content: '""',
      },
      'input:hover ~ &': {
        backgroundColor: '#106ba3',
      },
    },
}));


export default function AddDateDetails() {
  const classes = useStyles();
  const task = useSelector(state => state.task)
  const dispatch = useDispatch()
  const history = useHistory()

  //PROJECT, GUEST FOLLOW-UP, CERTIFICATE
  const [state , setState] = useState({
    // department_id: null,
    // event_id: null,
    //team_member_id: currentUser[0].id,
    certificate: false,
    project: false,
    guest_follow_up: false,
    //date_info_id: "", //might add date 
    status: false,//change this 
    //department_id: null,
    notes: ""
  })

  const handleCheckChange = (event) => {
    let {value , checked } = event.target 
    setState(prevState => ({
        ...prevState,
        [value] : checked,
    }))
  }

  const handleChange = (event) => {
    let {id , value} = event.target 
    setState(prevState => ({
        ...prevState,
        [id] : value,
    }))
  }
 
  const submitTask = (e) => { 
    e.preventDefault();
    let newTask = {
      notes: state.notes,
      status: state.status,
    }
    dispatch(addTaskNotes(task[0].id,newTask))
    history.push(`/tasks/${task.id}`)
  }  

  return (
  
    <Paper className={classes.paper}>
      <div>
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2}>
        Add Notes
        </Typography>
            <div>{task[0].details}</div>
        {/* Check Box */}
        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Complete"
          labelPlacement="right"
          value="status"
          id="status"
          onChange={handleCheckChange} 
        />
        
        {/* //event.target.checked */}
              <TextField
                variant="outlined"
                required
                fullWidth
                name="notes"
                label="Task Notes"
                type="notes"
                id="notes"
                
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
            Add Notes
          </Button>
        </div>
    </Paper>
  );
}