//실버2

//DFS함수
function DFS(vertex) {
  visited_DFS[vertex] = true;
  DFS_graph.push(vertex);

  for (let i = 1; i < graph.length; i++) {
    if (graph[vertex][i] === 1 && visited_DFS[i] === false) {
      DFS(i);
    }
  }
  return;
}

//BFS함수
function BFS(vertex) {
  let Queue = [];

  Queue.push(vertex);
  BFS_graph.push(vertex);

  while (Queue.length !== 0) {
    let dequeue = Queue.shift();
    visited_BFS[dequeue] = true;

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

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let graph = []; //인접행렬 담을 배열
let visited_DFS = []; //DFS 방문 여부 체크 배열
let visited_BFS = []; //BFS 방문 여부 체크 배열
let DFS_graph = []; //DFS 결과 담을 배열
let BFS_graph = []; //BFS 결과 담을 배열

//입력으로 주어지는 정점, 간선 개수와 탐색 시작 정점 번호
const [vertex, edge, start] = input
  .shift()
  .split(" ")
  .map((i) => parseInt(i));

//인접행렬 초기화
graph = Array.from(Array(vertex + 1), () => Array(vertex + 1).fill(0));

for (let i of input) {
  let [x, y] = i.split(" ").map((i) => parseInt(i));
  graph[x][y] = 1;
  graph[y][x] = 1;
}

//방문 여부 배열 초기화
visited_DFS = new Array(vertex + 1).fill(false);
visited_BFS = new Array(vertex + 1).fill(false);

//DFS, BFS 각각 순회
DFS(start);
BFS(start);

//결과 배열의 각 요소를 한 칸 단위로 구분하여 문자열로 나타냄
console.log(DFS_graph.join(" "));
console.log(BFS_graph.join(" "));

//출력 : DFS -> BFS
//[vertex, edge, start] = [4, 5, 1] >> type : number
//input = ['1 2', '1 3', '1 4', '2 4', '3 4']
//Array.form() 함수로 2차원 배열 만드는 사용법 익혀두자
//undirect 그래프 왜지?
//cd 1260DFS와BFS
