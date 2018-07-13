var fs = require('fs')

var data = fs.readFileSync('sample.txt')
console.log(data.toString())

fs.readFile('sample.txt', function(err, data){
	if(err) console.error(err)
	console.log(data.toString())
})
console.log('End!')