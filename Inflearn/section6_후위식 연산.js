function solution(arr) {
  let stack = [];
  let left;
  let right;

  for (x of arr) {
    if (+x === parseInt(x)) {
      stack.push(x);
    } else {
      right = +stack.pop();
      left = +stack.pop();

      if (x === "+") stack.push(left + right);
      else if (x === "-") stack.push(left - right);
      else if (x === "*") stack.push(left * right);
      else stack.push(left / right);
    }
  }

  return stack[0];
}

console.log(solution("352+*9-"));
