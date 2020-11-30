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
        width: theme.spacing(40),
        height: theme.spacing(60),
        overflow: 'auto',
    },
  },
  buttons: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: 100
  },
  tasksMargin: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(2)
  },
  section: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));

export default function TeamMemberShowPage() {
  const classes = useStyles();
  const event = useSelector(state => state.event)
  const history = useHistory()
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  
  const eventDates = (event) => { 
    return event.date_events.map(dateEvent =>  {
      return <ul>
        <li>{dateEvent.date_info.date}</li> 
        <li>Arrivals:{dateEvent.arrivals}</li> 
        <li>In-House:{dateEvent.in_house}</li> 
        <li>Departures:{dateEvent.departures}</li> 
      </ul>
    })

  }

  const handleSubmitClickDates =(e) => {
    e.preventDefault();
     history.push("/add_date")
  }

  const handleSubmitClickTasks =(e) => {
    e.preventDefault();
     history.push("/add_task")
  }

  const handleSubmitDelete = (selectedTaskID) => {
    //e.preventDefault();
  dispatch(deleteTask(selectedTaskID))
  
  }

  const eventTasks = () => {
    debugger
    return tasks.filter(task => task.event).filter(task => task.event.id == event[0].id).length == 0
      ? 
       null
      :
      <div className={classes.section}>
        <b>Event Tasks:</b>
        {tasks.filter(task => task.event).filter(task => task.event.id == event[0].id).map(task => {

          return<div>
              <DeleteTwoToneIcon onClick={()=> handleSubmitDelete(task.id)}/> 
              {task.details}
          </div>  
        })}  
      </div>    
  }



  return (
    <div>
        <div className={classes.root}>   
          <Paper elevation={3}>
            <div className={classes.tasksMargin}>
                  <h3>{event[0].name}</h3>
                  <b>Attendees:</b> {event[0].number_of_attendees}
                  <div><b>Importance: </b>{event[0].importance}</div>
                                    {eventTasks()}
                    <div><b>Event Dates:</b>{eventDates(event[0])}</div>
              </div>  
                <Button
                type="submit"
                variant="contained"
                onClick={handleSubmitClickDates}
                size="small"
                location="right"
                className={classes.buttons} 
                >
                Add Dates
                </Button>
                <Button
                type="submit"
                variant="contained"
                onClick={handleSubmitClickTasks}
                size="small"
                location="right"
                className={classes.buttons} 
                >
                Add Tasks
                </Button>
          </Paper>
        </div>
    </div>
      );
}