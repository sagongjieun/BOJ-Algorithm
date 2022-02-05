//실버3 모든 순열
//https://www.acmicpc.net/problem/10974
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function permutation(num, str) {
  if (num === "") {
    answer.push(str.split("").join(" "));
    console.log(answer);
  } else {
    for (let i = 0; i < num.length; i++) {
      console.log(`i는 ${i} 입니당.`);
      console.log("num은 " + num);
      console.log("str은 " + str);
      console.log(num.slice(0, i) + num.slice(i + 1) + "\n");
      console.log(str + num[i] + "\n");
      permutation(num.slice(0, i) + num.slice(i + 1), str + num[i]);
    }
  }
}

let answer = []; //순열들을 담을 배열
let nums = "";
let N = parseInt(input[0]);
for (let i = 1; i <= N; i++) nums += i; //1~N의 수를 문자열로 붙인 수
permutation(nums, "");
// console.log(answer.join("\n"));

/* slice함수 연습 */
// let test = [3];
// console.log(test.slice(1));
//slice(0) -> 원본 배열
//slice(0, 0) -> 빈배열
//slice(a, b) => b는 생략 가능, a, b 둘중에 하나만있따면 무조건 a임 , a=start(포함), b=end(미포함) ex) slice(2,5)=>2번인덱스부터(포함)-4번인덱스까지(5번미포함)
