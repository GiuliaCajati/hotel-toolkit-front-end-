import React from 'react';
import FullCalendar, { eventTupleToStore } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayGrid from '@fullcalendar/daygrid'
import timeGrid from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import { makeStyles } from '@material-ui/core/styles';





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
  const dates = useSelector(state => state.dates)
  const events = useSelector(state => state.events)


    const formatTasks = () => {
      let tasksArray = dates.map(date => {
        if(date.tasks.length == 0){
          return null
        } else {
          let theDate = date.date
          return date.tasks.map(task => {
            return{
              title: task.details, 
              start: theDate, //date.date 
              allDay: true,
              end: theDate
            }
          })
        }
      })
      return tasksArray.filter(task => task !== null)
    }
   
    const formatEvents = () => {
      //map out all events for each date 
      let eventArray = events.map(theEvent => {
        return{ title: theEvent.name, 
          start: theEvent.date_info[0].date,
          allDay: true,
          end: theEvent.date_info[theEvent.date_info.length - 1].date
      }})  
      return [...eventArray, ...formatTasks().flat()] 
    }
    
    const handleEventClick = (arg) => { // bind with an arrow function
      alert(arg.event._def.title)
      
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
                //plugins={[ dayGridPlugin, listPlugin, timeGridPlugin ]}
                //events={filterEvents}
                events={formatEvents()}
                plugins={[ dayGridPlugin, interactionPlugin ]} 
                />
          </Container>
        </React.Fragment>
      </div>
    )
}

export default Calendar



