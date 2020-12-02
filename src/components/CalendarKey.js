import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(-45),
        marginTop: theme.spacing(-15),
        width: theme.spacing(30),
        height: theme.spacing(20),
        positions: "absolute",
        overflow: 'auto'
    },
  },
}));

export default function CalendarSelection(props) {
  const classes = useStyles();

const display = () => {
  //debugger
  return<div>
  <b><Box color="info.main"><FiberManualRecordIcon/>Events</Box></b>
  <b><Box color="text.secondary"><FiberManualRecordIcon/>Certificates</Box></b>
  
  <List> 
  <b><Box color="success.main"><FiberManualRecordIcon/>Projects and Event Tasks</Box></b>
    <ListItem><Box color="secondary.main"><FiberManualRecordIcon/>Human Resources (border)</Box></ListItem>
    <ListItem><Box color="primary.main"><FiberManualRecordIcon/>Front Office (border)</Box></ListItem>
    <ListItem><Box color="text.disabled"><FiberManualRecordIcon/>Housekeeping (border)</Box></ListItem>
  </List>
  </div>
   
}
 
  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <h3 id="paperTitle">Key</h3>
            {display()}
        </Paper>
    </div>
  );
}