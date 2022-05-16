//실버2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function BFS(y, x) {}

/* 변수 초기화 */
let island = 0; //정답 변수
let inputIndex = 0;
let graph, width, height;
let distance = [
  //상하좌우
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

[width, height] = input[inputIndex++].split(" ").map((i) => parseInt(i));
graph = Array.from(Array(height), () => Array(width)); //이중배열 생성

for (let i = 0; i < height; i++) {
  graph[i] = input[inputIndex++].split(" ").map((i) => parseInt(i));
}

while (true) {
  let row, column;

  for (let i = 0; i < height; i++) {
    const index = graph[i].indexOf(1);
    if (index === -1) continue;

    row = i;
    column = index;
    break;
  }

  if (row === undefined && column === undefined) break;
  else {
  }
}

// https://www.acmicpc.net/problem/4963
// cd 4963섬의개수b
// 이중배열에 값을 초기화하거나 직접 1을 입력해줄 필요가 없지만 공간은 만들어놔야하는 문제
