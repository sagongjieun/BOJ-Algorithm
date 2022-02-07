//실버5 영화감독 숌
//https://www.acmicpc.net/problem/1436
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let end = 665; //종말의 수 처음인 666직전의 수로 초기화
input = input.shift(); //몇 번째 종말의 수를 찾을지

//input이 0이 아닐때까지
while (input > 0) {
  end++; //665에서 +1 씩 늘리면서
  if (String(end).includes("666")) input--; //"666"을 포함하는지 체크
}
console.log(end); //n번째 종말의 수 출력
