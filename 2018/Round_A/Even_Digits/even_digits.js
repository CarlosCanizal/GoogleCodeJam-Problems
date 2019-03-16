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
    if(lineResult !== false){
        console.log(`Case #${lineNumber}: ${lineResult}`);
    }
}).on('close',()=>{
    process.exit(0);
});

const processLine = (lineNumber, line)=>{
    return main(lineNumber, line);
}

/****************** */

const findFirstOdd = (digits)=>{
    for (let i = 0; i < digits.length; i++){
        if(digits[i]%2 > 0){
            return i;
        }
    }
}

const smaller = (digits, oddIndex)=>{
    const replacer = 8;
    let smaller  = digits.map((digit, index)=>{
        if(index == oddIndex)
            return digit-1;
        else if(index > oddIndex)
            return replacer;
        else
            return digit;
    });
    return parseInt(smaller.join(''));
}

const largest = (digits, oddIndex)=>{
    const replacer = 0;
    const lastOdd = digits[oddIndex] == 9?true:false;
    let smaller  = digits.map((digit, index)=>{
        if(index == oddIndex){
            return lastOdd?0:digit+1;
        }
        else if(index > oddIndex){
            return replacer;
        }
        else if(index < oddIndex)
            if(lastOdd){

                if(digits[oddIndex-1]== 8){
                    return 0
                }

                if(oddIndex-1 == index){
                    if(digits[index]== 8){
                        return 0
                    }
                    return oddIndex==0?2:digits[index]+2;
                }
                return digit
            }else{
                return digit;
            }
        else
            return digit;
    });
    
    let result = parseInt(smaller.join(''));
    if(result == 0){
        smaller = [2,...smaller];
    }

    return parseInt(smaller.join(''));
    
}

function main(lineNumber, line){
    if(lineNumber > 1){
        let number = parseInt(line);
        let digits = [...line].map((digit)=>{
            return parseInt(digit)
        })

        let oddIndex = findFirstOdd(digits);
        let smallerBN = smaller(digits, oddIndex);
        let largestBN = largest(digits, oddIndex);

        let X = number-smallerBN;
        let Y = largestBN-number;

        return  X < Y ? X : Y;
    }
    return false;
}
