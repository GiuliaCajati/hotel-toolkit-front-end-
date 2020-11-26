import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {  useHistory } from "react-router-dom";
import AddDateDetails from "./AddDateDetails";
import { deleteTask } from '../actions';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(60),
        marginTop: theme.spacing(8),
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
  },
  margin: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(5)
  },
}));

export default function TeamMemberShowPage() {
  const classes = useStyles();
  const event = useSelector(state => state.event)
  const history = useHistory()
  const dispatch = useDispatch()
  

  const handleSubmitClick =(e) => {
    e.preventDefault();
    //adding all details for event
     history.push("/add_date_details")
  }

  const handleSubmitDelete = (e) => {
    e.preventDefault();
    //delete task
debugger
    dispatch(deleteTask(event))

    
    history.push("/events")
  }


  return (
    <div>

    <div className={classes.root}>   
        <Paper elevation={3}>
            <h3 id="paperTitle">{event[0].name}</h3>
                <div id="paperTitle">
                  Attendees: {event[0].number_of_attendees}
                  <div>Importance: {event[0].importance}</div>
                  {event[0].tasks.length == 0
                    ? 
                      null
                    :
                    <div><DeleteTwoToneIcon  onClick={handleSubmitDelete}/>{event[0].tasks.map(task => task.department_id)}: {event[0].tasks.map(task => task.details)}</div>
                  }
                </div>
                <div>
        <Button
            type="submit"
            variant="contained"
            onClick={handleSubmitClick}
            size="small"
            location="right"
            className={classes.margin} 
          >
            Add Event Details
          </Button>
        
        </div>
        </Paper>
        
    </div>
    </div>
      );
}