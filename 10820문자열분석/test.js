//브론즈2 문자열 분석
//https://www.acmicpc.net/problem/10820
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\r\n");
//다른 문제들과달리 input에 trim()을 빼주는 이유는 trim() 함수를 통해 빈 문자열이 없어지기 때문이다. 입력값으로 (의도적으로)빈 문자열이 들어온다면 trim()이 자동으로 없애주는 상황을 막아야 한다.

//빈 문자열이 주어졌을 경우에 대한 예외처리
let except = input.filter((str) => str.length < 1);
if (except.length) input.splice(input.indexOf(except[0]), 1);

//각 문자열에 대해 전체문자열 길이에서 정규식을 이용하여 각 조건에맞는 길이 빼주기
input.forEach((str) => {
  let lower = str.length - str.replace(/[a-z]/g, "").length;
  let upper = str.length - str.replace(/[A-Z]/g, "").length;
  let num = str.length - str.replace(/\d/g, "").length;
  let blank = str.length - str.replace(/\ /g, "").length;

  console.log(lower, upper, num, blank); //number형으로 각각 출력
});
