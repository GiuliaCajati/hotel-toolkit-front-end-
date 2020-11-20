import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(35),
        width: theme.spacing(40),
        height: theme.spacing(40),
      },
    },
  }));

export default function WelcomePage() {
    const classes = useStyles();
    const events = useSelector(state => state.events)
    
    let todaydetails 
    let todaysInfo = () => {
        todaydetails = events[0].date_info[0]
      
        return<div>
            
            <h2>{todaydetails.date}</h2>
            <h5>Arrivals: {todaydetails.arrivals}</h5>
            <h5>Departures: {todaydetails.departures}</h5>
            <h5>Performance: {todaydetails.performance_YTD}</h5>
            <h5>Occupancy: {todaydetails.occupancy}</h5>
            <h5>ADR: {todaydetails.occupancy}</h5>
            </div>
    }

    return(
        <div className={classes.root}>
            <Paper variant="outlined" >
                <ul>{todaysInfo()}</ul>
            </Paper>
        </div>
    )

}



