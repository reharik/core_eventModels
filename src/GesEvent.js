

module.exports = function(bufferToJson){

    return function(_eventName, _data, _metadata, originalPosition)
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
};

