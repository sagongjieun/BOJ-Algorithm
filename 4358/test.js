//실버1
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

const getPercentage = (arr, str) => { //백분율 구하기
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === str) count++;
    }
    return ((count / input.length) * 100).toFixed(4); //반올림, 소수점4번째 자리까지표현
};

input.sort(); //이름 순대로 정렬하고
let percentage = input.map((tree) => getPercentage(input, tree)); //각 분포율 구하고
let hashMap = new Map();
for (let i=0; i<input.length; i++) { //해시맵을 이용하여 자동으로 중복제거
    hashMap.set(input[i], percentage[i]);
}
hashMap.forEach((value, key) => console.log(key, value));



// let result = [];
// for (let i=0; i<input.length; i++) { //나무이름과 분포율 합치기
//     result.push(input[i] + ' ' + percentage[i]);
// }
// const set = new Set(result); //배열의 중복제거
// const answer = [...set]; //다시 배열화
// console.log(answer.join("\n")); //배열의 문자열 요소들을 한줄씩 출력
//시간초과 났음

// https://velog.io/@whzjqkrtm12/%EB%B0%B1%EC%A4%80%EC%97%90%EC%84%9C-nodeJS-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-04-%ED%95%B4%EC%89%AC%EB%A7%B5-Map-Object-Set-18870%EB%B2%88-123123