import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(60),
        marginTop: theme.spacing(8),
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
  },
}));

export default function TeamMemberShowPage() {
  const classes = useStyles();
  const event = useSelector(state => state.event)

  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <h3 id="paperTitle">{event[0].name}</h3>
                <div id="paperTitle">
                  Attendees: {event[0].number_of_attendees}
                  <div>Importance: {event[0].importance}</div>
                </div>
        </Paper>
    </div>
  );
}