"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../actions/index");

var teamMemberReducer = function teamMemberReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _index.DISPLAY_TEAM_MEMBER:
      return [action.payload];

    default:
      return state;
  }
};

var _default = teamMemberReducer;
exports["default"] = _default;