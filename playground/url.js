const http = require('htpp');

http.createServer(function(req,res){
		res.write(req.url);
}).listen(8080);