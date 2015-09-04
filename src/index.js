/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(extend, EventData, GesEvent, NotificationEvent) {
    return function index(_options) {
        var options = {};
        extend(options, _options || {});

        return {
            eventData        : EventData,
            gesEvent         : GesEvent,
            notificationEvent: NotificationEvent
        }
    };
};
