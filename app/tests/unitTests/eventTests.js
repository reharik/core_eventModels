/**
 * Created by reharik on 10/25/15.
 */

var demand = require('must');
var _ = require('ramda');
var _fantasy = require('ramda-fantasy');
var Maybe = _fantasy.Maybe;
//var mut = require('../../src/eventFunctions');

var noEventTypeEvent = {};

var appEvent = {
    Event           : { EventType: 'event' },
    OriginalPosition: 'the originalPosition',
    OriginalEvent   : {
        Metadata: {
            eventName : 'someEventNotificationOn',
            streamType: 'event'
        },
        Data    : {'some': 'data'}
    }
};

var noMetadataEvent = {
    Event: {EventType: 'event'}
};

var noDataEvent = {
    Event: {EventType: 'event'},
    OriginalEvent   : {
        Metadata: {
            eventName : 'someEventNotificationOn',
            streamType: 'event'
        }
    }
};

var sysEvent = {
    Event           : { EventType: '$event' }
};
var models = require('../../index')();
var mut = models.eventFunctions;
describe('event Test', function() {
    before(function(){
    });

    beforeEach(function(){
    });

    context('when calling isNonSystemEvent on a system event', function () {
        it('should return a null maybe',  function () {
            mut.isNonSystemEvent(sysEvent).must.be.false()
        })
    });
    //
    context('when calling isNonSystemEvent on a NON system event', function () {
        it('should return a maybe of true',  function () {
            mut.isNonSystemEvent(appEvent).must.be.true();
        })
    });

    context('when calling parseMetadata event', function(){
        it('should return a maybe of metatdata', function(){
            var value = {iAm: 'data!!'};
            var meta = new Buffer(JSON.stringify(value), 'utf8');
            appEvent.OriginalEvent.Metadata = meta;
            mut.parseMetadata(appEvent).must.eql(Maybe.of(value));
        })
    });

    context('when calling parseMetadata event with no metadata', function(){
        it('should return a maybe Nothing', function(){
            appEvent.OriginalEvent.Metadata = undefined;
            mut.parseMetadata(appEvent).must.eql(Maybe.Nothing());
        })
    });

    context('when calling parseMetadata event with string metadata', function(){
        it('should return a maybe Nothing', function(){
            appEvent.OriginalEvent.Metadata = 'hello dolly';
            mut.parseMetadata(appEvent).must.eql(Maybe.Nothing());
        })
    });

    context('when calling isEventTypeEvent on event of type event', function(){
        it('should return a maybe of true', function(){
            var value = {streamType: 'event'};
            appEvent.OriginalEvent.Metadata = new Buffer(JSON.stringify(value), 'utf8');
            mut.isEventTypeEvent(appEvent).must.be.true();
        })
    });

    //context('when calling isEventTypeEvent on event of type event', function(){
    //    it('should return a maybe of true', function(){
    //        //var x = Maybe('someValue').map(mut.testTransform);
    //        var x1 = _.compose(_.chain(mut.testTransform), mut.safeProp('EventType'));
    //        var newObj = x1({EventType:'fu'});
    //        function(orig){
    //
    //        }
});
