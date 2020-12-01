import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { updateTask, displayTask} from '../actions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {  useHistory } from "react-router-dom";






const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(20),
        marginTop: theme.spacing(2),
        width: theme.spacing(50),
        height: theme.spacing(35),
        overflow: 'auto',
      },
    },
    font:{
        fontFamily: "serif",
    }
  }));
  

export default function TeamMemberHomePage() {
    const classes = useStyles();
    const currentUser = useSelector(state => state.currentUser)
    const tasks = useSelector(state => state.tasks)
    const d1 = new Date();
    const dispatch = useDispatch()
    const history = useHistory()
   
   //display selected event 
  const handleClick = (oneTask) => {
    dispatch(displayTask(oneTask))
    history.push(`/add_task_note/${oneTask.id}`)
  }

    let userDetails = currentUser.map(user =>{ 
        return<div>
            <h2>Hello {user.name}!</h2>
            <h5>{user.department.name}</h5>
            <ListItem> Points: {user.points}</ListItem>
            <ListItem> Start Date: {d1.toString(user.start_date).slice(4, 15)}</ListItem>
        </div>
    })

    const certificates = () => {
        return tasks.length == 0? null
        :tasks.filter(task => task.team_member_id == currentUser[0].id).map(oneTask =>  
            {return oneTask.certificate
                ?
                    <ListItem>
                        <input
                            name= {oneTask.id}
                            type="checkbox"
                            onChange={(e) => checked(e)}
                            checked={oneTask.status}
                            // checked={null}
                            />
                        {oneTask.details}
                    </ListItem>
                :
                    null
            }
        )
    }
    
    const projects = () => {
        return tasks.length == 0? null
        :tasks.filter(task => task.team_member_id == currentUser[0].id).map(oneTask =>  
            {return oneTask.project
                ?
                    <ListItem>
                        <input
                            name= {oneTask.id}
                            type="checkbox"
                            onChange={(e) => checked(e)}
                            checked={oneTask.status}
                            
                            // checked={null}
                            />
                        {oneTask.details}
                    </ListItem>
                :
                    null
            }
        )
    }




    const guestFollowUp = () => { 
        return tasks.length == 0? null
        :tasks.filter(task => task.team_member_id == currentUser[0].id).map(oneTask =>  
            {return oneTask.guest_follow_up
                ?
                    <ListItem>
                        <input
                            name= {oneTask.id}
                            type="checkbox"
                            onChange={(e) => checked(e)}
                            checked={oneTask.status}
                            
                            checked={null}
                            />
                        {oneTask.details}
                    </ListItem>
                :
                    null
            }
        )
    }

    const eventTasks = () => {
        return tasks.filter(task => task.department_id == currentUser[0].department.id).map(oneTask =>  
            {return<List>
                   <ListItem><b>{oneTask.event.name}:</b></ListItem> 
                   <ListItem>
                    <Tooltip title="Add Notes">
                        <IconButton aria-label="add notes" onClick={()=>handleClick(oneTask)}>
                            <AddCircleIcon />
                        </IconButton>
                    </Tooltip> 
                           {oneTask.status?"Complete":"In Progress: "}{oneTask.details}
                    </ListItem> 
                    </List>
            }
        )
    }

    const checked = (e) =>{ 
        debugger
        dispatch(updateTask(e.target.name, e.target.checked))
    }
    

    return(
        <div style={{marginTop: "-40px"} } className={classes.font}>
            <div className={classes.root}>
                <Paper 
                elevation={3} >
                    <ul>{userDetails}</ul>
                    <h2 id="paperTitle">Guest Follow-up:</h2>
                    <div>{guestFollowUp()}</div>
                </Paper>
                <Paper 
                elevation={3} >
                    <h2 id="paperTitle">Project's:</h2>
                    <ul>{projects()}</ul>
                  
                </Paper>
            </div>

            <div className={classes.root}>
                <Paper 
                elevation={3}>
                    <h2 id="paperTitle">Future Event Follow-Ups:</h2>
                    <ul>{eventTasks()}</ul>
                    {/* <h2 id="paperTitle">Guest Follow-Up:</h2>
                    <div id="paperTitle">< button>Add Task</button></div>  */}
                </Paper>
                <Paper 
                elevation={3} >
                    <h2 id="paperTitle">Certificate's:</h2>
                    <ul>{certificates()}</ul>
                    
                </Paper>
                </div>
               
        </div>
    )

}