//실버2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function DFS(vertex) {
  visited_DFS[vertex] = true;
  DFS_graph.push(vertex);

  for (let i = 1; i < graph.length; i++) {
    if (graph[vertex][i] === 1 && visited_DFS[i] === false) {
      DFS(i);
    }
  }
}

function BFS(vertex) {
  let Queue = [];

  Queue.push(vertex);
  BFS_graph.push(vertex);

  let dequeue = vertex;
  visited_BFS[dequeue] = true;

  while (Queue.length !== 0) {
    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && visited_BFS[i] === false) {
        visited_BFS[i] = true;
        Queue.push(i);
        BFS_graph.push(i);
      }
    }
  }

  return;
}

const [vertex, edge, start] = input
  .shift()
  .split(" ")
  .map((i) => parseInt(i));

//[vertex, edge, start] = [4, 5, 1] >> type : number
//input = ['1 2', '1 3', '1 4', '2 4', '3 4']

//Array.form() 함수로 2차원 배열 만드는 사용법 익혀두자
let graph = Array.from(Array(vertex + 1), () => Array(vertex + 1).fill(0)); // 왜 vertex+1 이지?

//undirect 그래프 왜지?
for (let i of input) {
  let [x, y] = i.split(" ").map((i) => parseInt(i));
  graph[x][y] = 1;
  graph[y][x] = 1;
}

let visited_DFS = new Array(vertex + 1).fill(false);
let visited_BFS = new Array(vertex + 1).fill(false);
let DFS_graph = [];
let BFS_graph = [];

DFS(start);
BFS(start);

console.log(DFS_graph.join(" "));
console.log(BFS_graph.join(" "));
process.exit();
//출력 : DFS -> BFS
