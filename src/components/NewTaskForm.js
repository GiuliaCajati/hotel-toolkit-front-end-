import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';//display 
import { addTask } from '../actions';
import {  useHistory } from "react-router-dom";
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      marginLeft: '20%',
      overflow: 'auto',
      height: 500
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
    //drop down
    formControl: {
      margin: theme.spacing(3),
      minWidth: 200,
      maxWidth: 200,
    }, root: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    icon: {
      borderRadius: '50%',
      width: 16,
      height: 16,
      marginLeft: 30,
      marginTop: -5,
      marginBottom: 5,
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
      backgroundColor: '#f5f8fa',
      backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
      '$root.Mui-focusVisible &': {
        outline: '2px auto rgba(19,124,189,.6)',
        outlineOffset: 2,
      },
      'input:hover ~ &': {
        backgroundColor: '#ebf1f5',
      },
      'input:disabled ~ &': {
        boxShadow: 'none',
        background: 'rgba(206,217,224,.5)',
      },
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

  //Input fealds (setting state)
  const handleChange = (event) => {
    let {id , value} = event.target   
    if(value === 0 ){
    value = event.target.getAttribute("data-value")
    }
}

export default function AddDateDetails() {
  const classes = useStyles();
  const dates = useSelector(state => state.dates)
  const teamMembers = useSelector(state => state.teamMembers)
  const dispatch = useDispatch()
  const history = useHistory()

  //PROJECT, GUEST FOLLOW-UP, CERTIFICATE
  const [state , setState] = useState({
    team_member_id: "",
    certificate: false,
    project: false,
    guest_follow_up: false,
    date_info_id: "", //might add date 
    status: false,
    details: "",
    notes: ""
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
  const handleRadio = (event) => {
    let { value, checked } = event.target 
    setState(prevState => ({
        ...prevState,
        [value] : checked,
    }))
  }

  const submitTask = (e) => { 
    e.preventDefault();
    let newTask = {
      team_member_id: state.team_member_id,
      certificate: state.certificate,
      project: state.project,
      guest_follow_up: state.guest_follow_up,
      date_info_id: state.date_info_id, //might add date 
      status: state.status,
      //department_id: null,
      details: state.details,
      notes: ""
    }
    dispatch(addTask(newTask))
    history.push(`/home`)
  }

    // Inspired by blueprintjs
    function StyledRadio(props) {
      const classes = useStyles();
      return (
        <Radio
          className={classes.root}
          disableRipple
          color="default"
          checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
          icon={<span className={classes.icon} />}
          {...props}
        />
      );
    }

  return (
  
    <Paper className={classes.paper}>
      <div>
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2}>
            Add Task
        </Typography>

        {/* Radio */}
        <div>
        <FormControl component="fieldset">
        <RadioGroup defaultValue="project" name="customized-radios">
            <FormControlLabel id="project" value="project" control={<StyledRadio />} label="Project" onChange={handleRadio}/>
            <FormControlLabel id="guest_follow_up" value="guest_follow_up" control={<StyledRadio />} label="Guest Follow-Up"onChange={handleRadio} />
            <FormControlLabel id="certificate" value="certificate" control={<StyledRadio />} label="Certificate" onChange={handleRadio}/>
        </RadioGroup>
        </FormControl>
        </div>
        

      
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Team Member</InputLabel>
            <Select defaultValue="" id="grouped-select">
                {teamMembers.map(
                (member)=>            
                  <MenuItem 
                  value={member.id}
                  id="team_member_id" 
                  onClick={handleChange}>{member.name}
                  </MenuItem>)}
            </Select>
        </FormControl>
       

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