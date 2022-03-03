// 최종 답
let input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]); // 낮에 올라가는 높이
var b = parseInt(input[1]); // 밤에 미끄러지는 높이
var c = parseInt(input[2]); // 총 올라가야 하는 높이

// 하루 동안 올라간 높이 a-b
// c를 (a-b)로 나누면 마지막 날도 a-b 만큼 올라가는 식이 된다.
// 계속 (a-b)로 나누는 대신, c말고 마지막 날 미끄러지지 않는 경우를 고려하여 c-b를 (a-b)로 나눈다
console.log(Math.ceil((c - b) / (a - b)));

// 1차 시도 (시간 초과)
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log(a, b, c);

var cnt = 0; // 밤을 지나고 나면 cnt +1

while (c > 0) {
  cnt++;
  c = c - a; // 낮
  // 밤이 되기 전에 정상에 올라가면 미끄러지지 않으니까 확인
  if (c > 0) {
    c = c + b; //밤
  }
}
console.log(cnt);

// 2차 시도
let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log(a, b, c);

var cnt = 1;
var temp = c - a;

// 밤이 되기 전 남은 높이가 0보다 큰 지 확인하기
while (temp > 0) {
  cnt++;
  temp += b - a;
}

console.log(cnt);
