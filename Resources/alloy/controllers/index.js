function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId1 = Ti.UI.createWindow({
        id: "__alloyId1"
    });
    $.__views.main_tab = Ti.UI.createTab({
        window: $.__views.__alloyId1,
        id: "main_tab",
        title: "Main"
    });
    $.__views.index.addTab($.__views.main_tab);
    $.__views.__alloyId2 = Ti.UI.createWindow({
        id: "__alloyId2"
    });
    $.__views.sub_tab = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        id: "sub_tab",
        title: "Sub"
    });
    $.__views.index.addTab($.__views.sub_tab);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args, client;
    args = arguments[0] || {};
    client = new Alloy.Globals.ApiAccess("http://google.com", {
        success: function() {
            return $.index.open();
        },
        error: function() {
            return Alloy.createController("login").getView().open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;