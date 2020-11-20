"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var loggedReducer = function loggedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SIGN_IN':
      return [].concat(_toConsumableArray(state), _toConsumableArray(action.payload));

    default:
      return state;
  }
}; // export const loginReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case t.SET_LOGIN_STATE:
//         return {
//           ...state,
//           ...action.payload, // this is what we expect to get back from API call and login page input
//           isLoggedIn: true, // we set this as true on login
//         };
//       default:
//         return state;
//     }
//   };


var _default = loggedReducer;
exports["default"] = _default;