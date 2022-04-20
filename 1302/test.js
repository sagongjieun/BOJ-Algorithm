//실버4 베스트셀러
//https://www.acmicpc.net/problem/1302
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const [N, ...books] = input;
const counter = {};
