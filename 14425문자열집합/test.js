//실버3 문자열 집합
//https://www.acmicpc.net/problem/14425
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [numbers, ...inputs] = input;
const [N] = numbers.split(" "); // N에 대해 비구조화 할당
const setArr = inputs.slice(0, N); // 집합S 문자열 배열
const checkArr = inputs.slice(N); // 검사해야하는 문자열 배열
const obj = {};
let answer = 0;
setArr.forEach((el) => (obj[el] = true)); // 집합S 문자열을 모두 true로 obj 저장
// 검사해야하는 문자열이 obj에 있는경우 정답 +1
checkArr.forEach((el) => {
  if (obj[el]) answer++;
});
console.log(answer);

/* 시간초과 */
// let setArr = [],
//   checkArr = [],
//   inputIndex = 0,
//   answer = 0;
// let N = input[inputIndex].split(" ")[0];
// let M = input[inputIndex++].split(" ")[1];

// while (N--) setArr.push(input[inputIndex++]);
// while (M--) checkArr.push(input[inputIndex++]);

// for (let i = 0; i < checkArr.length; i++) {
//   if (setArr.includes(checkArr[i])) answer++;
// }

// console.log(answer);
