//실버3 피보나치 함수
//https://www.acmicpc.net/problem/1003
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function fibonacci(num) {
  let [zero, one] = [0, 0];
  if (num === 0) {
    zero++;
    return 0;
  } else if (num === 1) {
    one++;
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  return [zero, one];
}

let inputIndex = 0;
let testCase = Number(input[inputIndex++]);

while (testCase--) {
  let num = Number(input[inputIndex++]);
  fibonacci(num);
}

//출력 : 0이 출력되는 횟수, 1이 출력되는 횟수
