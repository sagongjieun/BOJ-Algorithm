//실버5 최대공약수와 최소공배수
//https://www.acmicpc.net/problem/2609
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const a = Number(input[0].split(" ")[0]);
const b = Number(input[0].split(" ")[1]);

function biggest(a, b) {
  if (b === 0) return a;
  else return biggest(b, a % b);
}

function minimum(a, b) {
  return (a * b) / biggest(a, b);
}

console.log(biggest(a, b));
console.log(minimum(a, b));
