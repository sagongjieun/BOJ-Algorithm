// 실버4 숫자 카드
// https://www.acmicpc.net/problem/10815
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//이분탐색 함수
function binarySearch(arr, num) {
  let start = 0;
  let middle = 0;
  let end = arr.length - 1;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (arr[middle] < num) {
      start = middle + 1;
    } else if (arr[middle] > num) {
      end = middle - 1;
    } else if (arr[middle] === num) return 1;
  }
  return -1;
}

//상근이가 가지고 있는 카드배열 오름차순 정렬
let sangkeun = input[1]
  .split(" ")
  .map((i) => parseInt(i))
  .sort((a, b) => a - b);
//비교할 카드배열
let compare = input[3].split(" ").map((i) => parseInt(i));

//비교할 카드배열의 각 요소에 대해
for (let i = 0; i < compare.length; i++) {
  if (binarySearch(sangkeun, compare[i]) === 1) compare[i] = 1;
  //상근이가 가지고 있는 카드에 있다면 비교할 카드배열의 해당 수는 1로 바꾸기
  else compare[i] = 0; //없다면 0으로 바꾸기
}

console.log(compare.join(" "));
