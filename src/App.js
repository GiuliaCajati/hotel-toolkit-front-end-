import './App.css';
//import {useSelector, useDispatch} from 'react-redux'
import React, { Component, Fragment } from "react";
import {connect} from 'react-redux'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';//withRouter
import LoginForm from './components/LoginForm.js'
import WelcomePage from './components/WelcomePage.js'
import UserHomePage from './components/UserHomePage.js'
import UpdatesList from './containers/UpdatesList.js'
import Toolbar from './containers/Toolbar.js'
import EventsList from './containers/EventsList.js'
import { fetchingEvents } from './actions'


class App extends Component {
  componentDidMount() {
    this.props.fetchingEvents()
  }
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' 
                  render={() => <LoginForm />} />
            <Route exact path='/welcome' 
                  render={() => <WelcomePage />} />
            <Route exact path='/home' 
                  render={() => <UserHomePage />} />
            <Route exact path='/events' 
                  render={() => <EventsList />} />
            <Route exact path='/updates' 
                  render={() => <UpdatesList />} />
                
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingEvents: () => { dispatch( fetchingEvents )}
  }
}

export default connect(null, mapDispatchToProps)(App)