let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

// 하루 동안 올라간 높이 a-b
// 마지막 날 도달해야 하는 높이 c-b
console.log(Math.ceil((c - b) / (a - b)));
