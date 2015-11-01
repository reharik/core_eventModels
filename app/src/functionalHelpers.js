/**
 * Created by rharik on 11/1/15.
 */

module.exports = function(_, _fantasy, buffer, JSON) {
var Maybe = _fantasy.Maybe;

var log = function(x){ console.log(x); return x; };
var safeProp = _.curry((x,o) => Maybe(o[x])); // !== 'undefined' ? Maybe(o[x]) : Maybe(null));
var startsWith  = _.curry((x,s) => s.startsWith(x)? Maybe.of(true) : Maybe.Nothing());
var doesNotStartWith = _.curry((x,s) => s.startsWith(x) ? Maybe.Nothing() : Maybe.of(true));
var matches = _.curry((x,y)=> x===y ? Maybe(true) : Maybe.Nothing() );
var parseBuffer = function(item){ return buffer.Buffer.isBuffer(item) ? Maybe.of(JSON.parse(item.toString('utf8'))) : Maybe.Nothing() };

return {
        safeProp,
        parseBuffer,
        startsWith,
        doesNotStartWith,
        matches,
        log
    }
};
