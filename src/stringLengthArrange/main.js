process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
	stdin += chunk;
}).on('end', function() {
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