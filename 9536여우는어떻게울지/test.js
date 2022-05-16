//실버4
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const T = parseInt(input.shift()); //테스트 케이스 개수 추출

for (let t=0; t<T; t++) {
    let cmd = input.shift().split(" "); //첫번째 문장 추출
    let tmp = [];
    let sounds = [];
    
    for (let i=0; i<input.length-1; i++) {
        tmp.push(input[i].split(" "));
        sounds.push(tmp[i][2]);
    }
    
    let answer = cmd.filter((sound) => !(sounds.includes(sound))).join(" ");
    console.log(answer);
}