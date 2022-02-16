//실버3 1로 만들기
//https://www.acmicpc.net/problem/1463
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const num = Number(input);
const DP = new Array(num + 1).fill(0);

for (let i = 2; i <= num; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) DP[i] = Math.min(DP[i / 2] + 1, DP[i]);
  if (i % 3 === 0) DP[i] = Math.min(DP[i / 3] + 1, DP[i]);
}
console.log(DP);
console.log(DP[num]);
