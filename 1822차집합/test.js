//실버4 차집합
//https://www.acmicpc.net/problem/1822
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
    if (arr[middle] < num) start = middle + 1;
    else if (arr[middle] > num) end = middle - 1;
    else if (arr[middle] === num) return 1; //원하는 수를 찾으면 return 1
  }
  return -1; //아니면 return -1
}

let A = input[1].split(" ").map((i) => parseInt(i)); //집합A를 숫자배열화
let B = input[2] //집합B를 숫자배열화 후 오름차순 정렬
  .split(" ")
  .map((i) => parseInt(i))
  .sort((a, b) => a - b);

let answer = []; //정답을 담을 배열
for (let i = 0; i < A.length; i++) {
  //A의 각 요소에 대해
  if (binarySearch(B, A[i]) !== 1) {
    //B에 해당 요소가 있는지 확인하여 없다면
    answer.push(A[i]); //정답에 push
  }
}
answer.sort((a, b) => a - b); //정답배열 오름차순 정렬
if (answer.length !== 0) {
  //정답에 원소가 있다면
  console.log(answer.length); //원소 개수 출력
  console.log(answer.join(" ")); //빈칸을 두고 출력
} else {
  //원소가 없다면
  console.log(0); //0을 출력
}
