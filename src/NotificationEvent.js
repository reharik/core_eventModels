/**
 * Created by rharik on 6/19/15.
 */


var GesEvent = require('./GesEvent');

module.exports = function( _result, _message, _initialEvent) {
    var eventName = 'notification';
    var data = {
        result: _result,
        message: _message,
        initialEvent: _initialEvent
    };
    // this is provided by the repository or the distributer

    return {
        eventName: eventName,
        data: data
    }
};
