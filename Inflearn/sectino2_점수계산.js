function solution(array) {
  let answer = 0;
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      score = 0;
    } else {
      score++;
      answer += score;
    }
  }

  return answer;
}
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// score이라는 변수를 두고, 틀리면 0으로 할당해버리고 맞으면 score에 1을 더한다. (연속으로 3번 맞으면 3점 추가할 수 있음)
// 계산된 score를 answer에 더하면 된다.
