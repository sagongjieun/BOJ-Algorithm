//골드5 토마토
//https://www.acmicpc.net/problem/7576
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [M, N] = input[0].split(" ").map((str) => Number(str));
const box = [];
const queue = [];

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map((str) => Number(str));
  box.push(arr);

  let index = -1;
  while (true) {
    index = arr.indexOf(1, index + 1);
    if (index === -1) break;
    queue.push([i - 1], index);
  }
}
