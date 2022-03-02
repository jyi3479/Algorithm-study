// #1. 나의 풀이

function solution(arr) {
  var answer = [];
  answer = arr.filter((l, idx) => l !== arr[idx + 1]);
  return answer;
}

// filter 메서드를 사용하여 다음 요쇼와 값이 다른 요소만을 반환한다.

//#2. 다른 사람의 풀이
// 다음 요소와 값이 다른 요소는(if 문 사용) 새로운 배열에 push로 넣기
