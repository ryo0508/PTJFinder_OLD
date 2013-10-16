# ------------------------------------------------------
# APIとのアクセスを行う汎用的ラッパー
#
# * url   リクエスト先URL
# * options
#     type      リクエストタイプ(default: POST)
#     params    パラメーター
#     success   成功時のコールバック
#     error     失敗時のコールバック
# ------------------------------------------------------
class ApiAccess
  constructor: (url, options={}) ->
    @url    = url
    @params = options.params || {}
    @type   = options.type   || 'POST'

    # Create XHR Client
    @xhr  = Ti.Network.createHTTPClient()

    # Set Callback
    @xhr.onerror = options.error    || -> return null
    @xhr.onload  = options.success  || -> return null

    sendRequest.call(this)

  sendRequest = ->
    @xhr.open(@type, @url)
    @xhr.setRequestHeader("content-type", "application/json")
    @xhr.send(JSON.stringify(@params))


exports.ApiAccess = ApiAccess
