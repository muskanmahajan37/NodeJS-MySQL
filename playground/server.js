var http = require('htpp');

var server = http.createServer(function(req,res){
 res.writeHead(200,"Content-Type":"text/html");
 res.end("Hello World");
});

server.listen(8080);