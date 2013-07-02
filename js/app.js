(function(){
	var Lib = {
        xhr: function() {
            var instance = new XMLHttpRequest();
            return instance;
        },
        getJSON: function (options, callback) {
            console.log('go!');
            var xhttp = this.xhr();
            options.url = options.url || location.href;
            options.data = options.data || null;
            callback = callback || function() {};
            options.type = options.type || 'json';
            var url = options.url;
                        
            if (options.type == 'jsonp') { // JSONP
                window.jsonCallback = callback; // Now our callback method is globally visible
                var $url = url.replace('callback=?', 'callback=jsonCallback');
                var script = document.createElement('script');
                script.src = $url;
                document.body.appendChild(script);
            }
                        
            xhttp.open('GET', options.url, true);
            xhttp.send(options.data);
            xhttp.onreadystatechange = function() {
                if (xhttp.status == 200 && xhttp.readyState == 4) {
                    callback(xhttp.responseText);
                }
            };
        }
    }

    Lib.getJSON({
        url: 'http://www.codeschool.com/users/drabiter.json'
    }, function(data){
        console.log(data);
    });
}());