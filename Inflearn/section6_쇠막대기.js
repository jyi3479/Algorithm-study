function solution(arr) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    } else {
      if (arr[i - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

console.log(solution("(((()(()()))(())()))(()())"));
