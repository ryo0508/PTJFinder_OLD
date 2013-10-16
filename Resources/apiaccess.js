var ApiAccess;

ApiAccess = function() {
    function ApiAccess(url, options) {
        null == options && (options = {});
        this.url = url;
        this.params = options.params || {};
        this.type = options.type || "POST";
        this.xhr = Ti.Network.createHTTPClient();
        this.xhr.onerror = options.error || function() {
            return null;
        };
        this.xhr.onload = options.success || function() {
            return null;
        };
        sendRequest.call(this);
    }
    var sendRequest;
    sendRequest = function() {
        this.xhr.open(this.type, this.url);
        this.xhr.setRequestHeader("content-type", "application/json");
        return this.xhr.send(JSON.stringify(this.params));
    };
    return ApiAccess;
}();

exports.ApiAccess = ApiAccess;