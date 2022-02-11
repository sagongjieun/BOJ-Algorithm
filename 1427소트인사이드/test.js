//실버5 소트인사이드
//https://www.acmicpc.net/problem/1427
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input
  .shift()
  .split("")
  .sort((a, b) => b - a);
console.log(input.join(""));
