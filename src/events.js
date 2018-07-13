const { EventEmitter } = require('events')

var eventEmitter = new EventEmitter()

eventEmitter.on('connection', function(){
	console.log('Connected...')
	eventEmitter.emit('data_received', {
		name: 'Joshua'
	})
})

eventEmitter.on('data_received', function(data){
	console.log(data)
})

eventEmitter.emit('connection')