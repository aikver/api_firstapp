var http = require('http');

var dt = require('./mydatemodule');



http.createServer(function (request,response) {

  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write("The date and time are currently: " + dt.myDateTime());

   response.end();

}).listen(8080);

console.log ('Server running at http://127.0.0.1:8080/');