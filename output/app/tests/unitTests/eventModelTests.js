/**
 * Created by reharik on 9/27/15.
 */
'use strict';

var demand = require('must');

describe('EventData Test', function () {
    var mut;
    var options = {
        logger: {
            moduleName: 'EventModels'
        }
    };
    before(function () {
        var plugin = require('../../index')(options);
        mut = plugin.eventData;
    });

    beforeEach(function () {});

    context('when passinging json for data', function () {
        it('should return an object with buffer for data', function () {
            var result = mut('eventName', { some: "data" }, { some: "metadata" });
            JSON.parse(result.Data.toString()).some.must.equal("data");
        });
    });

    context('when passinging json for metadata', function () {
        it('should return an object with buffer for metadata', function () {
            var result = mut('eventName', { some: "data" }, { some: "metadata" });
            JSON.parse(result.Metadata.toString()).some.must.equal("metadata");
            JSON.parse(result.Metadata.toString()).eventName.must.equal("eventName");
        });
    });
});