// #1. 나의 풀이
function solution(x) {
  let divisor = String(x)
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  return x % divisor == 0 ? true : false;
}

console.log(solution(1));

/*
- x의 자릿 수 합을 divisor 변수로 선언하고, 
- x를 문자열로 만들어 분리한 뒤 배열로 만든다.
- 이 배열을 reduce를 사용하여 반복하며 숫자로 만들어 누적 합계를 구한다.
- x를 x의 자릿 수 합으로 나누었을 때, 0이면 true, 아니면 false 가 나오게 한다.
*/

//#1-1. parseInt 대신 산술연산자 이용해서 숫자형으로 변환
function solution(x) {
  let divisor = String(x)
    .split("")
    .reduce((acc, cur) => +acc + +cur);

  return x % divisor == 0 ? true : false;
}

//#2. 다른 사람의 풀이
/*
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

- 나머지가 있으면 true이니까 not 연산자 ! 사용해서 바꿔줌

*/
