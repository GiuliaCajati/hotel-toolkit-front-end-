import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(-45),
        marginTop: theme.spacing(-15),
        width: theme.spacing(30),
        height: theme.spacing(23),
        positions: "absolute",
        overflow: 'auto',
    },
  },

}));

export default function CalendarKey(props) {
  const classes = useStyles();

const key = () => {
  return<div>
  <b><Box color="info.main"><FiberManualRecordIcon/>Events</Box></b>
  <b><Box color="text.secondary"><FiberManualRecordIcon/>Certificates</Box></b>
  <b><Box color="success.main"><FiberManualRecordIcon/>Projects and Event Tasks</Box></b>
        <Box color="secondary.main"><FiberManualRecordIcon/>Human Resources </Box>
        <Box color="primary.main"><FiberManualRecordIcon/>Front Office</Box>
        <Box color="text.disabled"><FiberManualRecordIcon/>Housekeeping</Box>
  </div>
   
}
  return (
    <div className={classes.root}>
        <Paper elevation={3}> 
            {key()}
        </Paper>
      </div>
  );
}