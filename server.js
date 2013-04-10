var http = require('http');
var url = require('url');
//var host = require('host');
//var url_parts = url.parse(request.url, true);
//var query = url_parts.query;
/*
var sys = require("sys"),
    my_http = require("http"),
    path = require("path"),
    url = require("url"),
    filesys = require("fs");
*/
http.createServer(function (req, res) {
  //var fullURL = req.protocol + "://" + req.get('host') + req.url;
  //console.log(query);
  //var my_path = url.parse(req.url).pathname;
  //var full_path = path.join(process.cwd(),my_path);
  //console.log(full_path);
  //console.log( req.protocol);
  var hostHeader = req.headers.host;
  var hostHeader2 = req.headers.host;
  var hostHeader1 = req.headers.host || '',
          options;//,
          //statusCode;
 // var host = req.header("host");
  console.log(hostHeader);
  if (hostHeader != 'localhost:8080'){
    res.end('No chance!');
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\nLooks like Nodejs is now working!');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
