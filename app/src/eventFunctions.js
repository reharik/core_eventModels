
module.exports = function(_, _fantasy, functionalHelpers){
    var fh = functionalHelpers;
    var getEventType = _.compose(_.chain(fh.safeProp('EventType')), fh.safeProp('Event'));
    var isNonSystemEvent = _.compose(_.chain(fh.doesNotStartWith('$')), getEventType);
    var metaData = _.compose(_.chain(fh.safeProp('Metadata')), fh.safeProp('OriginalEvent'));
    var data = _.compose(_.chain(fh.safeProp('Data')), fh.safeProp('OriginalEvent'));
    var parseMetadata = _.compose(_.chain(fh.parseBuffer), metaData);
    var parseData = _.compose(_.chain(fh.parseBuffer), data);
    var isEventTypeEvent = _.compose(_.chain(fh.matches('event')), _.chain(fh.safeProp('streamType')), parseMetadata);

    return {
        getEventType,
        isNonSystemEvent,
        parseMetadata,
        parseData,
        isEventTypeEvent
    }
};