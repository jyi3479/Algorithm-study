// #1. 나의 풀이
function solution(n) {
  var answer = 0;
  let temp = n.toString(3).split("").reverse().join("");
  return parseInt(temp, 3);
}

/*
- num.toString() 메서드 사용해서 3진법으로 표현한 후, 문자로 변환

- 배열로 변환하여 reverse() 사용하여 뒤집고, join('')으로 다시 문자열로 변환

- parseInt( temp, 3)을 이용하여 3진수를 10진수로 변환

*/
