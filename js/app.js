(function(){
	var getJSON = {
	type: 'text/javascript',
	charset: 'utf-8',
	head: document.getElementsByTagName('head')[0],
	scripts: {},
	callbacks: {},
	count: 1,
	name: function(_callback){
		var self = this;
		var name = '_jsonp_' + (new Date).getTime() + '_' + this.count++;
		this.callbacks[name] = function (json) {
			self.head.removeChild(self.scripts[name]);
			delete self.callbacks[name];
			delete self.scripts[name];
			_callback(json);
		};
		return name;
	},
	load: function(_url, _callback){
		var name = this.name(_callback);
		var script = document.createElement('script');
		script.type = this.type;
		script.charset = this.charset;
		script.src = _url.replace(/{callback}/, "getJSON.callbacks." + name);
		this.head.appendChild(script);
		this.scripts[name] = script;
	}
};
getJSON.load('http://www.codeschool.com/users/drabiter.json', function(data){
	console.log(data);
});
}());