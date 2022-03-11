function solution(s) {
  let answer;
  answer = s.toUpperCase().split("").reverse().join("");

  return answer === s.toUpperCase() ? "YES" : "NO";
}

console.log(solution("gooG"));
