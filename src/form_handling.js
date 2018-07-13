var express = require('express')
var path = require('path')
var app = express()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(urlencodedParser)

app.get('/form', function(request, response){
	response.sendFile(path.resolve(path.dirname(__dirname), 'templates', 'form_handling.html'))
})

app.post('/handle', function(request, response){
	var data = {
		username: request.body.username,
		password: request.body.password
	}

	console.log(data)

	response.redirect('success')
})

app.get('/success', function(request, response){
	response.send('SUCCESS!')
})

app.listen(8081)