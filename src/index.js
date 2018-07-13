// Step 1
var http = require('http')

// Step 2
http.createServer(function(request, response){
	// Step 3
	response.writeHead(200, {
		'Content-type': 'text/plain'
	})

	response.end('Hello world!\n')
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')