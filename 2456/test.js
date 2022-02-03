//브론즈1 나는 학급회장이다
//https://www.acmicpc.net/problem/2456
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function strToNum(str) {
  return str.split(" ").map((i) => parseInt(i));
}

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum = sum + arr[i];
  return sum;
}

function getCount(arr, num) {
  return arr.filter((i) => i === num).length;
}

/* 전역변수 초기화 */
let inputIndex = 0;
let candidate1 = [];
let candidate2 = [];
let candidate3 = [];
let sumAll = [];
let max = 0;
let students = parseInt(input.shift()); //학생 수

while (students--) {
  candidate1.push(strToNum(input[inputIndex])[0]);
  candidate2.push(strToNum(input[inputIndex])[1]);
  candidate3.push(strToNum(input[inputIndex])[2]);

  inputIndex++;
}

sumAll.push(sum(candidate1));
sumAll.push(sum(candidate2));
sumAll.push(sum(candidate3));

max = Math.max(...sumAll);
if (getCount(sumAll, max) === 1) return `${sumAll.indexOf(max) + 1} ${max}`;
else {
  //여기까지왔다
  candidate1.sort((a, b) => b - a);
  candidate2.sort((a, b) => b - a);
  candidate3.sort((a, b) => b - a);
  console.log(candidate1);
  console.log(candidate2);
  console.log(candidate3);
}
