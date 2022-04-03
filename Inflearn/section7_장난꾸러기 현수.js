// 나의 풀이
function solution(size, arr) {
  let large = null;
  let small = null;
  for (let i = 0; i < size - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      if (large !== null) {
        small = i + 1;
      } else {
        large = i;
      }
    }
  }

  return [large + 1, small + 1];
}

console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));

// 인프런 답
function solution2(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    // 잘 정렬된 배열과 비교하여 다른 값을 갖는 index+1을 answer에 넣기
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}
