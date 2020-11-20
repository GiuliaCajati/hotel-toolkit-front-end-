import './App.css';
//import {useSelector, useDispatch} from 'react-redux'
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';//withRouter
import { Link } from 'react-router-dom' 
//actions
import { fetchingEvents } from './actions'
import { fetchingDepartments } from './actions'
//containers
import UpdatesList from './containers/UpdatesList.js'
import Sidebar from './containers/Sidebar.js'
import EventsList from './containers/EventsList.js'
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
  }
  render() {
 
   
    return (
      <div className="App">
          <Sidebar/>
          <Switch>
            <Route exact path='/login' 
                  render={() => <LoginForm />} />
            <Route exact path='/welcome' 
                  render={() => <WelcomePage />} />
            <Route exact path='/home' 
                  render={() => <TeamMemberHomePage />} />
            <Route exact path='/events' 
                  render={() => <EventsList />} />
            <Route exact path='/updates' 
                  render={() => <UpdatesList />} />
            <Route exact path='/add_team_member' 
                  render={() => <NewTeamMemberForm />} />  
            <Route exact path='/add_event' 
                  render={() => <NewEventForm />} />             
          </Switch>
      
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    events: state.events,
    departments: state.departments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingEvents: bindActionCreators(fetchingEvents, dispatch),
    fetchingDepartments: bindActionCreators(fetchingDepartments, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
