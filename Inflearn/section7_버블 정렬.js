// 맨 뒤가 가장 큰 값으로 결정 됨
function solution(arr) {
  // 얕은 복사
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
