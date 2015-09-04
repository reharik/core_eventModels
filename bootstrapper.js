/**
 * Created by parallels on 9/3/15.
 */
var container = require('dagon');

module.exports = new container(x=>
    x.pathToRoot(__dirname)
        .requireDirectoryRecursively('./src')
        .for('buffer').instanciate(i=> i.initializeWithMethod('Buffer'))
        .complete());
