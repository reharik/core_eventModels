var _ = require('ramda');
var _fantasy = require('ramda-fantasy');
var Maybe = _fantasy.Maybe;
var JSON = require('JSON');
var buffer = require('buffer');

var log = function(x){ console.log(x); return x; };
var safeProp = _.curry((x,o) => Maybe(o[x])); // !== 'undefined' ? Maybe(o[x]) : Maybe(null));
var startsWith  = _.curry((x,s) => s.startsWith(x)? Maybe.of(true) : Maybe.Nothing());
var doesNotStartWith = _.curry((x,s) => s.startsWith(x) ? Maybe.Nothing() : Maybe.of(true));
var matches = _.curry((x,y)=> x===y ? Maybe(true) : Maybe.Nothing() );
var testTransform = _.curry(x => _.identity({someProp:x}));
var testTransform2 = _.curry((x,y,z) => x[y] = z);

//var safeProp = _.curry((x,o) => o[x] !== 'undefined' ? Maybe(o[x]) : Maybe(null));
//var startsWith  = _.curry((x,s) => s.startsWith(x) ? Maybe.of(true) : Maybe.of(null));
//var doesNotStartWith = _.curry((x,s) => s.startsWith(x) ? Maybe.of(null) : Maybe.of(true));

var getEventType = _.compose(_.chain(safeProp('EventType')), safeProp('Event'));
var isNonSystemEvent = _.compose(_.chain(doesNotStartWith('$')), getEventType);
var metaData = _.compose(_.chain(safeProp('Metadata')), safeProp('OriginalEvent'));
var data = _.compose(_.chain(safeProp('Data')), safeProp('OriginalEvent'));
var parseBuffer = function(item){ return buffer.Buffer.isBuffer(item) ? Maybe.of(JSON.parse(item.toString('utf8'))) : Maybe.Nothing() };
var parseMetadata = _.compose(_.chain(parseBuffer), metaData);
var isEventTypeEvent = _.compose(_.chain(matches('event')), _.chain(safeProp('streamType')), parseMetadata);

//var gesEventToAppEvent = {eventName:_.compose(parse)

module.exports = {
    safeProp,
    getEventType,
    isNonSystemEvent,
    metaData,
    data,
    parseBuffer,
    parseMetadata,
    isEventTypeEvent,
    testTransform

};