"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNewUser = exports.setLogOutState = exports.setLoginState = exports.fetchingTeamMembers = exports.displayTeamMember = exports.fetchingDepartments = exports.displayEvent = exports.fetchingTasks = exports.addEvent = exports.filterEvents = exports.fetchingEvents = exports.fetchingDates = exports.addDateEvent = exports.searchEvents = exports.deleteTask = exports.clearDisplayEvent = exports.clearDisplayTask = exports.displayTask = exports.updateTask = exports.addTaskNotes = exports.addTask = exports.EDIT_TASK = exports.ADD_TASK_NOTES = exports.DELETE_TASK = exports.CLEAR_DISPLAY_TASK = exports.DISPLAY_TASK = exports.ADD_TASK = exports.UPDATE_TASK = exports.ADD_DATE_EVENT = exports.ADD_EVENT = exports.SEARCH_EVENTS = exports.CLEAR_DISPLAY_EVENT = exports.DISPLAY_EVENT = exports.DISPLAY_TEAM_MEMBER = exports.SET_NEW_USER = exports.SET_LOGOUT_STATE = exports.SET_LOGIN_STATE = exports.FETCHED_TASKS = exports.FETCHED_TEAM_MEMBERS = exports.FETCHED_DEPARTMENTS = exports.FILTER_EVENTS = exports.FETCHED_EVENTS = exports.FETCHED_DATES = void 0;

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
var FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS";
exports.FETCHED_TEAM_MEMBERS = FETCHED_TEAM_MEMBERS;
var FETCHED_TASKS = "FETCHED_TASKS"; //login/logout

exports.FETCHED_TASKS = FETCHED_TASKS;
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
var CLEAR_DISPLAY_EVENT = "CLEAR_DISPLAY_EVENT";
exports.CLEAR_DISPLAY_EVENT = CLEAR_DISPLAY_EVENT;
var SEARCH_EVENTS = "SEARCH_EVENTS";
exports.SEARCH_EVENTS = SEARCH_EVENTS;
var ADD_EVENT = "ADD_EVENT";
exports.ADD_EVENT = ADD_EVENT;
var ADD_DATE_EVENT = "ADD_DATE_EVENT"; //task

exports.ADD_DATE_EVENT = ADD_DATE_EVENT;
var UPDATE_TASK = "UPDATE_TASK";
exports.UPDATE_TASK = UPDATE_TASK;
var ADD_TASK = "ADD_TASK";
exports.ADD_TASK = ADD_TASK;
var DISPLAY_TASK = "DISPLAY_TASK";
exports.DISPLAY_TASK = DISPLAY_TASK;
var CLEAR_DISPLAY_TASK = "CLEAR_DISPLAY_TASK";
exports.CLEAR_DISPLAY_TASK = CLEAR_DISPLAY_TASK;
var DELETE_TASK = "DELETE_TASK";
exports.DELETE_TASK = DELETE_TASK;
var ADD_TASK_NOTES = "ADD_TASK_NOTES"; //need to make 

exports.ADD_TASK_NOTES = ADD_TASK_NOTES;
var EDIT_TASK = "EDIT_TASK"; //const URL = "http://localhost:3000/"

exports.EDIT_TASK = EDIT_TASK;
var URL = "https://hotel-toolkit.herokuapp.com/";

var addTask = function addTask(newTask) {
  debugger;
  return function (dispatch) {
    fetch(URL + "tasks", {
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
};

exports.addTask = addTask;

var addTaskNotes = function addTaskNotes(taskId, Addednotes) {
  debugger;
  return function (dispatch) {
    fetch(URL + "/add_notes/".concat(taskId), {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        notes: Addednotes
      })
    }).then(function (res) {
      return res.json();
    }).then(function (updatedTask) {
      dispatch({
        //updatesTask.status = true
        type: "ADD_TASK_NOTES",
        payload: [updatedTask]
      });

      _index.history.push('/home');
    });
  };
};

exports.addTaskNotes = addTaskNotes;

var updateTask = function updateTask(taskId, checked) {
  return function (dispatch) {
    fetch(URL + "tasks/".concat(taskId), {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        status: checked
      })
    }).then(function (res) {
      return res.json();
    }).then(function (updatedTask) {
      dispatch({
        //updatesTask.status = true
        type: "UPDATE_TASK",
        payload: [updatedTask]
      });

      _index.history.push('/home');
    });
  };
};

exports.updateTask = updateTask;

var displayTask = function displayTask(selectedTask) {
  return {
    type: DISPLAY_TASK,
    payload: selectedTask
  };
};

exports.displayTask = displayTask;

var clearDisplayTask = function clearDisplayTask() {
  return {
    type: CLEAR_DISPLAY_TASK
  };
};

exports.clearDisplayTask = clearDisplayTask;

var clearDisplayEvent = function clearDisplayEvent() {
  return {
    type: CLEAR_DISPLAY_EVENT
  };
}; //delete tasks: need to change event state, events state, user state, dates? 


exports.clearDisplayEvent = clearDisplayEvent;

var deleteTask = function deleteTask(selectedTaskID) {
  return function (dispatch) {
    fetch(URL + "tasks/".concat(selectedTaskID), {
      method: "DELETE"
    }).then(function (res) {
      return console.log(res);
    }).then(function (task) {
      debugger;
      dispatch({
        type: "DELETE_TASK",
        payload: selectedTaskID
      });

      _index.history.push('/home');
    });
  };
}; //not yet working 


exports.deleteTask = deleteTask;

var searchEvents = function searchEvents(filteredEvents) {
  return {
    type: SEARCH_EVENTS,
    payload: filteredEvents
  };
};

exports.searchEvents = searchEvents;

var addDateEvent = function addDateEvent(newDateEvent) {
  debugger;
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
}; //fetching dates 


exports.addDateEvent = addDateEvent;

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
}; // fetchin events 


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
}; //radio filter 


exports.fetchingEvents = fetchingEvents;

var filterEvents = function filterEvents(filteredEvents) {
  return {
    type: FILTER_EVENTS,
    payload: filteredEvents
  };
}; //add event 


exports.filterEvents = filterEvents;

var addEvent = function addEvent(newEvent) {
  return function (dispatch) {
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
}; //fetch Tasks


exports.addEvent = addEvent;

var fetchingTasks = function fetchingTasks() {
  return function (dispatch) {
    fetch(URL + "tasks").then(function (res) {
      return res.json();
    }).then(function (tasks) {
      dispatch({
        type: "FETCHED_TASKS",
        payload: tasks
      });

      _index.history.push('/events');
    }); //  history.push('/events') 
  };
}; //event show page 


exports.fetchingTasks = fetchingTasks;

var displayEvent = function displayEvent(selectedEvent) {
  return {
    type: DISPLAY_EVENT,
    payload: selectedEvent
  };
}; //departments for new team member form 


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
}; //team member show page 


exports.fetchingDepartments = fetchingDepartments;

var displayTeamMember = function displayTeamMember(selecteTeamMember) {
  return {
    type: DISPLAY_TEAM_MEMBER,
    payload: selecteTeamMember
  };
}; //fetching team members 


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
}; //login


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
}; //logout 


exports.setLoginState = setLoginState;

var setLogOutState = function setLogOutState() {
  return {
    type: SET_LOGOUT_STATE
  };
}; //add team member 


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