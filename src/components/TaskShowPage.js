import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import {  useHistory } from "react-router-dom";
import { displayTask} from '../actions';

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

export default function TaskShowPage() {
  const classes = useStyles();
  const teamMember = useSelector(state => state.teamMember)
  const task = useSelector(state => state.task)
  const dispatch = useDispatch()
    const history = useHistory()

const taskTitle =() => {
    if(task.project == true){
        return<h2>Project</h2>
    }else if(task.certificate == true){
        return<h2>Certificate</h2>
    }else{
        return<h2>Guest Follow-Up</h2>
    }

}

const handleClick = (oneTask) => {debugger
    dispatch(displayTask(oneTask))
    history.push(`/add_task_note/${oneTask.id}`)
  }

const theTaskDetails = () => {debugger
    return task.map(oneTask =>  
        {return<List>
             <ListItem>
                <b>{oneTask.department == null
                    ? 
                        oneTask.team_member.name
                    :
                        oneTask.department.name
                }</b>
            </ListItem>
            <ListItem>
                <b>Date:</b> {oneTask.date_info.date}
            </ListItem>
            <ListItem>
                {oneTask.details}
            </ListItem>
            <ListItem>
                {oneTask.notes == null?null:oneTask.notes}
            </ListItem>
            <Button
                    style={{minWidth: '200px'}}
                    type="submit"
                    variant="contained"
                    className={classes.submit}
                    onClick={()=>handleClick(oneTask)}
                >
                    Add Notes
                </Button>
           
            </List>
                    
                    
                
           
              
        }
    )
}


  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <h3 id="paperTitle">Task Details</h3>
                <List id="paperTitle">{theTaskDetails()}</List>
                
        </Paper>
    </div>
  );
}