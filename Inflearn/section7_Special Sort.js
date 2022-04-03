function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      // 앞이 양수이고, 뒤가 음수이면 순서 바꾸기
      if (arr[j] > 0 && arr[j + 1] < 0) {
        // 구조 분해 할당
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));

function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
