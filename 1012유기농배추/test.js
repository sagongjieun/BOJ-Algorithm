//실버2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//BFS함수
function BFS(y, x) {
  let Queue = [[y, x]];
  let row, column;

  while (Queue.length !== 0) {
    const [currentY, currentX] = Queue.shift();

    if (graph[currentY][currentX] === 0) continue;

    graph[currentY][currentX] = 0; //방문여부 표시
    //현재 정점으로부터의 상하좌우 살파기
    distance.forEach(([dy, dx]) => {
      row = currentY + dy;
      column = currentX + dx;

      //그래프의 범위를 벗어난다면 return
      if (row < 0 || row >= height || column < 0 || column >= width) return;
      //상하좌우 살피다가 배추가 있다면 해당 위치 queue에 push
      if (graph[row][column]) Queue.push([row, column]);
    });
  }
}

//문자열->숫자 반환 함수
function strToNum(str) {
  return str.split(" ").map((i) => parseInt(i));
}

/* 변수 초기화 */
let graph, width, height, cabbage;
let inputIndex = 0; //입력값 배열의 인덱스
let testCase = parseInt(input[inputIndex++]);
let distance = [
  //상하좌우 (행렬)
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

//테스트 케이스만큼
while (testCase--) {
  let worm = 0; //정답 변수
  [width, height, cabbage] = strToNum(input[inputIndex++]); //가로, 세로, 배추 개수
  graph = Array.from(Array(height), () => Array(width).fill(0)); //이중배열 초기화

  //각 테스트케이스의 배추 개수만큼
  while (cabbage--) {
    const [x, y] = strToNum(input[inputIndex++]);
    graph[y][x] = 1; //배추 위치 표시
  }

  while (true) {
    let row, column;

    //그래프 돌면서 배추 위치 찾기
    for (let i = 0; i < height; i++) {
      const index = graph[i].indexOf(1);
      if (index === -1) continue; //해당 row에 배추가 없다면 continue

      //해당 row에 배추가 있다면
      row = i; //배추 위치의 y좌표
      column = index; //배추 위치의 x좌표
      break;
    }
    //모든 배추를 다 방문했다면 break
    if (row === undefined && column === undefined) break;
    else {
      worm++; //배추의 위치가 발견됐으니 필요한 벌레수 +1
      BFS(row, column); //BFS탐색을 통해 각 정점의 상하좌우를 탐색해 인접한 배추는 방문한 걸로 만들기
    }
  }

  console.log(worm); //return answer
}

// https://www.acmicpc.net/problem/1012
