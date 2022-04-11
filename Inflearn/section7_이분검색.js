// 나의 풀이
function solution(target, arr) {
  // 오름차순 정렬
  arr.sort((a, b) => a - b);
  // 이분 검색 초기화
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  // 이분 검색 시작
  while (target !== arr[mid]) {
    if (target < arr[mid]) {
      right = mid - 1;
    } else if (target > arr[mid]) {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return mid + 1;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));

// 인프런 답
function solution2(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution2(32, arr));
