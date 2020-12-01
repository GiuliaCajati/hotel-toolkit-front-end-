import React, { useState } from 'react';
import FullCalendar, { eventTupleToStore } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { displayEvent, displayTask, clearDisplayTask, clearDisplayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import CalendarSelection from "./CalendarSelection.js";
import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   departments:{
//     paddingRight: 1000000,
//     position: "absolute"
//   }
// }))


const InlineStyle = () => (
    <style>
      {`
      .grid {
        position: relative;
      }
      .grid:before {
        background-color: #F0F0F0;
        box-shadow: 0px 0px 0px 1px #DDDDDD inset;
        content: '';
        height: calc(100% - 2rem);
        left: 1rem;
        top: 1rem;
        position: absolute;
        width: calc(100% - 2rem);
       }
      .ui.divided.grid:before, .celled.grid:before {
        display: none;
      }
      .ui.aligned .column:after {
        display: none !important;
      }
      .grid .column:not(.row):not(.grid):after {
        background-color: rgba(86, 61, 124, .15);
        box-shadow: 0px 0px 0px 1px rgba(86, 61, 124, 0.2) inset;
        content: '';
        display: block;
        min-height: 50px;
      }
      @media only screen and (max-width: 768px) {
        .stackable.grid:before {
          width: 100%;
          left: 0em;
        }
      }
    `}
    </style>
  )

const Calendar = (props) => {
  const events = useSelector(state => state.events)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const [state , setState] = useState({displayDetails: false})
  // const classes = useStyles();



  const formatTasks = () => {
    let filteredEvents = []
    tasks.filter(thisTask => {
    return thisTask.date_info_id == null?null:filteredEvents.push(thisTask)})
      let tasksArray = filteredEvents.map(task => {
          return{ 
            title: task.details, 
            start: task.date_info.date,
            id: task.id,
            allDay: true,
            groupId:"tasks",
            end: task.date_info.date,
            borderColor: (task.department_id == null? null:borderColor(task)),
            backgroundColor: backgroundColor(task)
          }
      
      })
      
    return tasksArray.filter(task => task !== null)
    }    


  const backgroundColor = (task) => {
      switch(task.certificate){
        case false: //project
          return "#3CB371"
        case true: //certificate
          return '#708090'
        case 'guest_follow_up'://don't have any yet, but will need to change this 
          return 'red'
        default:
          return 'green'
      }
    }

    const borderColor = (task) => {
      switch(task.department.name){
        case "Front Office":
          return "blue"
        case "Housekeeping":
          return '#C0C0C0'
        case 'Finance':
          return 'red'
        case 'Engineering':
          return 'red'
        case 'Sales':
          return 'red'
        default:
          return 'red'
      }
    }

    const formatEvents = () => { 
      
      //map out all events for each date 
      let filteredEvents = []
      events.filter(thisEvent  => {
        return thisEvent.date_info.length == 0?null:filteredEvents.push(thisEvent)})
        
      let eventArray = filteredEvents.map(theEvent => { 
        
        return{ title: theEvent.name, 
          start: theEvent.date_info[0].date,
          id: theEvent.id,
          allDay: true,
          groupId:"events" ,
          backgroundColor: "#1e90ff", 
          end: theEvent.date_info[theEvent.date_info.length - 1].date
      }
      })  
      return [...eventArray, ...formatTasks().flat()] 
    }
    
    const handleEventClick = (arg) => { 
      setState({displayDetails: true})
      if (arg.event.groupId == "events"){
        dispatch(displayEvent(events.filter(event => event.id == arg.event._def.publicId)[0]))
        dispatch(clearDisplayTask())
      }else{
        dispatch(displayTask(tasks.filter(task => task.id == arg.event._def.publicId)[0]))
        dispatch(clearDisplayEvent())
      }   
    }

    const handleDateClick = (arg) => {
    //debugger
    }

 
    return(
      <div>   
        <InlineStyle />
        <React.Fragment>
          <CssBaseline />
          
              <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', height: '80vh' }}>
                <FullCalendar 
                eventClick={handleEventClick} 
                dateClick={handleDateClick}
                headerToolbar={{}}
                //plugins={[ dayGridPlugin, listPlugin, timeGridPlugin ]}
                //events={filterEvents}
                events={formatEvents()}
                plugins={[ dayGridPlugin, interactionPlugin ]} 
                /> 
                <b><Box color="info.main">Events</Box></b>
                <b><Box color="text.secondary">Certificates</Box></b>
                
                <ul> 
                <b><Box color="success.main">Event Tasks and Projects</Box></b>
                  <li><Box color="secondary.main">Human Resources (border)</Box></li>
                  <li><Box color="primary.main">Front Office (border)</Box></li>
                  <li><Box color="text.disabled">Housekeeping (border)</Box></li>
                </ul>
               
                
               {state.displayDetails?<CalendarSelection/>:null}
          </Container>
        </React.Fragment>
  
      </div>
    )
}

export default Calendar



