//골드5 토마토
//https://www.acmicpc.net/problem/7576
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [NUMS, ...tomato] = input;
const [M, N] = NUMS.split(" ").map((num) => Number(num));
tomato = tomato.map((t) => t.split(" ").map((t) => Number(t)));
let visited = [];
for (let i = 0; i < N; i++) visited.push(Array(M).fill(0));
let direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const rangeCheck = (row, col) => {
  if (row >= 0 && col >= 0 && row < N && col < M) return true;
  else return false;
};

//tomato에 1이 여러개 있는 경우에 대해서 예외처리 생각하기
const BFS = (row, col) => {
  let queue = [];

  queue.push([row, col]);
  visited[row][col] = 1;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + direction[i][0];
      const nx = x + direction[i][1];

      if (rangeCheck(ny, nx) && visited[ny][nx] === 0 && tomato[ny][nx] === 0) {
        visited[ny][nx] = 1;
        queue.push([ny, nx]);
      }
    }
  }
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (tomato[row][col] === 1) {
      BFS(row, col);
    }
  }
}

// visited가 하나라도 1로 바뀌지 않았다면 -1출력
for (const visit of visited) {
  if (visit.every((num) => num === 1) === false) console.log(-1);
}
