//실버3 오목
//https://www.acmicpc.net/problem/2615
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");
//검정1 흰2 무승부0
console.log(input);
