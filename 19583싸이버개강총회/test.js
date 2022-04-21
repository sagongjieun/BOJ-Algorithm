//실버4 싸이버개강총회
//https://www.acmicpc.net/problem/19583
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [times, ...attendances] = input;
let [S, E, Q] = times.split(" ").map((time) => time.split(":").join(""));
let set = new Set();
let answer = 0;

for (let attendance of attendances) {
  let [time, name] = attendance.split(" ");

  time = time.split(":").join("");

  if (time <= S) set.add(name);
  else if (set.has(name) && time >= E && time <= Q) {
    answer++;
    set.delete(name);
  }
}

console.log(answer);
