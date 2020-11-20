"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoginState = exports.fetchingDepartments = exports.fetchingEvents = exports.SET_LOGIN_STATE = exports.FETCHED_DEPARTMENTS = exports.FETCHED_EVENTS = void 0;

var _TeamMemberHomePage = _interopRequireDefault(require("../components/TeamMemberHomePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FETCHED_EVENTS = "FETCHED_EVENTS";
exports.FETCHED_EVENTS = FETCHED_EVENTS;
var FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS";
exports.FETCHED_DEPARTMENTS = FETCHED_DEPARTMENTS;
var SET_LOGIN_STATE = "SET_LOGIN_STATE";
exports.SET_LOGIN_STATE = SET_LOGIN_STATE;
var eventsURL = "http://localhost:3000/events";

var fetchingEvents = function fetchingEvents() {
  return function (dispatch) {
    fetch(eventsURL).then(function (res) {
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
var departmentsURL = "http://localhost:3000/departments";

var fetchingDepartments = function fetchingDepartments() {
  return function (dispatch) {
    fetch(departmentsURL).then(function (res) {
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
var teamMemberURL = "http://localhost:3000/login";

var setLoginState = function setLoginState(loginData) {
  return function (dispatch) {
    fetch(teamMemberURL, {
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
    });
  };
};

exports.setLoginState = setLoginState;