import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { Checkbox } from '@material-ui/core';
import { updateTask } from '../actions';


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
    }
  }));

export default function TeamMemberHomePage() {
    const classes = useStyles();
    const currentUser = useSelector(state => state.currentUser)
    const tasks = useSelector(state => state.tasks)
    const d1 = new Date();
    const dispatch = useDispatch()
   

    let userDetails = currentUser.map(user =>{ 
        return<div>
            <h2>{user.name}</h2>
            <h5>{user.department.name}</h5>
            <ListItem> Points: {user.points}</ListItem>
            <ListItem> Start Date: {d1.toString(user.start_date).slice(4, 15)}</ListItem>
        </div>
    })

    const certificates = () => {
        return tasks.filter(task => task.team_member_id == currentUser[0].id).map(oneTask =>  
            {return oneTask.certificate
                ?
                    <ListItem>
                        <input
                            name= {oneTask.id}
                            type="checkbox"
                            // onChange={(e) => checked(e)}
                            // checked={oneTask.status}
                            checked={null}
                            />
                        {oneTask.details}
                    </ListItem>
                :
                    null
            }
        )
    }
    
    const projects = () => {
        return tasks.filter(task => task.team_member_id == currentUser[0].id).map(oneTask =>  
            {return oneTask.project
                ?
                    <ListItem>
                        <input
                            name= {oneTask.id}
                            type="checkbox"
                            // onChange={(e) => checked(e)}
                            // checked={oneTask.status}
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
                   <ListItem>{oneTask.details}</ListItem> 
                </List>
            }
        )
    }

    const checked = (e) =>{ 
        //dispatch(updateTask(e.target.name))
        //change task.status (checked)
    }
    

    return(
        <div style={{marginTop: "-40px"} }>
            <div className={classes.root}>
                <Paper 
                elevation={3} >
                    <ul>{userDetails}</ul>
                </Paper>
                <Paper 
                elevation={3} >
                    <h2 id="paperTitle">Projects:</h2>
                    <ul>{projects()}</ul>
                  
                </Paper>
            </div>

            <div className={classes.root}>
                <Paper 
                elevation={3}>
                    <h2 id="paperTitle">Event Follow-Up:</h2>
                    <ul>{eventTasks()}</ul>
                    {/* <h2 id="paperTitle">Guest Follow-Up:</h2>
                    <div id="paperTitle">< button>Add Task</button></div>  */}
                </Paper>
                <Paper 
                elevation={3} >
                    <h2 id="paperTitle">Certificate:</h2>
                    <ul>{certificates()}</ul>
                    
                </Paper>
                </div>
               
        </div>
    )

}