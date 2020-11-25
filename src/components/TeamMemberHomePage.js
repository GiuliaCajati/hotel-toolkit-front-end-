import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

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
    const d1 = new Date();
   //render team member user details  
    let userDetails = currentUser.map(user =>{
        return<div >
             
            <h2>{user.name}</h2>
            <ListItem> Points: {user.points}</ListItem>
            <ListItem> Start Date: {d1.toString(user.start_date).slice(4, 15)}</ListItem>
        </div>
    })

    //render team member certificates 
    let certificate = currentUser.map(user =>
        user.tasks.map(task =>  
            {return task.certificate?
                (<ListItem>
                <input
                    name="certificates"
                    type="checkbox"
                    checked={null}/>
                {task.details}
                </ListItem>):(null)
    }))

    //render team member projects 
    let projects = currentUser.map(user =>
        user.tasks.map(task =>  
            {return task.project?
                (<ListItem>
                    <input
                        name="certificates"
                        type="checkbox"
                        checked={null}/>
                    {task.details}
                    </ListItem>):(null)
    }))

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
                    <ul>{projects}</ul>
                  
                </Paper>
            </div>

            <div className={classes.root}>
                <Paper 
                elevation={3}>
                    <h2 id="paperTitle">Event Follow-Up:</h2>
                    {/* {currentUser[0].department.tasks[0].length == 0 ? null : */}
                    {currentUser[0].department.tasks.length == 0
                        ?
                            null
                        :
                            currentUser[0].department.tasks.map(task => {
                            return <div id="paperTitle"><b>{task.event.name}:</b> {task.details}</div>})}
                    
                    <h2 id="paperTitle">Guest Follow-Up:</h2>
                    <div id="paperTitle">< button>Add Task</button></div> 
                </Paper>
                <Paper 
                elevation={3} >
                    <h2 id="paperTitle">Certificate:</h2>
                    <ul>{certificate}</ul>
                    
                </Paper>
                </div>
               
        </div>
    )

}