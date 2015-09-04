

module.exports = function(bufferToJson){

    var init = function(_eventName, _data, _metadata, originalPosition)
    {
        var eventName =  bufferToJson(_eventName);
        var metadata = bufferToJson(_metadata);
        var data = bufferToJson(_data);
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

