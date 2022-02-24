//실버4 보물
//https://www.acmicpc.net/problem/1026
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let S = 0; //정답 변수
const N = Number(input[0]);
//A는 오름차순 배열
let A = input[1]
  .split(" ")
  .map((i) => Number(i))
  .sort((a, b) => a - b);
//B는 내림차순 배열
let B = input[2]
  .split(" ")
  .map((i) => Number(i))
  .sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  //정답에 A,B배열의 각 index요소를 곱하여 더하기
  S += A[i] * B[i];
}
console.log(S);
