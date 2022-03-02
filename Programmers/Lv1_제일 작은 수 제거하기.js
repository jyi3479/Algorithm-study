//#1. 나의 풀이
function solution(arr) {
  let answer = [];
  let min = arr.reduce((acc, cur) => (acc = Math.min(acc, cur))); //배열 속 최솟값 구하기

  if (arr.length == 1) {
    answer.push(-1);
  } else {
    arr.splice(arr.indexOf(min), 1);
    answer = arr;
  }

  return answer;
}

/*
- reduce를 사용하여 두 원소를 누적해서 비교하며 최솟값을 찾는다.
- 입력값 arr 배열의 길이가 1이었다면, -1을 answer에 넣고
- 나머지 경우, 최솟값이 있는 index를 찾아서 제거한 arr을 answer에 넣어준다.
*/

// #2. 다른 사람의 풀이
/*
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

- 위의 풀이와 비슷하지만 더 짧게 표현하였다.
- Math.min(...arr) 처럼 스프레드 문법을 사용하면 reduce를 사용할 필요가 없었다. 
 (reduce 반복 안해도 되니까, 이 방법이 더 나음)
*/
