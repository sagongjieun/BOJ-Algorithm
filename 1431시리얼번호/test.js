//실버3 시리얼 번호
//https://www.acmicpc.net/problem/1431
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//문자열 속 숫자들을 더해주는 함수
function sum(str) {
  let result = 0;
  str = str.replace(/[^0-9]/g, ""); //문자열에서 숫자를 제외한 문자는 없애기
  str = str.split("").map((i) => parseInt(i)); //숫자도 문자로 돼있으니 number형으로 변환
  for (let i of str) result += i; //각 숫자들을 더하기
  return result;
}

input.shift(); //기타의 개수 N
input = input.sort((a, b) => {
  if (a.length > b.length) return 1;
  //길이 순대로 정렬(오름차순)
  else if (a.length < b.length) return -1;
  else {
    if (sum(a) > sum(b)) return 1;
    //숫자의 합에 따른 정렬(오름차순)
    else if (sum(a) < sum(b)) return -1;
    else {
      if (a > b) return 1;
      //사전순으로 정렬
      else return -1;
    }
  }
});
console.log(input.join("\n"));
