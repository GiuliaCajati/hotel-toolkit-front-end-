import './App.css';


//import {useSelector, useDispatch} from 'react-redux'
import React, { Component } from "react";
import { connect } from 'react-redux'
import {  Switch, Route } from 'react-router-dom';//withRouter

//actions
import { fetchingEvents } from './actions'
import { fetchingDepartments } from './actions'
import { fetchingTeamMembers } from './actions'
import { fetchingDates } from './actions'
import { fetchingTasks } from './actions'

//containers
import UpdatesList from './containers/UpdatesList.js'
import SideBar from './containers/SideBar.js'
import EventsList from './containers/EventsList.js'
import TeamMembersList from './containers/TeamMembersList.js'

//import DepartmentTaskIndex from './containers/DepartmentTaskIndex.js'

//components
import NewTeamMemberForm from './components/NewTeamMemberForm.js'
import LoginForm from './components/LoginForm.js'
import NewEventForm from './components/NewEventForm.js'
import WelcomePage from './components/WelcomePage.js'
import TeamMemberHomePage from './components/TeamMemberHomePage.js'
import EventShowPage from './components/EventShowPage.js'
import TeamMemberShowPage from './components/TeamMemberShowPage.js'
import AddDateDetails from "./components/AddDateDetails";
import AddTaskDetails from "./components/AddTaskDetails";
import Calendar from "./components/Calendar.js";
import NotFound from './components/NotFound'
import NewTaskForm from './components/NewTaskForm.js'
import AddTaskNotes from './components/AddTaskNotes.js'
import TaskShowPage from './components/TaskShowPage.js'
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchingEvents()
    this.props.fetchingDates()
    this.props.fetchingDepartments()
    this.props.fetchingTeamMembers() 
    this.props.fetchingTasks()
  }
  render() {
 
 

    return (
      <div className="App">

          <SideBar/>
          <Switch>

          <Route path='/tasks/:id' render={(props)=> {
                let pathId= props.match.params.id
              return(<TaskShowPage pathId = {pathId} />)}}/>
               
          {/* <Route exact path='/index' 
                  render={() => {return (<DepartmentTaskIndex />)}}/> */}
        
          <Route exact path='/add_task_note/:id' render={(props)=> {
                  let pathId= props.match.params.id
                  return(<AddTaskNotes pathId = {pathId} />)}}/>
                      
          <Route exact path='/new_task' 
                  render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<NewTaskForm />)}}/>
          
          <Route exact path='/add_task' 
                  render={() => {return (<AddTaskDetails />)}}/>
          
          <Route exact path='/add_date' 
                  render={() => {return (<AddDateDetails />)}}/>
          

            {/* Team Member Login Form */}
            <Route exact path='/hotel-toolkit-front-end-/' 
                  render={() => {return (<LoginForm />)}}/>
            <Route exact path='/login' 
                  render={() => {return (<LoginForm />)}}/>
                  {/* Team Member Login Form */}
            <Route exact path='/' 
                  render={() => {return (<LoginForm />)}}/>

            {/* All Members Welcome Page */}    
            <Route exact path='/welcome' 
              render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<WelcomePage />)}}/>
           {/* Calendar */}
           <Route exact path='/calendar' 
                  render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<Calendar />)}}/>

            {/* Team Members Home Page */}  
            {/* Will look different for diffeerent access */}  
            <Route exact path='/home'
                  render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<TeamMemberHomePage />)}}/> 
                  
            {/* All Events */} 
            <Route exact path='/events' 
                  render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<EventsList />)}}/> 
            
            {/* Event Show Page*/}
              <Route path='/events/:id' render={(props)=> {
                  let pathId= props.match.params.id
                  return(<EventShowPage pathId = {pathId} />)}}/>

          
            {/* All Updates*/} 
            <Route exact path='/updates' 
                  render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<UpdatesList />)}}/> 
          
            {/* ACCESS RESTRICTIONS */}
            {/* All Team Members ONLY HR/EXEC HAS ACCESS */}
            <Route exact path='/all_team_members' 
                render={() => {return (<TeamMembersList />)}}/>

              {/* Team Member Show Page*/}
             <Route path='/team_members/:id' render={(props)=> {
                  let pathId= props.match.params.id
                  return(<TeamMemberShowPage pathId = {pathId} />)}}/>



            {/* FORMS */} 

            {/* Add Event Form: only MANAGERS have access */} 
            <Route exact path='/add_event' 
                  render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<NewEventForm />)}}/> 

            {/* Add Team Members ONLY HR/EXEC HAS ACCESS */} 
            <Route exact path='/add_team_member' 
                    render={() => {return this.props.currentUser.length == 0?(<LoginForm />):(<NewTeamMemberForm />)}}/>  

          
            <Route component={NotFound}/>
                                     
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    events: state.events,
    departments: state.departments, 
    currentUser: state.currentUser,
    teamMembers: state.teamMembers,
    dates: state.dates,
    tasks: state.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingEvents: bindActionCreators(fetchingEvents, dispatch),
    fetchingDepartments: bindActionCreators(fetchingDepartments, dispatch),
    fetchingTeamMembers: bindActionCreators(fetchingTeamMembers, dispatch),
    fetchingDates: bindActionCreators(fetchingDates, dispatch),
    fetchingTasks: bindActionCreators(fetchingTasks, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
