const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10
1
3
5
4
0
0
7
0
0
6`
).split("\n");

// console.log(stdin);
let a = stdin.length;
let arr = [];
let result = 0;
for (let i = 1; i < a; i++) {
  if (+stdin[i] === 0) {
    arr.splice(-1);
  } else {
    arr.push(+stdin[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log(result);

// console.log([1, 2].reduce((a, b) => a + b));

// let line = input();
// let arr = [];
// let temp;

// while (line) {
//   temp = +input();
//   if (temp) {
//     arr.push(temp);
//   } else {
//     arr.pop();
//   }

//   line--;
// }

// console.log(arr);
