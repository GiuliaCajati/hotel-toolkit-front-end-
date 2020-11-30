import React, { useState } from 'react';
import FullCalendar, { eventTupleToStore } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { displayEvent, displayTask, clearDisplayTask, clearDisplayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { makeStyles } from '@material-ui/core/styles';
import CalendarSelection from "./CalendarSelection.js";

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



  const formatTasks = () => {
    if(tasks.length == 0){
         return null
      } else {
      let tasksArray = tasks.map(task => {debugger
          return{
            title: task.details, 
            start: task.date_info.date,
            id: task.id,
            allDay: true,
            groupId:"tasks",
            end: task.date_info.date,
            backgroundColor: backgroundColor(task)
          }
        
      })
      
    return tasksArray.filter(task => task !== null)
    }    
  }

  const backgroundColor = (task) => {
    switch(task.certificate){
      case true: //certificate
        return 'blue'
      case false: //project
        return 'green'
      case 'guest_follow_up'://don't have any yet, but will need to change this 
        return 'red'
      default:
        return 'green'
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
          
              <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', height: '70vh' }}>
                <FullCalendar 
                eventClick={handleEventClick} 
                dateClick={handleDateClick}
                headerToolbar={{}}
                //plugins={[ dayGridPlugin, listPlugin, timeGridPlugin ]}
                //events={filterEvents}
                events={formatEvents()}
                plugins={[ dayGridPlugin, interactionPlugin ]} 
                />
               {state.displayDetails?<CalendarSelection/>:null}
          </Container>
        </React.Fragment>
      </div>
    )
}

export default Calendar



