//실버4 접미사 배열
//https://www.acmicpc.net/problem/11656
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let suffix = []; //접미사들을 담을 배열
input = input.shift(); //배열에 담긴 문자열 빼내기
for (let i = 0; i < input.length; i++) {
  suffix.push(input.slice(i)); //0부터 문자열길이만큼 slice하며 접미사배열에 넣기
}
console.log(suffix.sort().join("\n")); //사전 순으로 정렬 후 개행으로 구분하여 출력
