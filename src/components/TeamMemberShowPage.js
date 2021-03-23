import React from 'react';
import { useSelector } from 'react-redux';
//teamMember, tasks

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(50),
        marginTop: theme.spacing(8),
        width: theme.spacing(60),
        height: theme.spacing(60),
        overflow: 'auto',
    },
  },
}));


export default function TeamMemberShowPage() {
  const classes = useStyles();
  const teamMember = useSelector(state => state.teamMember)
  const tasks = useSelector(state => state.tasks)

const certificates = () => {
return tasks.filter(task => task.team_member_id == teamMember[0].id).map(oneTask =>  
    {return oneTask.certificate
        ?
            <ListItem>
                {oneTask.details}
            </ListItem>
        :
            null
    }
)
}

const guestFollowUp = () => { 
    return tasks.filter(task => task.team_member_id == teamMember[0].id).map(oneTask =>  
        {return oneTask.guest_follow_up
            ?
                <ListItem>
                    {oneTask.details}
                </ListItem>
            :
                null
        }
    )
}


const projects = () => {
    return tasks.filter(task => task.team_member_id == teamMember[0].id).map(oneTask =>  
        {return oneTask.project
            ?
                <ListItem>
                    {oneTask.details}
                </ListItem>
            :
                null
        }
    )
}

return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <h3 id="paperTitle">{teamMember[0].name}</h3>
                <List id="paperTitle">
                    <ListItem><b>Access:</b> {teamMember[0].access}</ListItem>
                    <ListItem><b>Birthday:</b> {teamMember[0].birthday}</ListItem>
                    <ListItem><b>Start Date:</b> {teamMember[0].start_date}</ListItem>
                    <ListItem><b>Points:</b>{teamMember[0].points}</ListItem>
                    <List>
                      <div>Projects: {projects()}</div>
                      <div>Guest Follow-up: {guestFollowUp()}</div>
                      <div>Certificates: {certificates()}</div>
                    </List>
                </List>
        </Paper>
    </div>
  );
}