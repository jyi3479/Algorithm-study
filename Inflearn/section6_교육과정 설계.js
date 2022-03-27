function solution(N, K) {
  let queue = N.split("");
  let answer;
  for (x of K) {
    if (queue.includes(x)) {
      if (x === queue[0]) {
        queue.shift();
      } else {
        answer = "NO";
        break;
      }
    }

    if (!queue.length) {
      answer = "YES";
      break;
    }
  }

  if (queue.length) {
    answer = "NO";
  }

  return answer;
}

console.log(solution("CBA", "CBDAGE"));
