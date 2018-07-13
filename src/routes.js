var express = require('express')
var router = express.Router()

router.get('/', function(request, response){
	response.send('About Us')
})

router.get('/sample', function(request, response){
	response.send('Sample')
})

module.exports = router