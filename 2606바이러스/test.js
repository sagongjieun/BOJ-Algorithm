//실버3 바이러스
//https://www.acmicpc.net/problem/2606
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [vertex, edge, ...array] = input;
vertex = Number(vertex);
edge = Number(edge);
let graph = [...Array(vertex + 1)].map(() => []);

for (let i = 0; i < edge; i++) {
  let [from, to] = array[i].split(" ").map((el) => Number(el));
  graph[from].push(to);
  graph[to].push(from);
}

const BFS = (graph, startNode) => {
  let visited = [];
  let unvisited = [];

  unvisited.push(startNode);

  while (unvisited.length) {
    const node = unvisited.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      unvisited = [...graph[node], ...unvisited];
    }
  }
  return visited.length;
};

console.log(BFS(graph, 1) - 1);
