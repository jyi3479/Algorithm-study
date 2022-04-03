// 나의 풀이
function solution(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        arr[j + 1] = temp;
        break;
      }
      if (j === 0) {
        arr[j] = temp;
      }
    }
  }
  return answer;
}

// 인프런 답
function solution2(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // 중간에 끊긴 곳 앞에 temp 삽입 + 0까지 돌면 j가 -1이 되면서 for문 끝나니까 arr[0]에 temp 삽입
    arr[j + 1] = temp;
  }

  return answer;
}
