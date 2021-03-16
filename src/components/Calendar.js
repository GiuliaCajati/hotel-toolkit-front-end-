import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { displayEvent, displayTask, clearDisplayTask, clearDisplayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import CalendarSelection from "./CalendarSelection.js";
import CalendarKey from "./CalendarKey.js";
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const Calendar = () => {
  const events = useSelector(state => state.events)
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const [detailes , setDetailes] = useState(false)
  
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
const backgroundColor = (task) => {
  switch(task.certificate){
    case false: //project
      return "#3CB371"
    case true: //certificate
      return '#708090'
    case 'guest_follow_up':
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
      backgroundColor: "#1e90ff", 
      end: theEvent.date_info[theEvent.date_info.length - 1].date
  }
  })  
  return [...eventArray, ...formatTasks().flat()] 
}
    
const handleEventClick = (arg) => { 
  setDetailes(true)
  if (arg.event.groupId == "events"){
    dispatch(displayEvent(events.filter(event => event.id == arg.event._def.publicId)[0]))
    dispatch(clearDisplayTask())
  }else{
    dispatch(displayTask(tasks.filter(task => task.id == arg.event._def.publicId)[0]))
    dispatch(clearDisplayEvent())
  }   
}
   
return(
      <div>   

        <React.Fragment>
          <CssBaseline />
              <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', height: '70vh', width: '350vh'}}>
      <h2>.</h2>
                <FullCalendar 
                events={formatEvents()}
                eventClick={handleEventClick}      
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
                headerToolbar={{ 
                  left: "dayGridMonth,timeGridWeek,timeGridDay,list",
                  center: "title",
                  right: "today,prev,next", }}
                /> 
               <div><CalendarKey/></div>
                <div>{detailes?<CalendarSelection/>:null}</div>
          </Container>
        </React.Fragment>
  
      </div>
    )
}

export default Calendar

