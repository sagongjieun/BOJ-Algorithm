//실버4
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

console.log(input);
for (let i=0; i<input.length; i++) {
    if (input[i] === '0') break;
    const count = input[i][0];
    for (let j=0; j<parseInt(count); j++) {
        
    }
}