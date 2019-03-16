const readline = require('readline');
const local = true;
let rl;
if(local){
    const fs = require('fs');
    rl = readline.createInterface({
        input: fs.createReadStream('input.txt')
    });
}else{
    rl = readline.createInterface(process.stdin, process.stdout);
}


var lineno = 0;
rl.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});