(function(){
	reqwest({
    url: 'http://www.codeschool.com/users/drabiter.json'
  , type: 'json'
  , method: 'get'
  , error: function (err) { }
  , success: function (resp) {
      console.log(resp)
    }
})
}());