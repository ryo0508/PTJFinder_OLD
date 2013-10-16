args = arguments[0] || {}

$.index.open()

client = new Alloy.Globals.ApiAccess "http://google.com",
  success: () ->
    alert 'success'
  error: (e) ->
    alert 'error dayo'

