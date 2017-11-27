var readline = require('readline');
process.stdin.setEncoding('utf-8');

var stdin = '';
var rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.on('line', function(chunk) {
    stdin += chunk;
});

rl.on('SIGINT', function() {
	var lines = stdin.split('\n');

	var numOfArray = lines[0];
	var datas = [];

	for (var i = 1; i < lines.length -1; i++) {
		var newline = lines[i].replace(/\s+$/, '');
		if (newline.length > 0) {
			datas.push(newline);
		}
	}

	datas.sort(function(a, b){
		return b.length - a.length;
	});

	for (var i = 0; i < numOfArray; i++) {
		process.stdout.write(datas[i].toString());
		process.stdout.write('\n');
	}
});