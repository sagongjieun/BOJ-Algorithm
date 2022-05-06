//실버1 단지번호붙이기 -> BFS
//https://www.acmicpc.net/problem/2667

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

// 범위 체크
const rangeCheck = (row, col) => {
  if (row >= 0 && row < N && col >= 0 && col < N) return true;
  else false;
};

const BFS = (row, col) => {
  const queue = [];
  queue.push([row, col]);

  while (queue.length) {
    const target = queue.shift();
    row = target[0];
    col = target[1];

    // 아직 방문하지 않았다면
    if (visited[row][col] === 0) {
      visited[row][col] = 1; // 방문 처리
      apartCount++;

      for (let i = 0; i < 4; i++) {
        const ny = row + distance[i][0];
        const nx = col + distance[i][1];

        if (rangeCheck(ny, nx) && map[ny][nx] === 1) {
          queue.push([ny, nx]);
        }
      }
    }
  }
};

let [N, ...map] = input;
N = Number(N);
map = map.map((el) => el.split("").map((el) => Number(el)));
let aparts = []; // 정답 변수
let apartCount = 0;
let visited = [];
let distance = [
  //상하좌우 (행렬)
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

for (let i = 0; i < N; i++) visited.push(new Array(N).fill(0));

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (map[row][col] === 1 && visited[row][col] === 0) {
      BFS(row, col);
      aparts.push(apartCount);
      apartCount = 0;
    }
  }
}

aparts = aparts.sort((a, b) => a - b);
const answer = [aparts.length, ...aparts];

console.log(answer.join("\n"));
