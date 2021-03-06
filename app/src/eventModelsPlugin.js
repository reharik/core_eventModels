/**
 * Created by reharik on 8/13/15.
 */
"use strict";

module.exports = function(EventData, GesEvent, eventFunctions, functionalHelpers) {
    return {
        eventData        : EventData,
        gesEvent         : GesEvent,
        eventFunctions,
        functionalHelpers,
        gesEventFromStream : function(sd) {
            return GesEvent(sd.OriginalEvent.Metadata['eventName'],
                sd.OriginalEvent.Data,
                sd.OriginalEvent.Metadata,
                sd.OriginalPosition);
        }
    }
};
