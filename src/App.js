import './App.css';
//import {useSelector, useDispatch} from 'react-redux'
import React, { Component, Fragment } from "react";
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';//withRouter
import { Link } from 'react-router-dom' 
//actions
import { fetchingEvents } from './actions'
//containers
import UpdatesList from './containers/UpdatesList.js'
import Sidebar from './containers/Sidebar.js'
import EventsList from './containers/EventsList.js'
//components
import NewTeamMemberForm from './components/NewTeamMemberForm.js'
import LoginForm from './components/LoginForm.js'
import WelcomePage from './components/WelcomePage.js'
import TeamMemberHomePage from './components/TeamMemberHomePage.js'
import { bindActionCreators } from 'redux';



class App extends Component {
  componentDidMount() {
    this.props.fetchingEvents()
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
          </Switch>
      
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingEvents: bindActionCreators(fetchingEvents, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
