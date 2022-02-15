//실버2 소수 구하기
//https://www.acmicpc.net/problem/1929
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

const M = Number(input[0].split(" ")[0]);
const N = Number(input[0].split(" ")[1]);
const isPrime = Array(N + 1).fill(true); //0~N의 인덱스를 모두 가지는 배열을 만들기위해 크기는 N+1로 설정
isPrime[1] = false; //1은 소수가 아니므로 false

/* 에라토스테네스의 체 */
//2부터 N까지의 수 중에서 (1은 이미 소수가 아님) 루트N 이하의 수들에 대해
for (let i = 2; i * i <= N; i++) {
  //각 i에 대한 배수들을 판단해 해당 수는 소수가 아니므로 false로 만들기
  for (let j = i * i; j <= N; j += i) isPrime[j] = false;
}

//isPrime 배열에서 M~N의 범위의 수들 중에서 소수가 아닌 수(true)만 출력
for (let i = M; i <= N; i++) {
  if (isPrime[i] === true) console.log(i);
}
