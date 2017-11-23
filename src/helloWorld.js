var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var str = "test";
	var arr = ["for", "test"];
	res.end('Hello World\n' + 'the length of ' + str + 'is' + str.length + '\n the num of element in array is ' + arr.length);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');