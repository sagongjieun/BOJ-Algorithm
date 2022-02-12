//실버3 다음 순열
//https://www.acmicpc.net/problem/10972
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const N = Number(input[0]);
let numbers = [];
for (let i = 1; i <= N; i++) numbers.push(i); //1~N까지의 수를 numbers에 담기
let prev = input[1].split(" ").map((i) => Number(i)); //입력으로 받는 순열을 number화 하여 prev 배열에 저장

let sortNumbers = [...numbers].sort((a, b) => b - a); //numbers배열 내림차순 정렬
//prev배열이 내림차순돼있다면 순열의 가장 마지막 조합이므로 -1 출력
if (prev.every((num, index) => num === sortNumbers[index])) console.log(-1);
else {
  //배열의 맨 뒤에서부터 오름차순이 깨지는 순간의 index (i) 구하기
  let i = N - 2;
  while (prev[i] > prev[i + 1]) i--;

  //prev[i] 뒤의 수 중에서 prev[i]보다 큰 수 중에서 가장 작은 값을 가지는 index (j) 구하기
  let j = N - 1;
  while (prev[i] > prev[j]) j--;

  //prev[i]와 prev[j] swap하기
  [prev[i], prev[j]] = [prev[j], prev[i]];

  let rest = prev.slice(i + 1); //prev[i] 뒤의 값들만 가지는 rest 배열 만들기
  rest.sort((a, b) => a - b); //prev[i] 뒤의 값들은 오름차순 정렬
  let answer = [...prev.slice(0, i + 1), ...rest]; //떼놨던 prev[i]까지의 수와 rest합치기
  console.log(answer.join(" "));
}
