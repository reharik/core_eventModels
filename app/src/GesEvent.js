
"use strict";

module.exports = function(eventFunctions){
    return function(eventName, _data, _metadata, originalPosition)
    {
        var ef = eventFunctions;
        return {
            eventName,
            metadata: ef.parseMetadata(_metadata).getOrElse(),
            data: ef.parseData(_data).getOrElse(),
            originalPosition
        };
    };
};

