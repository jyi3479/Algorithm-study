let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log(a, b, c);

var cnt = 0;

while (c > 0) {
  cnt++;
  c = c - a;
  if (c > 0) {
    c = c + b;
  }
}
console.log(cnt);
