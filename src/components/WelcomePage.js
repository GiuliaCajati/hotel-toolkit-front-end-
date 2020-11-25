import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThisWeek from './ThisWeek.js'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {  useHistory } from "react-router-dom";
import { displayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

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
    }
  }));

export default function WelcomePage() {
    const classes = useStyles();
    const dates = useSelector(state => state.dates)
    const d1 = new Date();

    const history = useHistory()
    const dispatch = useDispatch()
    let today = dates[4]

    let todaysInfo = <List>
            <ListItem>{d1.toString(today.date).slice(4, 15)}</ListItem>
            <ListItem>Arrivals: {today.arrivals}</ListItem>
            <ListItem>Departures: {today.departures}</ListItem>
            <ListItem>Performance: {today.performance_YTD} YTD Overall Experience</ListItem>
            <ListItem>Occupancy: {today.occupancy}</ListItem>
            <ListItem>ADR: {today.occupancy}</ListItem>
       </List>

    const todaysEvents =  () => {
       return today.events.length == 0
            ?
                null
            :
                today.events.map(event => {return<List> 
            <ListItem dense button onClick={() => handleClick(event)}>{event.name}  <i> (click for details)</i></ListItem>
            <ListItem>Importance: {event.importance}</ListItem>
            <ListItem>Attendees: {event.number_of_attendees}</ListItem>
        </List>})
        }

    const handleClick = (event) => {
        dispatch(displayEvent(event))
        history.push(`/events/${event.id}`)
        }
    
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
        
        return today.events.map(event =>{
            return event.tasks.length  == 0
                ?
                    null
                :   
                
                    event.tasks.map(task =>{return !task.event_id
                            ?
                                null
                            :
                                <ListItem>{task.details}</ListItem>})      
         
        })
    }


    return(
        <div style={{marginTop: "-40px"} }>
            <div className={classes.root}>
            <Paper elevation={3} >
                <h2 id="paperTitle">Daily Details</h2>
                <div>{todaysInfo}</div>
            </Paper>
            <Paper elevation={3} >
                <h2 id="paperTitle">Today's Events</h2>
                <List>Note:{eventTasks()}</List>
                <List>{todaysEvents()}</List>
                
               
            </Paper>
            </div>
            <div className={classes.root}>
            <Paper elevation={3} >
                <ThisWeek />
            </Paper>
            <Paper elevation={3} >
                <h3 id="paperTitle">Updates For The Day</h3>
                <h3 id="paperTitle">VIP's For The Day</h3>
                <div id="paperTitle">{todaysVips()}</div>
            </Paper>
            </div>
        </div>
    )

}



