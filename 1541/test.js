//실버2 잃어버린 괄호
//https://www.acmicpc.net/problem/1541
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let answer = 0;
input = input[0].split("/[+-]/g");
console.log(input);

// 최소의 수를 만들어야 함
// 빼기 연산자가 하나라도 있다면 -> 작은 수 - 큰수 조합이 최선
// 모두 더하기 연산자밖에 없다면 사실 괄호 의미 X -> 그냥 다 더해
// 연산자가 하나밖에 없다면 -> 그냥 그거 계산해
