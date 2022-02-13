//실버5 45도
//https://www.acmicpc.net/problem/2949
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
console.log(input);

let R = Number(input[0].split(" ")[0]); //row개수 (y)
let C = Number(input[0].split(" ")[1]); //column개수 (x)
let angle = Number(input[R + 1]); //각도
console.log(R);
console.log(C);
console.log(angle);
