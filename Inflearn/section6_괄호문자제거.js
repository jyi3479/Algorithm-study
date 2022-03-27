function solution(arr) {
  let result;
  let stack = [];

  for (x of arr) {
    if (x === ")") {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(x);
    }
  }
  result = stack.join("");

  return result;
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
