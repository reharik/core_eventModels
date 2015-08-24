

var Buffer = require('buffer').Buffer;

module.exports = function(bufferToJson){

    var init = function(_eventName, _data, _metadata, originalPosition)
    {
        var eventName = Buffer.isBuffer(_eventName) ? bufferToJson(_eventName) : _eventName;
        var metadata = Buffer.isBuffer(_metadata) ? bufferToJson(_metadata) : _metadata;
        var data = Buffer.isBuffer(_data) ? bufferToJson(_data) : _data;
        // this is provided by the repository or the distributer

        return {
            eventName: eventName,
            metadata: metadata,
            data: data,
            originalPosition: originalPosition
        };
    };
    var gesEventFromStream = function(sd) {
        return init(sd.OriginalEvent.Metadata['eventName'],
            sd.OriginalEvent.Data,
            sd.OriginalEvent.Metadata,
            sd.OriginalPosition);
    };

    return {init:init, gesEventFromStream:gesEventFromStream};
};

