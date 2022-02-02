//브론즈1 나는 학급회장이다
//https://www.acmicpc.net/problem/2456
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function strToNum(str) {
  return str.split(" ").map((i) => parseInt(i));
}

/* 전역변수 초기화 */
let candidate1 = 0,
  candidate2 = 0,
  candidate3 = 0,
  inputIndex = 0;
let candidate = new Array(3).fill(0);
let answer = new Array(2).fill(0);
let students = parseInt(input.shift()); //학생 수

while (students--) {
  candidate1 += strToNum(input[inputIndex])[0];
  candidate2 += strToNum(input[inputIndex])[1];
  candidate3 += strToNum(input[inputIndex])[2];
  inputIndex++;
}
candidate[0] = candidate1;
candidate[1] = candidate2;
candidate[2] = candidate3;

const highest = Math.max(...candidate);
let countHighest = candidate.filter((i) => highest === i).length;

while (true) {
  if (countHighest === 1) {
    answer[0] = candidate.indexOf(highest) + 1;
    answer[1] = highest;
  }
  // 최다득표자가 2명이상이면 3점개수 > 2점개수로 확인하고 더 낮은 사람은 득표수를 1로 낮추기 그리고 다시 while문 도는거

  return answer;
}
