// 맨 앞이 가장 최솟값으로 결정됨

function solution(arr) {
  // 얕은 복사
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    // 최소값의 위치를 idx에 저장해야 함
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    // 구조 분해 할당 (i 뒤에 있는 애들 중에서 최솟값(최종 idx번째 요소)이랑 i번째 요소랑 바꾼다.)
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
