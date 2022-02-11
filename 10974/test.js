//실버3 모든 순열
//https://www.acmicpc.net/problem/10974
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//순열
// arr : 수가 담겨 있는 배열
// selectNumber : 몇개로 구성된 순열을 구할 것인가
function getPermutation(arr, selectNumber) {
  const result = []; //결과를 담을 배열
  if (selectNumber === 1) return arr.map((value) => [value]);

  //arr의 각 수에 대해
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    result.push(...attached);
  });

  return result;
}

let numbers = [];
for (let i = 1; i <= parseInt(input[0]); i++) numbers.push(i); //1~N 까지의 수를 numbers에 담음
let answer = getPermutation(numbers, numbers.length); //순열함수의 결과를 answer에 담음
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join(" "));
}

/* slice함수 연습 */
// let test = [3];
// console.log(test.slice(1));
//slice(0) -> 원본 배열
//slice(0, 0) -> 빈배열
//slice(a, b) => b는 생략 가능, a, b 둘중에 하나만있따면 무조건 a임 , a=start(포함), b=end(미포함) ex) slice(2,5)=>2번인덱스부터(포함)-4번인덱스까지(5번미포함)
