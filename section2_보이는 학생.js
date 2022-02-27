function solution(N, array) {
  let answer = array.reverse().filter((l, idx) => {
    return l > array[idx + 1];
  });

  return answer.length;
}
console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));

// 뒤에서 부터 차례대로 비교하면서 앞에 사람보다 큰 사람만 카운트 -> 실패

function solution(array) {
  let answer = 1;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      answer++;
    }
  }
  return answer;
}
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
