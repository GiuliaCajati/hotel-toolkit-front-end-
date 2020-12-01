import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux';//display state 
import { setNewUser } from '../actions';
import Paper from '@material-ui/core/Paper';
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
    height: 500
    // overflow: 'auto',
  },
  form: {
    marginLeft: '15%',
    marginTop: '10%',
    width: '70%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  //calandar
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180,
  },
  //drop down
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  title: {
    fontFamily: "serif",
    marginLeft: 50,
    marginTop: 25
  }
  //fontFamily: "serif",
  
}));


export default function New() {
  const classes = useStyles();
  const departments = useSelector(state => state.departments)
  const dispatch = useDispatch()
  const history = useHistory()

   //Setting State for create new user 
    const [state , setState] = useState({
        name: "",
        password: "",
        access: "",
        birthday: "",
        start_date: "",
        points: 0,
        department_id: null
    })

    //Input fealds (setting state)
    const handleChange = (event) => {
        let {id , value} = event.target   
        if(value === 0 ){
        value = event.target.getAttribute("data-value")
        }
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
  }

    const handleSubmitClick = (event) => {
        event.preventDefault();
        let user = {
            name: state.name,
            password: state.password,
            access: state.access,
            birthday: state.birthday,
            start_date: state.start_date,
            points: 0,
            department_id: state.department_id
        }
        dispatch(setNewUser(user))
        history.push("/all_team_members")
        }
  
  return (
  
      <Paper className={classes.paper}>
      
        
        <Typography component="h1" variant="h5" className={classes.title}>
          Add Team Member
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="access"
                label="access"
                name="access"
                autoComplete="access"
                onChange={handleChange} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="birthday"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                onChange={handleChange} 
            />
            </Grid>
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
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleSubmitClick}
          >
            Add Team Member
          </Button>
        
        </form>
    
      </Paper>
  );
}



                
                
