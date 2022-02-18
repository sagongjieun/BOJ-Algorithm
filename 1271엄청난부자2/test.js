//브론즈5 엄청난 부자2
//https://www.acmicpc.net/problem/1271
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);
console.log(n / m);
console.log(n % m);
