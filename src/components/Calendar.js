import React, { useState } from 'react';
import FullCalendar, { eventTupleToStore } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';



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

  const [test, setEvents] = useState([
    {
      title: 'Test Event', 
      start: '2020-11-18', 
      allDay: true,
      end: '2020-12-18'}
])
   //'2020-11-18T13:00:00'
    const dates = useSelector(state => state.dates)
    const events = useSelector(state => state.events)
    
    // const filterTasks = () => {
    //   let allTasks = dates.map(date => {

    //     if(date.tasks.length == 0){
    //       return null
    //     } else {
    //       debugger 
    //      return (for (let i = 0; i<= date.length;  i++){
    //       //date.date 
    //       // for each date return task
    //       date.tasks.map(task => task.details)
    //      })
          
          
    //     }
    //   })
    //   //map out all tasks for each date 

    //   // allTasks.map(tasks => {
    //   //     return(tasks.map(oneTask =>
    //   //       oneTask.details 
    //   //       //why do I not have access to the date??
    //   //     ))  
    //   //   })    
    // }

    const filterEvents = () => {
      //map out all events for each date 
      events.map(event => {
        debugger
        let lastIndex = event.date_info.length
        return event.date_info[0].date //start
        //return event.date_info[lastIndex].date //end
        //event.name //title 

      })    
    }
    


    return(
      <div> 
        <InlineStyle />
        <React.Fragment>
          <CssBaseline />
          {filterEvents()}
              <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', height: '70vh' }}>
                <FullCalendar 
                plugins={[ dayGridPlugin, listPlugin, timeGridPlugin ]}
                events={test}
                />
                
          </Container>
        </React.Fragment>
      </div>
    )
}

export default Calendar



