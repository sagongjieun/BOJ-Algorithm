//실버4 베스트셀러
//https://www.acmicpc.net/problem/1302
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, ...books] = input;
let counter = {};
let answer = [];

for (let book of books) {
  if (counter[book]) counter[book] = counter[book] + 1;
  else counter[book] = 1;
}

const mostFrequency = Math.max(...Object.values(counter));

for (let key in counter) {
  if (counter[key] === mostFrequency) answer.push(key);
}

if (answer.length > 1) {
  answer = answer.sort();
}

console.log(answer[0]);
