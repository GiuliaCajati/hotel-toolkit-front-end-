"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _reactRedux = require("react-redux");

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      marginTop: theme.spacing(1),
      // display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      marginLeft: '20%',
      overflow: 'auto',
      height: 550 // overflow: 'auto',

    },
    form: _defineProperty({
      marginLeft: '10%',
      marginTop: '10%',
      width: '80%'
    }, "marginTop", theme.spacing(10)),
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    //calandar
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(35),
      width: 150
    },
    //drop down
    formControl: {
      margin: theme.spacing(10),
      minWidth: 300
    }
  };
});