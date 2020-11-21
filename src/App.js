import './App.css';
//import {useSelector, useDispatch} from 'react-redux'
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';//withRouter
import { Link } from 'react-router-dom' 
//actions
import { fetchingEvents } from './actions'
import { fetchingDepartments } from './actions'
import { fetchingTeamMembers } from './actions'

//containers
import UpdatesList from './containers/UpdatesList.js'
import Sidebar from './containers/Sidebar.js'
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

          <Sidebar/>
          {/* switch with other side bar */}

          <Switch>
            <Route exact path='/login' 
                  render={() => <LoginForm />} /> 

            <Route exact path='/welcome' 
              render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<WelcomePage />)}}/>

            <Route exact path='/home'
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<TeamMemberHomePage />)}}/> 
                  

            <Route exact path='/events' 
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<EventsList />)}}/> 

        
            <Route exact path='/updates' 
                   render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<UpdatesList />)}}/> 
               
            <Route exact path='/add_team_member' 
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<NewTeamMemberForm />)}}/> 
                
              <Route exact path='/welcome' 
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<TeamMembersList />)}}/>

            <Route exact path='/add_event' 
                  render={() => {return this.props.setLoginState.length == 0?(<LoginForm />):(<NewEventForm />)}}/> 
                  
                           
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
