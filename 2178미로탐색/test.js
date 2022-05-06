//실버1 미로 탐색
//https://www.acmicpc.net/problem/2178
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [NUMS, ...maze] = input;
const [N, M] = NUMS.split(" ").map((num) => Number(num));
maze = maze.map((el) => el.split("").map((el) => Number(el)));
let visited = [];
for (let i = 0; i < N; i++) visited.push(Array(M).fill(0));
const direction = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const rangeCheck = (row, col) => {
  if (row >= 0 && col >= 0 && row < N && col < M) return true;
  else return false;
};

const BFS = (row, col) => {
  let queue = [];

  queue.push([row, col]);
  visited[row][col] = 1;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const ny = y + direction[i][0];
      const nx = x + direction[i][1];

      if (rangeCheck(ny, nx) && visited[ny][nx] === 0 && maze[ny][nx] === 1) {
        visited[ny][nx] = visited[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }
};

BFS(0, 0);
console.log(visited[N - 1][M - 1]);
