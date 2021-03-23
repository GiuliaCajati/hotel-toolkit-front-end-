import React from 'react';
import { useSelector } from 'react-redux';
//dates

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { name, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

export default function ThisWeek() {
  const classes = useStyles();
  const dates = useSelector(state => state.dates)
  let rows

  
    // dates.map(dtIn =>
    //   for (let i = 0; i < 8; i++){
    //      { rows = [ createData('Arrivals', dtIn.arrivals),
    //   createData('Departures', dtIn.departures),
    //   createData('Performance', dtIn.performance_YTD),
    //   createData('Occupancy', dtIn.occupancy),
    //   createData('ADR', dtIn.rate)]}
    //   }})

  // dates.map(dtIn => {
  //   //while loop length 7 
  //   //go back and refactor while loop for 7 days of the week? 
  //   rows = [ createData('Arrivals', dtIn.arrivals, dtIn.arrivals, dtIn.arrivals, dtIn.  arrivals, dtIn.arrivals, dtIn.arrivals, dtIn.arrivals),
  //     createData('Departures', dtIn.departures, dtIn.departures, dtIn.departures, dtIn.departures, dtIn.departures, dtIn.departures, dtIn.departures),
  //     createData('Performance', dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD),
  //     createData('Occupancy', dtIn.occupancy, dtIn.occupancy, dtIn.occupancy, dtIn.occupancy, dtIn.occupancy, dtIn.occupancy, dtIn.occupancy),
  //     createData('ADR', dtIn.rate, dtIn.rate, dtIn.rate, dtIn.rate, dtIn.rate, dtIn.rate, dtIn.rate)
  //   ]
  // })

  dates.map(dtIn => {
    //while loop length 7 
    //go back and refactor while loop for 7 days of the week? 
    rows = [ createData('Arrivals', 500, 100, 50, 250, 400, 200, 200),
      createData('Departures', 200, 300, 450, 200, 360, 100, 200),
      createData('Performance', "95% 😊", "94% 😊", "92% 😊", "99% 😊","97% 😊", "95% 😊", "98% 😊"),
      createData('Occupancy', "90%", "80%", "77%", "88%","79%", "98%", "98%"),
      createData('ADR', "$550", "$580", "$520", "$500", "$550", "$525", "$450")
    ]
  })


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">  
        <TableHead>
          <TableRow>
            <TableCell><b>This Week</b></TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.monday}</TableCell>
              <TableCell align="right">{row.tuesday}</TableCell>
              <TableCell align="right">{row.wednesday}</TableCell>
              <TableCell align="right">{row.thursday}</TableCell>
              <TableCell align="right">{row.friday}</TableCell>
              <TableCell align="right">{row.saturday}</TableCell>
              <TableCell align="right">{row.sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  );
}
