var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(request, response){
	var pathname = request.url
	var urlpath = pathname.substr(1)

	fs.readFile(urlpath, function(err, data){
		if(err) response.writeHead(404, { 'Content-type': 'text/plain' })

		response.writeHead(200, { 'Content-type': 'text/html' })

		response.write(data.toString())
		response.end()
	})
	
}).listen(8081)

console.log('Server running at http://127.0.0.1:8081/')