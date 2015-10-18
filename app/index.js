/**
 * Created by parallels on 9/3/15.
 */
"use strict";

var extend = require('extend');

module.exports = function(_options) {
    var options = {
        logger: {
            moduleName: 'EventModels'
        }
    };
    extend(options, _options || {});

    var container = require('./registry')(options);

    return container.getInstanceOf('plugin');
};


