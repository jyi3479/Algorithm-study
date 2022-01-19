// #1. 나의 풀이
function solution(n) {
  var answer = 0;
  let temp = String(n)
    .split("")
    .sort((a, b) => b - a);
  answer = temp.reduce((acc, cur) => acc + cur);

  return parseInt(answer);
}

console.log(solution(518349));

/*
- 숫자 n을 문자로 바꾸고 각 글자를 요소로 하는 배열을 만든 뒤, sort를 이용하여 내림차순으로 정렬
- 정렬된 배열을 temp에 넣고, temp를 reduce 사용하여 반복하여 누적으로 합친 문자열을 answer에 넣는다.
- answer 문자열을 parseInt를 사용하여 숫자로 바꾼다.
*/

//#2. 다른 사람의 풀이
/*
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");

  return +newArr;
}


- reduce로 각 글자를 합치는 것 대신, join을 사용하여 바로 합침 -> 이 방법이 좋은 것 같다.

*/

// #3. join 사용해서 다시 수정해보기
function solution(n) {
  let answer = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +answer;
}
