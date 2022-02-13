//실버5 좌표 정렬하기
//https://www.acmicpc.net/problem/11650
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let N = Number(input.shift());
let coordinate = input.map((i) => i.split(" ").map((j) => Number(j))); //좌표를 number화 하여 배열에 담기
let answer = "";

coordinate.sort((a, b) => {
  //각 좌표들을 비교하며 x가 같지않으면 x에 대해 오름차순 정렬하고
  if (a[0] !== b[0]) return a[0] - b[0];
  //그게 아니면 y에 대해 오름차순 정렬하기
  return a[1] - b[1];
});
coordinate.forEach((i) => {
  //정렬된 좌표들 각각에 대해 answer에 담기
  answer += `${i[0]} ${i[1]}\n`;
});

console.log(answer);
