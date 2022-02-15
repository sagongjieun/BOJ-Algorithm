//실버3 피보나치 함수
//https://www.acmicpc.net/problem/1003
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let inputIndex = 0;
let testCase = Number(input[inputIndex++]);

while (testCase--) {
  let num = Number(input[inputIndex++]);
  let fibonacci = new Array(num).fill(0); //num개의 원소를 담을 수 있는 배열
  let index = 0;

  //fibonacci = [0의 count, 1의 count]
  fibonacci[index++] = [1, 0]; //fibo(0) = 0
  fibonacci[index++] = [0, 1]; //fibo(1) = 1

  //fibo(0), fibo(1)은 초기화해두었기 때문에 index=2부터 시작
  for (index = 2; index <= num; index++) {
    //fibonacci[num] = fibonacci[num-1] + fibonacci[num-2] 공식 이용
    fibonacci[index] = [
      fibonacci[index - 1][0] + fibonacci[index - 2][0],
      fibonacci[index - 1][1] + fibonacci[index - 2][1],
    ];
  }
  console.log(fibonacci[num].join(" "));
}
