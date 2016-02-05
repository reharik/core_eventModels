/////**
//// * Created by rharik on 6/19/15.
//// */
////
//var demand = require('must');
//
//describe('bufferToJson', function() {
//    var mut;
//    var JSON;
//    var options = {
//        dagon:{
//            logger: {
//                moduleName: 'EventModels'
//            }
//        },
//        logger: {
//            moduleName: 'EventModels'
//        }
//    };
//    var container = require('../../registry')(options);
//    before(function(){
//        mut = container.getInstanceOf('bufferToJson');
//        JSON = container.getInstanceOf('JSON');
//    });
//
//    beforeEach(function(){
//    });
//
//        context('when passinging in a regular object', function () {
//            it('should just return that object',  function () {
//                var input = {'some':'event'};
//                var result = mut(input);
//                result.must.equal(input);
//            })
//        });
//
//        context('when passinging in a buffer', function () {
//            it('should just return parsed object',  function () {
//                var input = new Buffer('{"some":"event"}', 'utf8');
//                var result = mut(input);
//                result.must.eql(JSON.parse(input));
//            })
//        });
//    });
//
//describe('bufferToJson', function() {
//    var mut;
//    var options   = {
//        logger: {
//            moduleName: 'EventModels'
//        }
//    };
//    var container = require('../../registry')(options);
//    before(function() {
//        mut  = container.getInstanceOf('plugin');
//    });
//
//    beforeEach(function() {
//    });
//
//    context('when calling gesEventFromStream', function() {
//        it('should just return gesEvent', function() {
//            var input  = {
//                OriginalEvent   : {
//                    Metadata: {
//                        eventName: 'someEvent'
//                    },
//                    Data    : {
//                        some: 'data'
//                    }
//                },
//                OriginalPosition: {
//                    some: 'position'
//                }
//            };
//            var result = mut.gesEventFromStream(input);
//            result.eventName.must.eql('someEvent');
//            result.metadata.must.eql(input.OriginalEvent.Metadata);
//            result.data.must.eql(input.OriginalEvent.Data);
//            result.originalPosition.must.eql(input.OriginalPosition);
//        })
//    });
//});
