"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../actions/index");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var eventsReducer = function eventsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.FETCHED_EVENTS:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));

    case _index.ADD_EVENT:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));

    case _index.FILTER_EVENTS:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));
    // case ADD_EVENTS_TASKS:
    //     //working on it
    //     //state[0].tasks.push(TASK?)
    //     return [...action.payload]
    // case DELETE_EVENTS_TASKS:
    //     //working on it
    //     return [...action.payload]

    default:
      return state;
  }
}; //state.filter(task => task.id !== action.payload) 


var _default = eventsReducer;
exports["default"] = _default;