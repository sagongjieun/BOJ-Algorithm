//브론즈1
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\r\n');

//input[0] = '3'
//input[1] = 'blather reblath'
//input[2] = 'maryland landam'
//input[3] = 'bizarre brazier'

let anagrams = [];
let anagram = [];
const len = parseInt(input[0]); //3

for (let i=1; i<=len; i++) { //input의 index가 1~3이기 때문에 1부터 시작
    anagrams.push(input[i].split(" ")); //배열화 시키기
}
//anagrams = [['blather', 'reblath'], ['maryland', 'landam'], ['bizarre', 'brazier']]

for (let j=0; j<anagrams.length; j++) {
    for (k=0; k<anagrams[j].length; k++) {
        anagram.push(anagrams[j][k].split("").sort().join("")); //문자열 오름차순으로 정렬
    }
}
//anagram = ['abehlrt', 'abehlrt', 'aadlmnry', 'aadlmn', 'abeirrz', 'abeirrz']

let m = 0;
for (let l=0; l<anagram.length; l+=2) {
    if (anagram[l] === anagram[l+1]) { // [0,1], [2,3], [4,5] << 이 index대로 각각 비교하여 일치하면 anagram
        console.log(`${anagrams[m][0]} & ${anagrams[m][1]} are anagrams.`); //출력할때는 원본을 출력해야 하니 anagrams배열에서 가져오기
        m++;
    }
    else {
        console.log(`${anagrams[m][0]} & ${anagrams[m][1]} are NOT anagrams.`);
        m++;
    }
}

// 결과
// blather & reblath are anagrams.
// maryland & landam are NOT anagrams.
// bizarre & brazier are anagrams.  