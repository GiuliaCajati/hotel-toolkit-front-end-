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

var tasksReducer = function tasksReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.FETCHED_TASKS:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));

    case _index.ADD_TASK:
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));

    case _index.DELETE_TASK:
      return state.filter(function (task) {
        return task.id !== action.payload;
      });

    case _index.UPDATE_TASK:
      return [state.filter(function (item) {
        return item.id !== action.payload[0].id;
      })].concat(_toConsumableArray(action.payload)).flat();

    case _index.ADD_TASK_NOTES:
      return [state.filter(function (item) {
        return item.id !== action.payload[0].id;
      })].concat(_toConsumableArray(action.payload)).flat();

    default:
      return state;
  }
};

var _default = tasksReducer;
exports["default"] = _default;