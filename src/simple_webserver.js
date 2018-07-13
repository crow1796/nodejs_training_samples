var http = require('http')
var fs = require('fs')

http.createServer(function(request, response){
	var template = 'index.html'

	var content = fs.readFileSync(template)
	
	response.writeHeader(200, {
		'Content-type': 'text/html'
	})

	response.write(content.toString())
	response.end()
}).listen(8081)