function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId3"
    });
    $.__views.login.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        text: "email",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.email = Ti.UI.createTextField({
        top: 5,
        bottom: 5,
        left: 10,
        right: 10,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        height: 30,
        width: Ti.UI.FILL,
        id: "email"
    });
    $.__views.__alloyId3.add($.__views.email);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "password",
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.password = Ti.UI.createTextField({
        top: 5,
        bottom: 5,
        left: 10,
        right: 10,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        height: 30,
        width: Ti.UI.FILL,
        id: "password",
        passwordMask: "true"
    });
    $.__views.__alloyId3.add($.__views.password);
    $.__views.login_submit = Ti.UI.createButton({
        backgroundColor: "red",
        height: 50,
        width: Ti.UI.Fill,
        top: 5,
        bottom: 5,
        left: 10,
        right: 10,
        title: "SUBMIT",
        id: "login_submit"
    });
    $.__views.__alloyId3.add($.__views.login_submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, login;
    args = arguments[0] || {};
    $.login_submit.addEventListener("click", function() {
        var email, password;
        email = $.email.value;
        password = $.password.value;
        Ti.API.info("=================================================");
        Ti.API.info(email);
        Ti.API.info(password);
        Ti.API.info("=================================================");
        return login(email, password);
    });
    login = function(email, password) {
        var client;
        return client = new Alloy.Globals.ApiAccess("http://localhost:3000/api/v1/users/sign_in", {
            params: {
                user_login: {
                    email: email,
                    password: password
                }
            },
            success: function() {
                var data, jdata, view;
                data = this.responseText;
                jdata = JSON.parse(data);
                Ti.App.auth_token = jdata.data.auth_token;
                return view = Alloy.createController("login_success", args).getView();
            },
            error: function() {
                return alert("Error");
            }
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;