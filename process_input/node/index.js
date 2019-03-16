const readline = require('readline');
const LOCAL_PRACTICE = true;
let rl;
if(LOCAL_PRACTICE){
    const fs = require('fs');
    rl = readline.createInterface({
        input: fs.createReadStream('input.txt')
    });
}else{
    rl = readline.createInterface(process.stdin, process.stdout);
}

var lineNumber = 0;
rl.on('line', line=>{
  lineNumber++;
  let lineResult = processLine(lineNumber,line);
  console.log(`Case #${lineNumber}: ${lineResult}`);
}).on('close',()=>{
    process.exit(0);
});

const processLine = (lineNumber, line)=>{
    //Here should call the function which process the line and return
    //result to be printed in 'Case #' format
    return main(lineNumber, line);
}


/********************** */

let main = ()=>{
    //Solve your problem
}