/**
 * Created by reharik on 8/13/15.
 */

'use strict';

module.exports = function (EventData, GesEvent, NotificationEvent) {
    return {
        eventData: EventData,
        gesEvent: GesEvent,
        notificationEvent: NotificationEvent,
        gesEventFromStream: function gesEventFromStream(sd) {
            return GesEvent(sd.OriginalEvent.Metadata['eventName'], sd.OriginalEvent.Data, sd.OriginalEvent.Metadata, sd.OriginalPosition);
        }
    };
};