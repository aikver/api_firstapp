var http = require("http");


var listener = function(request,response) {
    //send the HTTP header
    //HTTP Status:200:0k
    //Content Type:plain
    response.writeHeader(200,{'content-Type':'text/html'});
    //send the reponse body as "Hello world"
    response.end('<h2 style="text-align:center;">Hello World</h2>');
    
}

server = http.createServer(listener);
server.listen(3000);

console.log ('Server running at http://127.0.0.1:3000/');