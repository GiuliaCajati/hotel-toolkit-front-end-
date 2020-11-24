import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { name, monday, tuesday, wednesday, thursday, friday, saturday, sunday };
}

export default function ThisWeek() {
  const classes = useStyles();
  const dates = useSelector(state => state.dates)
  let rows

  dates.map(dtIn => {
    console.log(dtIn.date)
    rows = [ createData('Arrivals', dtIn.arrivals, dtIn.arrivals, dtIn.arrivals, dtIn.  arrivals, dtIn.arrivals),
      createData('Departures', dtIn.departures, dtIn.departures, dtIn.departures, dtIn.departures, dtIn.departures),
      createData('Performance', dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD, dtIn.performance_YTD),
      createData('Occupancy', dtIn.occupancy, dtIn.occupancy, dtIn.occupancy, dtIn.occupancy, dtIn.occupancy),
      createData('ADR', dtIn.rate, dtIn.rate, dtIn.rate, dtIn.rate, dtIn.rate)
    ]
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">  
        <TableHead>
          <TableRow>
            <TableCell>This Week</TableCell>
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
