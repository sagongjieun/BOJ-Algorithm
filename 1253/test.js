//골드4 좋다
//https://www.acmicpc.net/problem/1253
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function binarySearch(arr, num, index) {
  let start = 0;
  let end = index - 1;

  while (start <= end) {
    if (arr[start] + arr[end] < num) start++;
    else {
      return 1;
    }
  }
  return -1;
}
//1 2 3 4 5 6 7 8 9 10

let good = 0; //정답이 될 변수
let numbers = input[1]
  .split(" ")
  .map((i) => parseInt(i))
  .sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  if (i === 0 || i === 1) break; //첫번째나 두번째 요소는 그앞에 더해질 수가 있을 수 없기 때문
  if (binarySearch(numbers, numbers[i], i) === 1) good++;
  else continue;
}
console.log(good);
