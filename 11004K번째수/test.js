//실버5 K번째 수
//https://www.acmicpc.net/problem/11004
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//str->num 타입 변환
function strToNum(str) {
  return str.split(" ").map((i) => parseInt(i));
}

const K = strToNum(input.shift())[1] - 1; //K번째 수 뽑고 index를 맞추기 위해 -1
let A = strToNum(input.shift()).sort((a, b) => a - b); //숫자 배열 오름차순
console.log(A[K]);
