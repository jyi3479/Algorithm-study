function solution(arr) {
  let result;
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    } else {
      stack.pop();
    }
  }

  result = stack.length ? "NO" : "YES";

  return result;
}

console.log(solution("(())()"));
