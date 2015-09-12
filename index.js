/**
 * Created by parallels on 9/3/15.
 */
var extend = require('extend');

module.exports = function(_options) {
    var options = {
        logger: {
            moduleName: 'EventModels'
        },
        dagon: {
            logger: {
                application: 'eventModels'
            }
        }
    };
    extend(options, _options || {});

    var container = require('./registry')(options);

    return container.getInstanceOf('plugin');
};


