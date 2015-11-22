/**
 * Created by rharik on 11/1/15.
 */

module.exports = function(_, _fantasy, buffer) {
var Maybe = _fantasy.Maybe;

var log = function(x){ console.log(x); return x; };
var safeProp = _.curry((x,o) => o ? Maybe(o[x]) : Maybe.Nothing() );
var startsWith  = _.curry((x,s) => s.startsWith(x) );
var parseBuffer = x => buffer.Buffer.isBuffer(x) ? tryParseJSON(x.toString('utf8')) : Maybe.Nothing() ;
var tryParseJSON = x => { try { return Maybe.of(JSON.parse(x)); }
                        catch (e) { return Maybe.Nothing(); } };
return {
        safeProp,
        startsWith,
        parseBuffer,
        tryParseJSON,
        log
    }
};
