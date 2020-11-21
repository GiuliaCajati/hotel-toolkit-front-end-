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
        height: theme.spacing(50),
      },
    },
  }));

export default function WelcomePage() {
    const classes = useStyles();
    const events = useSelector(state => state.events)
    
    let todaydetails 
    let todayEventDetails 
    let todaysInfo = () => {
        todaydetails = events[0].date_info[0]
      
        return<div>
            
            
            <h5>{todaydetails.date}</h5>
            <h5>Arrivals: {todaydetails.arrivals}</h5>
            <h5>Departures: {todaydetails.departures}</h5>
            <h5>Performance: {todaydetails.performance_YTD}</h5>
            <h5>Occupancy: {todaydetails.occupancy}</h5>
            <h5>ADR: {todaydetails.occupancy}</h5>
            </div>
    }
    let todaysEvents = () => {
        todayEventDetails = events[0]
      
        return<div> 
            <h3>{todayEventDetails.name}</h3>
            <h5>Importance: {todayEventDetails.importance}</h5>
            <h5>Attendees: {todayEventDetails.number_of_attendees}</h5>
            <h5>VIP ARRIVALS</h5>
            <h5>INFO TO SHARE ON DAILY</h5>
            <h5>Link to event</h5>
            </div>
    }

    return(
        <div >
            <div className={classes.root}>
            <Paper variant="outlined" >
                <h2>Daily Details</h2>
                <ul>{todaysInfo()}</ul>
            </Paper>
            <Paper variant="outlined" >
                <h2>Today's Events</h2>
                <ul>{todaysEvents()}</ul>
            </Paper>
            </div>
            <div className={classes.root}>
            <Paper variant="outlined" >
                <h3>Funny joke</h3>
            </Paper>
            <Paper variant="outlined" >
                <h3>Updates For the day</h3>
            </Paper>
            </div>
        </div>
    )

}



