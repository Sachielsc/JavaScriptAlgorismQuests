var readline = require('readline');
process.stdin.setEncoding('utf-8');

var input = '';
var left_brackets = ['(','[','{'];
var right_brackets = [')',']','}'];
var rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.on('line', function(chunk) {
	input += chunk;
});

rl.on('SIGINT', function() {
	var result = true;
	var arr = input.split("\n");

	for (var i = 0; i < arr.length; i++) {
		var char_array = arr[i].split('');
		var blanket_array = [];

		// start with left brackets
		if (left_brackets.indexOf(char_array[0]) === -1 ) {
			result = false;
			break;
		}

		for (var j = 0; j < char_array.length; j++) {
			if (left_brackets.indexOf(char_array[j]) >= 0 ) {
				blanket_array.push(char_array[j]);
			}
			else {
				if (right_brackets.indexOf(char_array[j]) >= 0) {
					var idx = right_brackets.indexOf(char_array[j]);
					var last_idx = blanket_array.length - 1;

					if (blanket_array[last_idx] === left_brackets[idx]) {
						blanket_array.splice(last_idx, 1);
					}

					else {
						result = false;
						break;
					}
				}
			}
		}

		// check result
		if (blanket_array.length > 0 || result === false) {
			result = false;
			break;
		}
	}

	if (result === false) {
		process.stdout.write("False");
	} else {
		process.stdout.write("True");
	}
});