import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThisWeek from './ThisWeek.js'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        width: theme.spacing(80),
        height: theme.spacing(40),
      },
    }
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
            <h5>Performance: {todaydetails.performance_YTD} YTD Overall Experience</h5>
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
        <div style={{marginTop: "-40px"} }>
            <div className={classes.root}>
            <Paper elevation={3} >
                <h2 id="paperTitle">Daily Details</h2>
                <ul>{todaysInfo()}</ul>
            </Paper>
            <Paper elevation={3} >
                <h2 id="paperTitle">Today's Events</h2>
                <ul>{todaysEvents()}</ul>
            </Paper>
            </div>
            <div className={classes.root}>
            <Paper elevation={3} >
                <ThisWeek />
            </Paper>
            <Paper elevation={3} >
                <h3 id="paperTitle">Updates For the day</h3>
            </Paper>
            </div>
        </div>
    )

}



