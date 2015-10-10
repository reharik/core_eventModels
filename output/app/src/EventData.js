/**
 * Created by rharik on 6/12/15.
 */

"use strict";

module.exports = function (uuid, JSON, buffer) {
    return function EventData(eventName, data, metadata) {
        metadata = metadata || {};
        data = JSON.stringify(data || {});
        metadata = metadata || {};
        metadata.eventName = eventName;
        metadata = JSON.stringify(metadata);

        return {
            EventId: uuid.v4(),
            Type: eventName,
            IsJson: true,
            Data: new buffer.Buffer(data),
            Metadata: new buffer.Buffer(metadata),
            friendlyDisplay: function friendlyDisplay() {
                return JSON.stringify({
                    EventId: this.EventId,
                    Type: this.Type,
                    IsJson: this.IsJson,
                    Data: this.Data.toString(),
                    MetaData: this.Metadata.toString()
                });
            }
        };
    };
};