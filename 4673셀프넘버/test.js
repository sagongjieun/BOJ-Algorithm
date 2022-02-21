//실버5 셀프 넘버
//https://www.acmicpc.net/problem/4673

function selfNumber(n) {
  let number = n; //생성자인 n copy
  let result = 0;

  //숫자를 10으로 나누며 각 자릿수를 result에 더함
  for (let i = 0; i < String(n).length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }

  return n + result; //입력받은 수 n과 result를 더하여 return
}

const range = 10000;
let selfNumbers = new Array(range + 1).fill(true); //0~10000까지의 index를 가지는 배열 생성하고 true로 초기화

//selfNumber함수에 생성자 i를 인자로 줬을 때, return되는 수는 셀프넘버가 아니므로 false로 만들기
for (let i = 0; i <= range; i++) {
  selfNumbers[selfNumber(i)] = false;
}
//정답 출력
for (let i = 0; i < range; i++) {
  if (selfNumbers[i] === true) console.log(i);
}
