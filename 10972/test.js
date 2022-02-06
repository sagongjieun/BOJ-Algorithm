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

let numbers = [];
let prev = input[1].split(" ").map((i) => parseInt(i));
console.log(prev);
for (let i = 1; i <= parseInt(input[0]); i++) numbers.push(i);
let answer = getPermutation(numbers, numbers.length);
console.log(answer[-1]);
