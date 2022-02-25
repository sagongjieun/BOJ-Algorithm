//브론즈2 하얀 칸
//https://www.acmicpc.net/problem/1100
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let answer = 0;
//짝수번째 줄에 대해서는
for (let i = 0; i < input.length; i += 2) {
  //짝수번째 인덱스만 확인
  for (let j = 0; j < input[i].length; j += 2) {
    if (input[i][j] === "F") answer++;
  }
}
//홀수번째 줄에 대해서는
for (let i = 1; i < input.length; i += 2) {
  //홀수번째 인덱스만 확인
  for (let j = 1; j < input[i].length; j += 2) {
    if (input[i][j] === "F") answer++;
  }
}
console.log(answer);
