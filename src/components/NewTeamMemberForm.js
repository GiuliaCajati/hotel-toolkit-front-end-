import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from 'react-redux'; //display state 


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
  }
}));


export default function New() {
  const classes = useStyles();
  const departments = useSelector(state => state.departments)

   //Setting State for create new user 
    const [state , setState] = useState({
        name: "",
        password: "",
        photo_url: ""
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
    //event.target.getAttribute("value....")
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
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
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="date"
                label="Start Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
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
            color="primary"
            className={classes.submit}
          >
            Add Team Member
          </Button>
        
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}



                // t.string :name
                // t.string :password_digest
                // t.string :access
                // t.string :birthday
                // t.string :start_date
                // t.integer :points = 0 
                // t.integer :department_id
                
