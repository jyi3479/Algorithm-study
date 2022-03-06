let input = +require("fs").readFileSync("/dev/stdin").toString();
let temp = input;
let sum;

let cnt = 0;

while (true) {
  cnt++;
  sum = Math.floor(temp / 10) + (temp % 10);
  temp = (temp % 10) * 10 + (sum % 10);
  if (input === temp) {
    break;
  }
}

console.log(cnt);
