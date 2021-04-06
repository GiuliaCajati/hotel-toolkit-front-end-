"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTeamMember = exports.setLogOutState = exports.setLoginState = exports.fetchingTeamMembers = exports.displayTeamMember = exports.fetchingDepartments = exports.displayEvent = exports.fetchingTasks = exports.addEvent = exports.filterEvents = exports.fetchingEvents = exports.fetchingDates = exports.addDateEvent = exports.clearDisplayEvent = exports.clearDisplayTask = exports.displayTask = exports.deleteTask = exports.updateTask = exports.addTaskNotes = exports.addTask = exports.CLEAR_DISPLAY_TASK = exports.DISPLAY_TASK = exports.ADD_TASK_NOTES = exports.DELETE_TASK = exports.ADD_TASK = exports.UPDATE_TASK = exports.ADD_DATE_EVENT = exports.FILTER_EVENTS = exports.ADD_EVENT = exports.CLEAR_DISPLAY_EVENT = exports.DISPLAY_EVENT = exports.FETCHED_TASKS = exports.FETCHED_TEAM_MEMBERS = exports.FETCHED_DEPARTMENTS = exports.FETCHED_EVENTS = exports.ADD_TEAM_MEMBER = exports.DISPLAY_TEAM_MEMBER = exports.SET_LOGOUT_STATE = exports.SET_LOGIN_STATE = exports.FETCHED_DATES = void 0;

var _index = require("../index.js");

var FETCHED_DATES = "FETCHED_DATES"; //AddDateDetails, AddTaskDetails, NewTaskForm, WelcomePage
//goal is to make all fetches from dates 
//where are modifications made? 
//login/logout

exports.FETCHED_DATES = FETCHED_DATES;
var SET_LOGIN_STATE = "SET_LOGIN_STATE";
exports.SET_LOGIN_STATE = SET_LOGIN_STATE;
var SET_LOGOUT_STATE = "SET_LOGOUT_STATE";
exports.SET_LOGOUT_STATE = SET_LOGOUT_STATE;
var DISPLAY_TEAM_MEMBER = "DISPLAY_TEAM_MEMBER"; //TeamMemberShowPage, TeamMemberHomePage, 

exports.DISPLAY_TEAM_MEMBER = DISPLAY_TEAM_MEMBER;
var ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER";
exports.ADD_TEAM_MEMBER = ADD_TEAM_MEMBER;
var FETCHED_EVENTS = "FETCHED_EVENTS"; //Calendar, EventFilter

exports.FETCHED_EVENTS = FETCHED_EVENTS;
var FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"; //AddTaskDetails 

exports.FETCHED_DEPARTMENTS = FETCHED_DEPARTMENTS;
var FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"; //NewTaskForm

exports.FETCHED_TEAM_MEMBERS = FETCHED_TEAM_MEMBERS;
var FETCHED_TASKS = "FETCHED_TASKS"; //Calendar, EventShowPage, WelcomePage, ThisWeek, TeamMemberShowPage, TeamMemberHomePage, TasksShowPage 

exports.FETCHED_TASKS = FETCHED_TASKS;
var DISPLAY_EVENT = "DISPLAY_EVENT"; //AddDateDetails, Calendar

exports.DISPLAY_EVENT = DISPLAY_EVENT;
var CLEAR_DISPLAY_EVENT = "CLEAR_DISPLAY_EVENT"; //Calendar

exports.CLEAR_DISPLAY_EVENT = CLEAR_DISPLAY_EVENT;
var ADD_EVENT = "ADD_EVENT"; //NewEventForm

exports.ADD_EVENT = ADD_EVENT;
var FILTER_EVENTS = "FILTER_EVENTS"; //EventIndexPage

exports.FILTER_EVENTS = FILTER_EVENTS;
var ADD_DATE_EVENT = "ADD_DATE_EVENT"; //AddDateDetails
// Task

exports.ADD_DATE_EVENT = ADD_DATE_EVENT;
var UPDATE_TASK = "UPDATE_TASK"; //TeamMemberHomePage

exports.UPDATE_TASK = UPDATE_TASK;
var ADD_TASK = "ADD_TASK"; //AddDateDetails, NewTaskForm

exports.ADD_TASK = ADD_TASK;
var DELETE_TASK = "DELETE_TASK"; //TasksShowPage

exports.DELETE_TASK = DELETE_TASK;
var ADD_TASK_NOTES = "ADD_TASK_NOTES"; //AddTaskNotes

exports.ADD_TASK_NOTES = ADD_TASK_NOTES;
var DISPLAY_TASK = "DISPLAY_TASK"; //Calendar, EventShowPage, TasksShowPage

exports.DISPLAY_TASK = DISPLAY_TASK;
var CLEAR_DISPLAY_TASK = "CLEAR_DISPLAY_TASK"; //Calendar
//const URL = "http://localhost:3000/"

exports.CLEAR_DISPLAY_TASK = CLEAR_DISPLAY_TASK;
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
}; //delete tasks: need to change event state, events state, user state, dates? 


exports.updateTask = updateTask;

var deleteTask = function deleteTask(selectedTaskID) {
  return function (dispatch) {
    fetch(URL + "tasks/".concat(selectedTaskID), {
      method: "DELETE"
    }).then(function (res) {
      return console.log(res);
    }).then(function (task) {
      dispatch({
        type: "DELETE_TASK",
        payload: selectedTaskID
      });

      _index.history.push('/home');
    });
  };
};

exports.deleteTask = deleteTask;

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
};

exports.clearDisplayEvent = clearDisplayEvent;

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
};

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
};

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
};

exports.addEvent = addEvent;

var fetchingTasks = function fetchingTasks() {
  return function (dispatch) {
    fetch(URL + "tasks").then(function (res) {
      return res.json();
    }).then(function (tasks) {
      dispatch({
        type: "FETCHED_TASKS",
        payload: tasks
      }); // history.push('/events')
    }); //  history.push('/events') 
  };
};

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
      if (loginData.message == "This user is not authenticated") {
        return alert(loginData.message); //clear currentUser 
      } else {
        dispatch({
          type: "SET_LOGIN_STATE",
          payload: [loginData]
        });
      }
    });
  };
};

exports.setLoginState = setLoginState;

var setLogOutState = function setLogOutState() {
  return {
    type: SET_LOGOUT_STATE
  };
}; //add team member 


exports.setLogOutState = setLogOutState;

var addTeamMember = function addTeamMember(newUserData) {
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
        type: "ADD_TEAM_MEMBER",
        payload: [newUserData]
      }); //user show page
      //history.push('/home')
    });
  };
};

exports.addTeamMember = addTeamMember;