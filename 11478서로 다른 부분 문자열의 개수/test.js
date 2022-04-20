//실버3 서로 다른 부분 문자열의 개수
//https://www.acmicpc.net/problem/11478
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let S = input[0];
let answer = new Set();

for (let i = 1; i <= S.length; i++) {
  for (let j = 0; j < S.length; j++) {
    answer.add(S.substr(j, i));
  }
}

console.log(answer.size);
