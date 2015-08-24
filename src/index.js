/**
 * Created by reharik on 8/13/15.
 */

var extend = require('extend');
var yowlWrapper = require('yowlwrapper');
var EventData = require('./EventData');
var _GesEvent = require('./GesEvent');
var NotificationEvent = require('./NotificationEvent');
var _bufferToJson = require('./bufferToJson');

module.exports = function index(_options) {
    var options = {
        logger: {
            moduleName: 'EventModels'
        }
    };
    extend(options, _options || {});

    var logger = yowlWrapper(options.logger);
    var bufferToJson = _bufferToJson(logger);
    var GesEvent = _GesEvent(bufferToJson);
    return{
        eventData:EventData,
        gesEvent:GesEvent,
        notificationEvent:NotificationEvent
    }
};