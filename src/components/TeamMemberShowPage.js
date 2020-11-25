import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

//show all tasks for depar.
export default function TeamMemberShowPage() {
  const classes = useStyles();
  const teamMember = useSelector(state => state.teamMember)
  const departments = useSelector(state => state.departments)

  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <h3 id="paperTitle">{teamMember[0].name}</h3>
                <List id="paperTitle">
                    <ListItem><b>Access:</b> {teamMember[0].access}</ListItem>
                    <ListItem><b>Birthday:</b> {teamMember[0].birthday}</ListItem>
                    <ListItem><b>Start Date:</b> {teamMember[0].start_date}</ListItem>
                    <ListItem><b>Points:</b>{teamMember[0].points}</ListItem>
                </List>
        </Paper>
    </div>
  );
}