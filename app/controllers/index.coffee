args = arguments[0] || {}

client = new Alloy.Globals.ApiAccess "http://google.com",
  success: () ->
    $.index.open()
  error: (e) ->
    Alloy.createController("login").getView().open()
