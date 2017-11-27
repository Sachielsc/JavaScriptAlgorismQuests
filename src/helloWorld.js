var http = require('http');
var port = 1337;
var url = "127.0.0.1";

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var str = "test";
	var arr = ["for", "test"];
	res.end('Hello World\n' + 'the length of ' + str + 'is' + str.length + '\n the num of element in array is ' + arr.length);
}).listen(port, url);

console.log('Server running at http://' + url + ':' + port + '/');