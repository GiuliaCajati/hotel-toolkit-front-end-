"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('googleapis'),
    google = _require.google;

var Event =
/*#__PURE__*/
function () {
  //This auth object should be passed whenever a new instance of class is created in order to authenticate the requests.
  function Event(auth) {
    _classCallCheck(this, Event);

    this.auth = auth;
    this.calendar = google.calendar({
      version: 'v3',
      auth: auth
    });
  }

  _createClass(Event, [{
    key: "addEvent",
    value: function addEvent(summary, description, start_date, end_date) {
      //This is a standard format for creating calendar events.
      var event = {
        'summary': summary,
        'description': description,
        'start': {
          'dateTime': start_date,
          // Format: '2015-05-28T09:00:00-07:00'
          'timeZone': 'Asia/Calcutta'
        },
        'end': {
          'dateTime': end_date,
          'timeZone': 'Asia/Calcutta'
        },
        'reminders': {
          'useDefault': false,
          'overrides': [{
            'method': 'email',
            'minutes': 24 * 60
          }, {
            'method': 'popup',
            'minutes': 15
          }]
        }
      }; //We make a request to Google Calendar API.

      this.calendar.events.insert({
        auth: this.auth,
        calendarId: 'primary',
        resource: event
      }, function (err, event) {
        if (err) {
          console.log('There was an error contacting the Calendar service: ' + err);
          return;
        }

        console.log('Event created: %s', event.htmlLink);
      });
    }
  }]);

  return Event;
}();

module.exports = Event;