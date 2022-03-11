const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let line = input();
let arr = [];
let temp;

while (line) {
  temp = input();
  switch (temp) {
    case "pop":
      console.log(arr[0] ? arr.pop() : -1);
      break;
    case "size":
      console.log(arr.length);
      break;
    case "empty":
      console.log(arr[0] ? 0 : 1);
      break;
    case "top":
      console.log(arr[0] ? arr[arr.length - 1] : -1);
      break;
    default:
      arr.push(temp.split(" ")[1]);
      break;
  }

  line--;
}

const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const stack = [];
const result = [];

const len = array.shift();

for (let i = 0; i < len; i++) {
  switch (array[i]) {
    case "pop":
      result.push(stack.pop() || -1);
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;

    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(array[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
