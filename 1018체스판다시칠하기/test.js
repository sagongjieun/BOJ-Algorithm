//실버5 체스판 다시 칠하기
//https://www.acmicpc.net/problem/1018
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//검정색이 맨처음 오는 경우
const blackFirst = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

//하얀색이 맨처음 오는 경우
const whiteFirst = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const NM = input
  .shift()
  .split(" ")
  .map((i) => parseInt(i));
const N = NM.shift(); //세로길이(y축)
const M = NM.shift(); //가로길이(x축)
let arr = [];

function blackFirstPaint(y, x) {
  let count = 0; //몇 번이 바뀌는지 count할 변수

  //8x8행렬의 크기에 한해서 미리 선언해놓은 8x8 행렬과 같지 않은 부분은 count++
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== blackFirst[i - y][j - x]) count++;
    }
  }
  return count;
}

function whiteFirstPaint(y, x) {
  let count = 0; //몇 번이 바뀌는지 count할 변수

  //8x8행렬의 크기에 한해서 미리 선언해놓은 8x8 행렬과 같지 않은 부분은 count++
  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (input[i][j] !== whiteFirst[i - y][j - x]) count++;
    }
  }
  return count;
}

//8x8모양이 체스판의 가로, 세로를 넘지않는 모든 경우에 대해
// i : y축(N), j : x축(M)
for (let i = 0; i + 7 < N; i++) {
  for (let j = 0; j + 7 < M; j++) {
    arr.push(blackFirstPaint(i, j)); //모든 경우의 수에 대해 count를 세본다
    arr.push(whiteFirstPaint(i, j));
  }
}
console.log(Math.min(...arr)); //모든 경우의 수 중에서 가장 작은 값을 return
