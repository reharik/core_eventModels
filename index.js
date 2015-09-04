/**
 * Created by parallels on 9/3/15.
 */
var extend = require('extend');

module.exports = function(_options) {
    var options = {
        logger: {
            moduleName: 'EventModels'
        }
    };
    extend(options, _options || {});
    var container = require('./bootstrapper')(options);
    var plugin = container.getInstanceOf('plugin');

    return plugin(options);
};


