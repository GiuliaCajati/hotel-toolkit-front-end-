"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _setLoginState = _interopRequireDefault(require("./setLoginState"));

var _events = _interopRequireDefault(require("./events"));

var _departments = _interopRequireDefault(require("./departments"));

var _redux = require("redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducers = (0, _redux.combineReducers)({
  setLoginState: _setLoginState["default"],
  events: _events["default"],
  departments: _departments["default"]
});
var _default = rootReducers;
exports["default"] = _default;