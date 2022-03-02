let input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

// 하루 동안 올라간 높이 a-b
// 마지막 날 도달해야 하는 높이 c-b
console.log(Math.ceil((c - b) / (a - b)));

// console.log(a, b, c);

// var cnt = 1;
// var temp = c - a;

// // 밤이 되기 전 남은 높이가 0보다 큰 지 확인하기
// while (temp > 0) {
//   cnt++;
//   temp += b - a;
// }

// console.log(cnt);
