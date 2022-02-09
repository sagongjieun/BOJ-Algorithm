//실버3 다음 순열
//https://www.acmicpc.net/problem/10972
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//순열
function getPermutation(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    result.push(...attached);
  });

  return result;
}

let prev = input[1]; //찾아야 하는 다음 순열의 이전 순열 (문제에서 주어지는 입력값 순열)
let numbers = []; //1-N까지의 수를 담을 배열
for (let i = 1; i <= parseInt(input[0]); i++) numbers.push(i);
let permutation = getPermutation(numbers, numbers.length); //모든 순열 구하기
for (let i = 0; i < permutation.length; i++)
  permutation[i] = permutation[i].join(" ");

const prevIndex = permutation.indexOf(prev); //모든 순열에서 prev의 index
if (prevIndex === permutation.length - 1) console.log(-1);
else console.log(permutation[prevIndex + 1]);

// 후기 : N의 최대값이 10000이기 때문에 완전탐색은 불가능
