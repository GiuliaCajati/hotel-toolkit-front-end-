"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _setLoginState = _interopRequireDefault(require("./setLoginState"));

var _addTeamMember = _interopRequireDefault(require("./addTeamMember"));

var _selectedTeamMember = _interopRequireDefault(require("./selectedTeamMember"));

var _teamMembers = _interopRequireDefault(require("./teamMembers"));

var _departments = _interopRequireDefault(require("./departments"));

var _dates = _interopRequireDefault(require("./dates"));

var _events = _interopRequireDefault(require("./events"));

var _selectedEvent = _interopRequireDefault(require("./selectedEvent"));

var _tasks = _interopRequireDefault(require("./tasks"));

var _selectedTask = _interopRequireDefault(require("./selectedTask"));

var _dateEvent = _interopRequireDefault(require("./dateEvent"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducers = (0, _redux.combineReducers)({
  currentUser: _setLoginState["default"],
  setNewUser: _addTeamMember["default"],
  events: _events["default"],
  departments: _departments["default"],
  teamMembers: _teamMembers["default"],
  teamMember: _selectedTeamMember["default"],
  event: _selectedEvent["default"],
  dates: _dates["default"],
  tasks: _tasks["default"],
  task: _selectedTask["default"],
  dateEvent: _dateEvent["default"]
});
var _default = rootReducers;
exports["default"] = _default;