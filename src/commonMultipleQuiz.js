var readline = require('readline');
process.stdin.setEncoding('utf-8');

var stdin = '';
var rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.on('line', function(chunk) {
    stdin += chunk;
});

rl.on('SIGINT', function() {
    var lines = stdin.split('\n');
    for(var i=0; i<lines.length; i++) {
        var nums = lines[i].split(' ');
        var numA = parseInt(nums[0], 10);
        var numB = parseInt(nums[1], 10);
        var numN = parseInt(nums[2], 10);

        for (var j=1; j<=numN; j++) {
            if (j % (numA * numB) == 0) {
                process.stdout.write('FB');
            }
            else {
                if (j % numA == 0) {
                    process.stdout.write('F');
                }
                else {
                    if (j % nunB == 0) {
                        process.stdout.write('B');
                    }
                    else process.stdout.write(j.toString());
                }
            }
            process.stdout.write(' ');
        }
    }
});