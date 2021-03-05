import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ThisWeek from './ThisWeek.js'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(3),
        marginTop: theme.spacing(2),
        width: theme.spacing(86),
        height: theme.spacing(40),
        overflow: 'auto',
        
      },
    },
    margins:{
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(1)
    },
    font:{
        fontFamily: "serif",
    },
    image:{
        height: 1
    },
    joke:{
        width:300,
        marginTop: theme.spacing(-30),
        marginLeft: theme.spacing(45),
        backgroundColor: "#c5d1f1"
    },
    update:{
        width:300,
        marginTop: theme.spacing(0),
        marginLeft: theme.spacing(45),
        backgroundColor: "#c5d1f1"
    },
    text: {
        paddingTop: theme.spacing(1)
    }
    
  }));

export default function WelcomePage() {
    const classes = useStyles();
    const dates = useSelector(state => state.dates)
    const tasks = useSelector(state => state.tasks)
    let today = dates[4]//dec 3rd 

    const formatDay = () => {
        let today  = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; 
        let yyyy = today.getFullYear();
        if(dd<10) 
        {
            dd='0'+dd;
        } 
        if(mm<10) 
        {
            mm='0'+mm;
        } 
        today = mm+'/'+dd+'/'+yyyy;
        return today
    } 

    let todaysInfo = <List>
            <ListItem><b>{formatDay()}</b></ListItem>
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

    
    const todaysVips = () => {
        return today.events.map(event =>{
            return event.vips.length == 0
                ?
                    null
                :   
                    event.vips.map(vip =>{return<div> 
            <h3>Name: {vip.name}</h3>
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
                <Paper className={classes.joke}>
                    <div className={classes.margins}>
                    <h3 className={classes.text}>Joke of the day:</h3> <b>Why don’t scientists trust atoms?</b><div>Because they make up everything.</div></div>
                </Paper>
                <Paper className={classes.update}>
                    <div className={classes.margins}>
                    <h3 className={classes.text}>Hotel Important Updates:</h3> <b>Lobby Resteraunt will be closing a 6pm today.</b></div>
                </Paper>
            </Paper>
            <Paper elevation={3} >
                <h2 id="paperTitle">Today's Events</h2>
                <List className={classes.margins}>{todaysEvents()}</List>
                <List >{eventTasks()}</List>
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



