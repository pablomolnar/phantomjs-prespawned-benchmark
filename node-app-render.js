var http = require('http');
var phantom = require('phantom');
var address = 'tiger.html';

// Spawn a phantomjs process
phantom.create(function(ph) {

	// Create a page object and reuse it for every call
	ph.createPage(function(page) {

		// Configure our HTTP server to respond to all requests.
		var server = http.createServer(function (request, response) {
			var start = Date.now();

			page.open(address, function(status) {
				page.render('tiger.png', function(){
					var time = Date.now() - start;

					response.writeHead(200, {"Content-Type": "text/plain"});
					response.end("Inner snippet took: " + time);

				});
	        });
		});

		server.listen(8000);

	})
})

console.log('PhantomJS service is running in http://127.0.0.1:8000/');