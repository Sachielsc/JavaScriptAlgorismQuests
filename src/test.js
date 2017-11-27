var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var countLine = 1
var tokens = []
rl.on('line', function(line) {
  tokens.push(line)
  if(countLine === 3) {
    //求和
    console.log(
      tokens.reduce(function(sum, item) {
        return sum + parseInt(item)
      }, 0)
    );
    process.exit(0);
  } else {
    countLine++
  }
})