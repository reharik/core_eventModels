/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(extend, EventData, GesEvent, NotificationEvent) {
    return function plugin(_options) {
        var options = extend({}, _options || {});

        return {
            eventData        : EventData,
            gesEvent         : GesEvent,
            notificationEvent: NotificationEvent
        }
    };
};
