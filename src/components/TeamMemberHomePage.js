import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: theme.spacing(20),
        marginTop: theme.spacing(8),
        width: theme.spacing(50),
        height: theme.spacing(35),
      },
    },
  }));

export default function TeamMemberHomePage() {
    const classes = useStyles();
    const currentUser = useSelector(state => state.currentUser)
    
   //render team member user details  
    let userDetails = currentUser.map(user =>{
        return<div >
            <h2>{user.name}</h2>
            <li> Points: {user.points}</li>
        </div>
    })

    //render team member certificates 
    let certificate = currentUser.map(user =>
        user.tasks.map(task =>  
            {return task.certificate?
                (<label>
                <input
                    name="certificates"
                    type="checkbox"
                    checked={null}/>
                {task.details}
                </label>):(null)
    }))

    //render team member projects 
    let projects = currentUser.map(user =>
        user.tasks.map(task =>  
            {return task.project?
                (<label>
                    <input
                        name="certificates"
                        type="checkbox"
                        checked={null}/>
                    {task.details}
                    </label>):(null)
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
                    <h2 id="paperTitle">Updates:</h2>
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