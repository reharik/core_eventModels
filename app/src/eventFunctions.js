
module.exports = function(_, _fantasy, functionalHelpers){
    var fh = functionalHelpers;
    var isNonSystemEvent = _.compose(_.map(fh.doesNotStartWith('$')), _.chain(fh.safeProp('EventType')), fh.safeProp('Event'));
    var parseMetadata = _.compose(_.chain(fh.parseBuffer), _.chain(fh.safeProp('Metadata')), fh.safeProp('OriginalEvent'));
    var parseData = _.compose(_.chain(fh.parseBuffer), _.chain(fh.safeProp('Data')), fh.safeProp('OriginalEvent'));
    var isEventTypeEvent = _.compose(_.map(_.equals('event')), _.chain(fh.safeProp('streamType')), parseMetadata);

    return {
        isNonSystemEvent,
        parseMetadata,
        parseData,
        isEventTypeEvent
    }
};