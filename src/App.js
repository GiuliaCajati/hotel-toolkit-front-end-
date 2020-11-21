import './App.css';
//import {useSelector, useDispatch} from 'react-redux'
import React, { Component } from "react";
import { connect } from 'react-redux'
import {  Switch, Route } from 'react-router-dom';//withRouter

//actions
import { fetchingEvents } from './actions'
import { fetchingDepartments } from './actions'
import { fetchingTeamMembers } from './actions'

//containers
import UpdatesList from './containers/UpdatesList.js'
import SideBar from './containers/SideBar.js'
import EventsList from './containers/EventsList.js'
import TeamMembersList from './containers/TeamMembersList.js'
//components
import NewTeamMemberForm from './components/NewTeamMemberForm.js'
import LoginForm from './components/LoginForm.js'
import NewEventForm from './components/NewEventForm.js'
import WelcomePage from './components/WelcomePage.js'
import TeamMemberHomePage from './components/TeamMemberHomePage.js'
import { bindActionCreators } from 'redux';


class App extends Component {
  componentDidMount() {
    this.props.fetchingEvents()
    this.props.fetchingDepartments()
    this.props.fetchingTeamMembers() 
  }
  render() {
 
 

    return (
      <div className="App">

          <SideBar/>

          <Switch>

            {/* Team Member Login Form */}
            <Route exact path='/login' 
                  render={() => <LoginForm />} /> 

            {/* All Members Welcome Page */}    
            <Route exact path='/welcome' 
              render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<WelcomePage />)}}/>

            {/* Team Members Home Page */}  
            {/* Will look different for diffeerent access */}  
            <Route exact path='/home'
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<TeamMemberHomePage />)}}/> 
                  
            {/* All Events */} 
            <Route exact path='/events' 
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<EventsList />)}}/> 

            {/* All Updates: Not made yet */} 
            <Route exact path='/updates' 
                   render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<UpdatesList />)}}/> 
               
            {/* ACCESS RESTRICTIONS */}
            {/* All Team Members ONLY HR/EXEC HAS ACCESS */}
            <Route exact path='/all_team_members' 
                render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<TeamMembersList />)}}/>

            {/* FORMS */} 

            {/* Add Event Form: only MANAGERS have access */} 
            <Route exact path='/add_event' 
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<NewEventForm />)}}/> 

            {/* Add Team Members ONLY HR/EXEC HAS ACCESS */} 
            <Route exact path='/add_team_member' 
                    render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<NewTeamMemberForm />)}}/>     
                           
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    events: state.events,
    departments: state.departments, 
    setLoginState: state.setLoginState,
    teamMembers: state.teamMembers 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingEvents: bindActionCreators(fetchingEvents, dispatch),
    fetchingDepartments: bindActionCreators(fetchingDepartments, dispatch),
    fetchingTeamMembers: bindActionCreators(fetchingTeamMembers, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
