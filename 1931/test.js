//실버1 회의실 배정
//https://www.acmicpc.net/problem/1931
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

console.log(input);
