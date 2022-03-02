// #1. 나의 풀이
function solution(n) {
  var answer = 0;
  var sqrt = Math.sqrt(n);
  answer = Number.isInteger(sqrt) ? (sqrt + 1) * (sqrt + 1) : -1;

  return answer;
}

/*
- n이 어떤 양의 정수의 제곱이기 위해서는, n의 제곱근이 정수이어야 한다.
- 이때 이 조건을 만족한다면, 제곱근에 1을 더하여 제곱한 값을 answer에 넣고
- 조건을 만족하지 않는다면, -1을 answer에 넣는다.
*/

//#2. 다른 사람의 풀이
/*
- Math.pow() : 제곱 함수 사용
- swhitch 문 이용해서, n을 제곱근으로 나눈 나머지가 0일 경우 조건을 만족하는 흐름

*/
