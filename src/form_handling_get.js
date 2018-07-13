var express = require('express')
var path = require('path')
var app = express()

app.use(express.static('public'))

app.get('/form', function(request, response){

	response.sendFile(path.resolve(path.dirname(__dirname), 'templates', 'form_handling_get.html'))

})

app.get('/handle', function(request, response){

	var data = {
		username: request.query.username,
		password: request.query.password
	}

	console.log(data)

	response.redirect('success')

})

app.get('/success', function(request, response){
	response.send('SUCCESS!!')
})

app.listen(8081)