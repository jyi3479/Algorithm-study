function solution(size, arr) {
  let answer = [];
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    if (answer.includes(temp)) {
      for (j = arr.indexOf(temp) - 1; j >= 0; j--) {
        answer[j + 1] = answer[j];
      }
      answer[0] = temp;
    } else {
      if (answer.length === size) {
        answer.pop();
        cnt--;
      }
      for (j = cnt - 1; j >= 0; j--) {
        answer[j + 1] = answer[j];
      }
      answer[0] = temp;
      cnt++;
    }
  }

  return answer;
}

function solution2(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    // answer에 x가 있는지 찾기
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      // 1) Cache Miss (없으면)
      for (let i = size - 1; i >= 1; i--) {
        // 모든 요소들이 다 뒤로 가기 (마지막 요소는 자연스레 사라짐)
        answer[i] = answer[i - 1];
      }
    } else {
      // 2) Cache Hit (있으면)
      for (let i = pos; i >= 1; i--) {
        // 해당 위치 이전 요소들이 모두 뒤로 가고, 해당 요소는 맨 앞으로
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}
