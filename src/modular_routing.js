var express = require('express')
var app = express()
var routes = require('./routes')

app.use('/about-us', routes)

app.listen(8081)