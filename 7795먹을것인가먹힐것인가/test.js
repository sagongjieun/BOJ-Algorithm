// 실버3 먹을 것인가 먹힐 것인가
// https://www.acmicpc.net/problem/7795
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

//문자열을 숫자로 바꿔주고 배열로 return
function strToNum(str) {
  return str.split(" ").map((i) => parseInt(i));
}

//이분탐색 함수
function binarySearch(arr, num) {
  let index = -1; //arr배열(B)의 수 중에서 num(A의 각 요소)보다 크지 않은 수 중에서 제일 큰 index를 return
  let start = 0; //배열의 시작 index
  let end = arr.length - 1; //배열의 끝 index
  let middle = 0; //배열의 중간 index

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    //B의 중간값이 A의 요소보다 작다면 답이 될 index는 중간값의 index가 되고, 시작 index를 중간값 다음 수로 해서 num보다 크지 않은 수 중에서 제일 큰 수를 찾을 때까지 반복
    if (arr[middle] < num) {
      index = middle;
      start = middle + 1;
    }
    //반대의 상황에서는 end값만 변경해주고, index는 초기값인 -1 그대로 두기
    else {
      end = middle - 1;
    }
  }
  return index;
}

/* 전역변수 초기화 */
let inputIndex = 0; //입력 배열의 index
let testCase = strToNum(input[inputIndex++])[0];
let A, B;

//테스트 케이스만큼 반복
while (testCase--) {
  let answer = 0;
  const [numA, numB] = strToNum(input[inputIndex++]);
  A = [...strToNum(input[inputIndex++])].sort((a, b) => a - b); //A의 크기 오름차순 정렬
  B = [...strToNum(input[inputIndex++])].sort((a, b) => a - b); //B의 크기 오름차순 정렬

  //A의 각 요소들에 대해
  for (let i of A) {
    answer += binarySearch(B, i) + 1; //index = -1로 초기화 되어있으니 맞춰주기 위해 +1
  }

  console.log(answer);
}

// 결과
// 7
// 1
