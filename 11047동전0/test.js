//실버3 동전0
//https://www.acmicpc.net/problem/11047
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let K = Number(input.shift().split(" ")[1]);
let prices = input.map((el) => Number(el)).filter((el) => el <= K);
let answer = 0;

while (prices.length && K > 0) {
  const price = prices.pop();

  while (price <= K && K > 0) {
    K -= price;
    answer++;
  }
}

console.log(answer);
