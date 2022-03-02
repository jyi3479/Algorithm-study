function solution(N, array) {
  let answer = array.filter((l, idx) => {
    return l > array[idx - 1];
  });
  answer.unshift(array[0]);

  return answer;
}
console.log(solution(6, [7, 3, 9, 5, 6, 12]));

// filter 메서드를 이용하여 앞에 숫자보다 큰 수들만 추출 + 맨 앞 숫자도 unshift를 이용하여 넣어준다.

// 인프런 답안 코드
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
