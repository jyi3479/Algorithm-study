// 1차 풀이 (x)
function solution(a, b) {
  var answer = 0;
  answer = a
    .map((elem, index) => elem * b[index])
    .reduce((acc, cur) => acc + cur);

  return answer;
}

// 2차 시도
function solution(a, b) {
  let answer = 0;
  answer = a.reduce((acc, cur, i) => acc + a[i] * b[i], 0);
  return answer;
}

console.log(solution([-1, 0, 1], [1, 0, -1])); //-2

/* 1) reduce()를 이용하는 문제

  <비교해보기>
   answer = a.map((elem, index) => elem * b[index] ).reduce( (acc,cur) => acc+cur); 
   answer = a.reduce( (acc,cur,i) => acc += a[i]*b[i], 0);


    굳이 map()을 쓰지 않고 reduce()만으로 요소끼리의 곱까지 해결 가능 
    */
