/**
 * Created by reharik on 8/13/15.
 */


module.exports = function(EventData, GesEvent, NotificationEvent) {
    return {
        eventData        : EventData,
        gesEvent         : GesEvent,
        notificationEvent: NotificationEvent,
        gesEventFromStream : function(sd) {
            return GesEvent(sd.OriginalEvent.Metadata['eventName'],
                sd.OriginalEvent.Data,
                sd.OriginalEvent.Metadata,
                sd.OriginalPosition);
        }
    }
};
