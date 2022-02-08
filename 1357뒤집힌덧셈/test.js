//브론즈1 뒤집힌 덧셈
//https://www.acmicpc.net/problem/1357
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

input = input[0].split(" "); // ['123', '100']
const answer = reverse(input[0]) + reverse(input[1]);
console.log(reverse(String(answer)));

function reverse(str) {
  return parseInt(str.split("").reverse().join("")); // '123' -> '1','2','3' -> '3','2','1' -> '321'(string) -> 321(number)
}
