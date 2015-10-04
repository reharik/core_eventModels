/**
 * Created by rharik on 6/19/15.
 */

module.exports = function(JSON) {
    return function(_result, _message, _initialEvent, continuationId) {
        var eventName = 'notification';
        var data      = {
            result      : _result,
            message     : _message,
            initialEvent: _initialEvent
        };
        // this is provided by the repository or the distributer

        return {
            eventName     : eventName,
            continuationId: continuationId,
            data          : data,
            friendlyDisplay: function(){
                return JSON.stringify({
                    eventName:this.eventName,
                    continuationId:this.continuationId,
                    data:this.data.toString()
                });
            }.bind(this)
        }
    }
};
