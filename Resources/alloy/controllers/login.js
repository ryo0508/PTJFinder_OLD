function Controller() {
    function login(email, password) {
        var url = "http://localhost:3000/api/v1/users/sign_in";
        var xhr = Ti.Network.createHTTPClient();
        xhr.onerror = function() {
            alert("Error");
        };
        xhr.onload = function() {
            var data = this.responseText;
            var jdata = JSON.parse(data);
            Ti.API.info(data);
            Ti.API.info("Your AuthToken is => " + jdata.data.auth_token);
            Ti.App.auth_token = jdata.data.auth_token;
            var view = Alloy.createController("login_success", args).getView();
            $.Alloy.Globals.tab1.open(view);
        };
        xhr.open("POST", url);
        var params = {
            user_login: {
                email: email,
                password: password
            }
        };
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send(JSON.stringify(params));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createView({
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.login_submit.addEventListener("click", function() {
        var email = $.email.value, password = $.password.value;
        Ti.API.info("=================================================");
        Ti.API.info(email);
        Ti.API.info(password);
        Ti.API.info("=================================================");
        login(email, password);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;