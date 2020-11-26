"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNewUser = exports.setLogOutState = exports.setLoginState = exports.fetchingTeamMembers = exports.displayTeamMember = exports.fetchingDepartments = exports.displayEvent = exports.editTask = exports.deleteTask = exports.addTask = exports.addDateEvent = exports.addEvent = exports.searchEvents = exports.filterEvents = exports.fetchingEvents = exports.fetchingDates = exports.EDIT_TASK = exports.DELETE_TASK = exports.ADD_TASK = exports.ADD_DATE_EVENT = exports.ADD_EVENT = exports.SEARCH_EVENTS = exports.DISPLAY_EVENT = exports.DISPLAY_TEAM_MEMBER = exports.SET_NEW_USER = exports.SET_LOGOUT_STATE = exports.SET_LOGIN_STATE = exports.FETCHED_TEAM_MEMBERS = exports.FETCHED_DEPARTMENTS = exports.FILTER_EVENTS = exports.FETCHED_EVENTS = exports.FETCHED_DATES = void 0;

var _index = require("../index.js");

//fetch 
var FETCHED_DATES = "FETCHED_DATES";
exports.FETCHED_DATES = FETCHED_DATES;
var FETCHED_EVENTS = "FETCHED_EVENTS";
exports.FETCHED_EVENTS = FETCHED_EVENTS;
var FILTER_EVENTS = "FILTER_EVENTS";
exports.FILTER_EVENTS = FILTER_EVENTS;
var FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS";
exports.FETCHED_DEPARTMENTS = FETCHED_DEPARTMENTS;
var FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"; //login/logout

exports.FETCHED_TEAM_MEMBERS = FETCHED_TEAM_MEMBERS;
var SET_LOGIN_STATE = "SET_LOGIN_STATE";
exports.SET_LOGIN_STATE = SET_LOGIN_STATE;
var SET_LOGOUT_STATE = "SET_LOGOUT_STATE";
exports.SET_LOGOUT_STATE = SET_LOGOUT_STATE;
var SET_NEW_USER = "SET_NEW_USER";
exports.SET_NEW_USER = SET_NEW_USER;
var DISPLAY_TEAM_MEMBER = "DISPLAY_TEAM_MEMBER";
exports.DISPLAY_TEAM_MEMBER = DISPLAY_TEAM_MEMBER;
var DISPLAY_EVENT = "DISPLAY_EVENT";
exports.DISPLAY_EVENT = DISPLAY_EVENT;
var SEARCH_EVENTS = "SEARCH_EVENTS";
exports.SEARCH_EVENTS = SEARCH_EVENTS;
var ADD_EVENT = "ADD_EVENT";
exports.ADD_EVENT = ADD_EVENT;
var ADD_DATE_EVENT = "ADD_DATE_EVENT";
exports.ADD_DATE_EVENT = ADD_DATE_EVENT;
var ADD_TASK = "ADD_TASK"; // //need to make

exports.ADD_TASK = ADD_TASK;
var DELETE_TASK = "DELETE_TASK";
exports.DELETE_TASK = DELETE_TASK;
var EDIT_TASK = "EDIT_TASK";
exports.EDIT_TASK = EDIT_TASK;
var URL = "http://localhost:3000/";

var fetchingDates = function fetchingDates() {
  return function (dispatch) {
    fetch(URL + "date_infos").then(function (res) {
      return res.json();
    }).then(function (dates) {
      dispatch({
        type: "FETCHED_DATES",
        payload: dates
      });
    });
  };
};

exports.fetchingDates = fetchingDates;

var fetchingEvents = function fetchingEvents() {
  return function (dispatch) {
    fetch(URL + "events").then(function (res) {
      return res.json();
    }).then(function (events) {
      dispatch({
        type: "FETCHED_EVENTS",
        payload: events
      });
    });
  };
};

exports.fetchingEvents = fetchingEvents;

var filterEvents = function filterEvents(filteredEvents) {
  return {
    type: FILTER_EVENTS,
    payload: filteredEvents
  };
}; //fix this 


exports.filterEvents = filterEvents;

var searchEvents = function searchEvents(filteredEvents) {
  return {
    type: SEARCH_EVENTS,
    payload: filteredEvents
  };
};

exports.searchEvents = searchEvents;

var addEvent = function addEvent(newEvent) {
  return function (dispatch) {
    debugger;
    fetch(URL + "/events", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newEvent)
    }).then(function (res) {
      return res.json();
    }).then(function (newEvent) {
      dispatch({
        type: "ADD_EVENT",
        payload: [newEvent]
      });

      _index.history.push("/events/".concat(newEvent.id));
    });
  };
};

exports.addEvent = addEvent;

var addDateEvent = function addDateEvent(newDateEvent) {
  return function (dispatch) {
    fetch(URL + "/date_events", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newDateEvent)
    }).then(function (res) {
      return res.json();
    }).then(function (newDateEvent) {
      dispatch({
        type: "ADD_DATE_EVENT",
        payload: [newDateEvent]
      });

      _index.history.push('/events');
    });
  };
};

exports.addDateEvent = addDateEvent;

var addTask = function addTask(newTask) {
  return function (dispatch) {
    debugger;
    fetch(URL + "/tasks", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(function (res) {
      return res.json();
    }).then(function (newTask) {
      dispatch({
        type: "ADD_TASK",
        payload: [newTask]
      });

      _index.history.push('/home');
    });
  };
}; //DELETE_TASK


exports.addTask = addTask;

var deleteTask = function deleteTask(selectedTask) {
  return function (dispatch) {
    fetch(URL + "".concat(selectedTask.id), {
      method: "DELETE"
    }).then(function (res) {
      return res.json();
    }).then(function (selectedTask) {
      dispatch({
        type: "DELETE_TASK",
        payload: selectedTask
      });

      _index.history.push('/home');
    }); //  history.push('/events') 
  };
}; //EDIT_TASK


exports.deleteTask = deleteTask;

var editTask = function editTask(selectedTask) {
  return function (dispatch) {
    debugger;
    fetch(URL + "".concat(selectedTask), {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(selectedTask)
    }).then(function (res) {
      return res.json();
    }).then(function (selectedTask) {
      dispatch({
        type: "EDIT_TASK",
        payload: [selectedTask]
      }); //  history.push('/events')
    });
  };
};

exports.editTask = editTask;

var displayEvent = function displayEvent(selectedEvent) {
  return {
    type: DISPLAY_EVENT,
    payload: selectedEvent
  };
};

exports.displayEvent = displayEvent;

var fetchingDepartments = function fetchingDepartments() {
  return function (dispatch) {
    fetch(URL + "departments").then(function (res) {
      return res.json();
    }).then(function (departments) {
      dispatch({
        type: "FETCHED_DEPARTMENTS",
        payload: departments
      });
    });
  };
};

exports.fetchingDepartments = fetchingDepartments;

var displayTeamMember = function displayTeamMember(selecteTeamMember) {
  return {
    type: DISPLAY_TEAM_MEMBER,
    payload: selecteTeamMember
  };
};

exports.displayTeamMember = displayTeamMember;

var fetchingTeamMembers = function fetchingTeamMembers() {
  return function (dispatch) {
    fetch(URL + "team_members").then(function (res) {
      return res.json();
    }).then(function (team_members) {
      dispatch({
        type: "FETCHED_TEAM_MEMBERS",
        payload: team_members
      });
    });
  };
};

exports.fetchingTeamMembers = fetchingTeamMembers;

var setLoginState = function setLoginState(loginData) {
  return function (dispatch) {
    fetch(URL + "login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(loginData)
    }).then(function (res) {
      return res.json();
    }).then(function (loginData) {
      dispatch({
        type: "SET_LOGIN_STATE",
        payload: [loginData]
      });

      _index.history.push('/home');
    });
  };
};

exports.setLoginState = setLoginState;

var setLogOutState = function setLogOutState() {
  return {
    type: SET_LOGOUT_STATE
  };
};

exports.setLogOutState = setLogOutState;

var setNewUser = function setNewUser(newUserData) {
  return function (dispatch) {
    fetch(URL + "team_members", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUserData)
    }).then(function (res) {
      return res.json();
    }).then(function (newUserData) {
      dispatch({
        type: "SET_NEW_USER",
        payload: [newUserData]
      }); //user show page
      //history.push('/home')
    });
  };
};

exports.setNewUser = setNewUser;