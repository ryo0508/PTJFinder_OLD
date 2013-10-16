args = arguments[0] || {}

$.login_submit.addEventListener 'click', () ->

  email    = $.email.value
  password = $.password.value

  Ti.API.info "================================================="
  Ti.API.info(email)
  Ti.API.info(password)
  Ti.API.info "================================================="

  client = new Alloy.Globals.ApiAccess "http://localhost:3000/api/v1/users/sign_in",
    params:
      user_login:
        email:    email
        password: password
    success: () ->
      data  = this.responseText
      jdata = JSON.parse(data)

      Ti.App.auth_token = jdata.data.auth_token

      view = Alloy.createController('login_success', args).getView()
    error: (e) ->
      alert("Error")
