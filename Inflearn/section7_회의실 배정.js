function solution(arr) {
  // 끝나는 시간을 오름차순으로 정렬 (빨리 끝나야 더 많은 회의를 할 수 있음)
  arr.sort((a, b) => {
    return a[1] - b[1];
  });
  // 끝나는 시간이 가장 빠른 것을 첫번 째 회의로 지정
  let end = arr[0][1];
  let cnt = 1;
  for (let i = 1; i < arr.length; i++) {
    // 앞 회의의 끝나는 시간 이후 시작인 회의라면 가능
    if (arr[i][0] >= end) {
      end = arr[i][1];
      cnt++;
    }
  }

  return cnt;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
