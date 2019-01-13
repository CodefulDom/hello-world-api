const http = require('http')

const server = http.createServer(function(req, res){
	res.end('Hello, World!\n')
})

server.listen(2000,function() {
	console.log('The server is listening on port 2000')
})
