let input = require("fs").readFileSync("example.txt").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(typeof a);
var count = 0;

while (a > 0) {
  if (a % 5 === 0) {
    a = a - 5;
    count++;
  } else if (a % 3 === 0) {
    a = a - 5;
    count++;
  } else if (a > 5) {
    a = a - 5;
    count++;
  } else {
    count = -1;
    break;
  }
}
console.log(count);
