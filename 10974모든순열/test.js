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
  if (selectNumber === 1) return arr.map((value) => [value]); //1개로 구성된 순열에 대해서는 바로 배열에 담기

  //arr의 각 수에 대해
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; //fixed(고정값)를 제외한 배열을 rest에 담기
    const permutations = getPermutation(rest, selectNumber - 1); //rest에서 고정값을 제외한 개수(selectNumber-1 개)의 순열을 재귀로 구하기
    const attached = permutations.map((permutation) => [fixed, ...permutation]); //재귀를 통해 만들어진 순열에 고정값이었던 fixed를 붙이기

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
