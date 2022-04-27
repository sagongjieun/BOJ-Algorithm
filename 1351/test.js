//골드5 무한 수열 -> DP 문제였음
//https://www.acmicpc.net/problem/1351
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, P, Q] = input[0].split(" ").map((str) => Number(str));
let A = new Array(N + 1).fill(1);

for (let i = 1; i < A.length; i++) {
  A[i] = A[Math.floor(i / P)] + A[Math.floor(i / Q)];
}

console.log(A[N]); // 정답 출력

// point : A 를 배열로 두면 메모리 초과
