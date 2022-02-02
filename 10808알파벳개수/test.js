//브론즈2 알파벳 개수
//https://www.acmicpc.net/problem/10808
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//각 문자열과 a의 아스키코드 차이 수를 return하는 함수
function getASCIInum(str) {
  return str.charCodeAt() - "a".charCodeAt();
}

const str = input.shift();
let alphabet = new Array(26).fill(0); //a-z 까지 담을 배열 생성

for (let i = 0; i < str.length; i++) {
  let index = getASCIInum(str[i]); //각 문자열과 a의 아스키 코드 차이를 통해 인덱스를 얻음
  alphabet[index]++; //해당 인덱스에 +1
}

console.log(alphabet.join(" "));
