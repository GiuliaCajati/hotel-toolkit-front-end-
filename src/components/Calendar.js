import React from 'react'
import FullCalendar from '@fullcalendar/react'
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

const Calendar = props => {
   
    let test = {title: "test event", start: "2020-11-18T10:45:00", end: "2020-11-18T13:00:00"}
    const dates = useSelector(state => state.dates)
    const filterDates = () => {
      let allTasks = dates.map(date => date.tasks)
      allTasks.map(task => 
        (task.length == 0
          ?
            null
          : 
            task.details
            ))
            debugger
    }
  

    return(
      <div> 
        <InlineStyle />
        <React.Fragment>
          <CssBaseline />
              <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', height: '70vh' }}>
                <FullCalendar 
                plugins={[ dayGridPlugin, listPlugin, timeGridPlugin ]}
                test={test}
                />
                
          </Container>
        </React.Fragment>
      </div>
    )
}

export default Calendar



