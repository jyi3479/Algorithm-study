// 1차 시도
// function solution(s) {
//   let answer = false;
//   if (s.length==4 || s.length==6){ answer = !isNaN(Number(s))} ;
//   return answer

// } // 길이가 4나 6인 공백 입력하면 true 뜸..
// console.log(solution("3.14")); //true

function solution(s) {
  var answer = false;
  let temp = parseInt(s);
  if (s.length == 4 || s.length == 6) {
    answer = temp == s ? true : false;
  }

  return answer;
}

console.log(solution("0012"));
