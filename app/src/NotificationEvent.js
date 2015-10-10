/**
 * Created by rharik on 6/19/15.
 */

module.exports = function(JSON, EventData) {
    return function(_result, _message, _initialEvent) {
        var eventName = 'notification';
        var data      = {
            result      : _result,
            message     : _message,
            initialEvent: _initialEvent
        };
        // this is provided by the repository or the distributer

        return {
            eventName     : eventName,
            continuationId: _initialEvent.metadata.continuationId,
            data          : data,
            toEventData   : function(){
                return EventData(this.eventName, this.data, {"continuationId": this.continuationId,
                    "eventName":this.eventName,
                    "streamType":this.eventName})
            },
            friendlyDisplay: function(){
                return JSON.stringify({
                    eventName:this.eventName,
                    continuationId:this.continuationId,
                    data:this.data.toString()
                });
            }
        }
    }
};
