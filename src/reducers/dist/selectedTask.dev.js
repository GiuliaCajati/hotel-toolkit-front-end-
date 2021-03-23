"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../actions/index");

var taskReducer = function taskReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.DISPLAY_TASK:
      return [action.payload];

    case _index.CLEAR_DISPLAY_TASK:
      return [];

    default:
      return state;
  }
};

var _default = taskReducer;
exports["default"] = _default;