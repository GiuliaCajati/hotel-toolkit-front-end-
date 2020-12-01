import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThisWeek from './ThisWeek.js'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {  useHistory } from "react-router-dom";
import { displayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2),
        width: theme.spacing(80),
        height: theme.spacing(35),
        overflow: 'auto',
      },
    },
    margins:{
        marginLeft: theme.spacing(5)
    },
    font:{
        fontFamily: "serif",
    }
    
  }));

export default function WelcomePage() {
    const classes = useStyles();
    const dates = useSelector(state => state.dates)
    const tasks = useSelector(state => state.tasks)
    const d1 = new Date();
    const dispatch = useDispatch()
    let today = dates[1]//dec 3rd 

    let todaysInfo = <List>
            <ListItem>{d1.toString(today.date).slice(4, 15)}</ListItem>
            <ListItem>Arrivals: {today.arrivals}</ListItem>
            <ListItem>Departures: {today.departures}</ListItem>
            <ListItem>Performance: {today.performance_YTD} YTD Overall Experience</ListItem>
            <ListItem>Occupancy: {today.occupancy}</ListItem>
            <ListItem>ADR: {today.rate}</ListItem>
       </List>

    const todaysEvents =  () => {
       return today.events.length == 0
            ?
                null
            :
                today.events.map(event => {return<List> 
            {/* <ListItem dense button onClick={() => handleClick(event)}>{event.name}  <i> (click for details)</i></ListItem> */}
            <ListItem dense><b>{event.name}</b> </ListItem>
            <ListItem>Importance: {event.importance}</ListItem>
            <ListItem>Attendees: {event.number_of_attendees}</ListItem>
        </List>})
        }

    // const handleClick = (event) => {
    //     dispatch(displayEvent(event))
    //     history.push(`/events/${event.id}`)
    //     }
    
    const todaysVips = () => {
        return today.events.map(event =>{
            return event.vips.length == 0
                ?
                    null
                :   
                    event.vips.map(vip =>{return<div> 
            <h5>Name: {vip.name}</h5>
            <h5>Details: {vip.show_on_daily}</h5>
            <img id="vip" src={vip.img_url} />
        </div>})
        })
    }

    const eventTasks = () => {
        let todaysTasks = tasks.filter(task => task.date_info.id == today.id)
        return todaysTasks.length == 0? null:
        todaysTasks.map(task => {
           
            return !task.event_id
                ? 
                    null 
                :
                    <ListItem className={classes.margins}>
                        <Box color={textColor(task.department.name)}>
                            <b>Today's { task.department.name } Follow-ups: </b>
                        </Box>
                    { task.details }</ListItem> 
        })
    }

    const textColor = (department) => {
        switch(department){
          case "Front Office": 
            return "primary.main"
          case "House Keeping":
            return "secondary.main"
          case 'Human Resources'://don't have any yet, but will need to change this 
            return "text.secondary"
          case 'Engineering'://don't have any yet, but will need to change this 
            return "error.main"
          default:
            return "info.main"
        }
      }


    return(
        <div style={{marginTop: "-40px"} } className={classes.font} >
            <div className={classes.root}>
            <Paper elevation={3} >
                <h2 id="paperTitle">Today's Stats</h2>
                <div className={classes.margins}>{todaysInfo}</div>
            </Paper>
            <Paper elevation={3} >
                <h2 id="paperTitle">Today's Events</h2>
                <List >{eventTasks()}</List>
                <List className={classes.margins}>{todaysEvents()}</List>
                {/* department  */}
            </Paper>
            </div>
            <div className={classes.root}>
            <Paper elevation={3} >
                <ThisWeek />
            </Paper>
            <Paper elevation={3} >
                {/* <h3 id="paperTitle">Today's Updates</h3> */}
                <h3 id="paperTitle">Today's VIP's</h3>
                <div id="paperTitle">{todaysVips()}</div>
            </Paper>
            </div>
        </div>
    )

}



