var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<b>Hello World!</b>');
    res.write('<p>sukses deploy node js sederhana, 23220019</p>');
    res.end();
});

server.listen(8000);

console.log("server running on http://localhost:8000");
