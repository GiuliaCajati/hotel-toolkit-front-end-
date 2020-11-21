import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(20),
        marginTop: theme.spacing(10),
        width: theme.spacing(50),
        height: theme.spacing(30),
      },
    },
  }));

export default function TeamMemberHomePage() {
    const classes = useStyles();
    const departments = useSelector(state => state.departments)
    
    let memberDetails 
    let teamMemberInfo = () => {
        memberDetails = departments[1]
//debugger
//departments[1].name
//task details 
        return<div>
            
            <h2>{memberDetails.date}</h2>
            </div>
    }
    return(
        <div >
            <div className={classes.root}>
            <Paper variant="outlined" >
                <ul>My to do list </ul>
                <ul>Certificates to complete</ul>
                <ul>Projects to complete </ul>
            </Paper>
            <Paper variant="outlined" >
                <ul></ul>
            </Paper>
            </div>
            <div className={classes.root}>
            <Paper variant="outlined" >
                <h3>{teamMemberInfo()}</h3>
            </Paper>
            <Paper variant="outlined" >
                <h3>Updates For the day</h3>
            </Paper>
            </div>
        </div>
    )

}