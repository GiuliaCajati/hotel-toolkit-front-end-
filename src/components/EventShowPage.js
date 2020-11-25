import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {  useHistory } from "react-router-dom";
import AddDateDetails from "./AddDateDetails";


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
  debugger
  const [state , setState] = useState({
    AddDateDetails: false
  })

  const handleSubmitClick =(event) => {
    event.preventDefault();
    //adding all details for event
    //set state? 
    //render AddDateDetails
    setState({
      AddDateDetails: !state.AddDateDetails
    })
  debugger
  history.push("/add_date_details")
  }
// Show all tasks for event 

  return (
    <div>
    {!AddDateDetails?
     <AddDateDetails/> :
    <div className={classes.root}>
     
        <Paper elevation={3}>
        {/* {event[0].length ==0? null: */}
            <h3 id="paperTitle">{event[0].name}</h3>
                <div id="paperTitle">
                  Attendees: {event[0].number_of_attendees}
                  <div>Importance: {event[0].importance}</div>
                  {event[0].tasks.length == 0
                    ? 
                      null
                    :
                    <div>{event[0].tasks.map(task => task.department_id)}: {event[0].tasks.map(task => task.details)}</div>
                  }
                  {/* <div>Importance: {event[0].tasks}</div> */}
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
          {/* <Button
            type="submit"
            variant="contained"
            onClick={handleSubmitClick}
            size="small"
            location="right"
            className={classes.margin} 
          >
            Add Tasks
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmitClick}
            size="small"
            location="right"
            className={classes.margin} 
          >
            Add Vips
          </Button> */}
        </div>
        </Paper>
        
    </div>}
    </div>
      );
}