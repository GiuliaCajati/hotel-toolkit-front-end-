import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';//display 
import { addDateEvent } from '../actions';




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
   
  const classes = useStyles();
  const departments = useSelector(state => state.departments)
  const events = useSelector(state => state.events)
  const dates = useSelector(state => state.dates)
  const dispatch = useDispatch()
  //debugger

  //Setting State for create new user 
  const [state , setState] = useState({
    
    // //DateEvent
    date_info_id: "",
    event_id: events["length"] -1,//will only have once event is created
    arrivals: "",
    house: "",
    departures: "",
    // //Task
    // department_id: null,
    // event_id: null, //will only have once event is created
    // details: ""
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


  const submitDateEvent = (event) => {
    event.preventDefault();
    let newDateEvent = {   
      date_info_id: state.date_info_id,//drop down 
      event_id: events["length"] -1,//change
      arrivals: state.arrivals,
      in_house: state.house,
      departures: state.departures
    }
    dispatch(addDateEvent(newDateEvent))
  }

  const addTask = (event) => {
    event.preventDefault();
    let newTask = {
    // department_id: state.department_id,
    // event_id: ..., 
    // certificate: false,
    // project: false,
    // details: state.details
    }
    //dispatch(addTask(newTask))
  }

  const addVip = (event) => {
    event.preventDefault();
    // name: "Beyonce",
    // event_id: birthday.id,
    // show_on_daily: "Beyonce will be arriving at 7pm.",
    // level: "High",
    // img_url: "https://i.imgur.com/D0qvUSk.jpg"
  }

  return (
  
    <Paper className={classes.paper}>
      <div>
      
        <form className={classes.form} noValidate>
        <Typography component="h1" variant="h5" spacing={2}>
            Add Event Details
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
          
          <Button
            style={{minWidth: '200px'}}
            type="submit"
            variant="contained"
            className={classes.submit}
            //onClick={renderTasks}
          >
            Add Task
          </Button>
          </FormControl>






          
        
        </form>
        </div>
    </Paper>
  );
}