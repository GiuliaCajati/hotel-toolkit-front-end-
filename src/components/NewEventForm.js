import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';//display 
import { addEvent } from '../actions';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
    // display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      marginLeft: '20%',
      overflow: 'auto',
      height: 550
      // overflow: 'auto',
    },
    form: {
      marginLeft: '10%',
      marginTop: '10%',
      width: '80%', // Fix IE 11 issue.
      marginTop: theme.spacing(10),
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

  //Setting State for create new user 
  const [state , setState] = useState({
    name: "",
    number_of_attendees: "",
    date_info_id: "",
    // //DateEvent
    // event_id: "",//will only have once event is created
    // arrivals: "",
    // in_house: 0,
    // departures: null,
    // //Task
    // department_id: null,
    // event_id: null, //will only have once event is created
    // certificate: false,
    // project:false,
    // details: ""
  })



  const handleChange = (event) => {
    const {id , value} = event.target   
    setState(prevState => ({
        ...prevState,
        [id] : value,
    }))
  }

  const addEvent = (event) => {
    event.preventDefault();

    let newEvent = {
      name: state.name,
      importance: state.importance,
      number_of_attendees: state.number_of_attendees
    }
    dispatch(addEvent(newEvent))
  }

  const addDateEvent = (event) => {
    event.preventDefault();
    let newDateEvent = {
      // name: state.name,
      // importance: state.importance,
      // number_of_attendees: state.number_of_attendees
    }
    //dispatch(addDateEvent(newDateEvent))
  }

  const addTask = (event) => {
    event.preventDefault();
    let newTask = {
      // name: state.name,
      // importance: state.importance,
      // number_of_attendees: state.number_of_attendees
    }
    //dispatch(addTask(newTask))
  }

  const addVip = (event) => {
    event.preventDefault();
  }

  return (

    
    <Paper className={classes.paper}>
     
      
      {/* Add Event  
      Make Event state 
      send POST request to event URL*/}
      {/* Once Event is added hide top part and show date event */}
      <div>
      
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2}>
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
            onClick={addEvent}
          >
            Add Event
          </Button>

          {/* Once Event is Added show date event */}
             <Grid item xs={12} sm={6}>
            <TextField
                id="start_date"
                label="Start Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleChange} 
            />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                autoFocus
                onChange={handleChange} 
              />
              <FormHelperText>Arrivals</FormHelperText>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                autoFocus
                onChange={handleChange} 
              />
              <FormHelperText>In-house</FormHelperText>
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                autoFocus
                onChange={handleChange} 
              />
              <FormHelperText>Departures</FormHelperText>
            </Grid>
            <Button
            type="submit"
            variant="contained"
            className={classes.submit}
            style={{minWidth: '250px'}}
            onClick={addDateEvent}
          >
            Add Date
          </Button>
          

          <Button
            style={{minWidth: '250px'}}
            type="submit"
            variant="contained"
            className={classes.submit}
            //onClick={renderTasks}
          >
            Go to Task
          </Button>
  
      {/* button/ function to add more  */}
      {/* add task  */}
      {/* add VIPS */}

          <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="details"
                label="Task Details"
                type="details"
                id="details"
              />
            </Grid>
          </Grid>
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






          
        
        </form>
        </div>
    </Paper>
  );
}