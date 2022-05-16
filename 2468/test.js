//실버1 안전 영역 -> DFS / BFS
//https://www.acmicpc.net/problem/2468

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const checkRange = (row, col) => {
    if (row >= 0 && row < N && col >= 0 && col < N) return true;
    else false;
}

const DFS = (row, col) => {
    if (checkRange(row, col) && area[row][col] )
}

let [N, ...area] = input;
N = Number(N);
area = area.map((el) => el.split(" ").map((el) => Number(el)));
let safeArea = [];
let min = 0,
  max = 0;
let visited = [];
let distance = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

// 지역의 최소값 최대값 찾기
for (let i = 0; i < N; i++) {
  let tempMin = Math.min.apply(null, area[i]);
  let tempMax = Math.max.apply(null, area[i]);

  if (i === 0) min = tempMin;

  if (min > tempMin) min = tempMin;
  if (max < tempMax) max = tempMax;
}

// 지역 크기 만큼의 visited 이차원 배열 만들기
for (let i = 0; i < N; i++) visited.push(new Array(N).fill(0));

for (let count = min; count <= max; count++) {
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            if (area[row][col] <= count && visited[row][col] === 0) {
                DFS(row, col);
            }
        }
    }
}