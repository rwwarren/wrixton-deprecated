var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\nLooks like Nodejs is now working!');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
