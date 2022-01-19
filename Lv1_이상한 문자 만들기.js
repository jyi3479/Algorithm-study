// #1. 1차 시도
function solution(s) {
  var answer = "";
  let temp = s.split(" ");
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      answer += j % 2 == 0 ? temp[i][j].toUpperCase() : temp[i][j];
    }
    if (i == temp.length - 1) break;
    answer += " ";
  }

  return answer;
}

//#2. 2차 시도
function solution(s) {
  var answer = "";
  let temp = s.split(" ");
  answer = temp
    .map((elem) => {
      let str = "";
      for (let i = 0; i < elem.length; i++) {
        str += i % 2 == 0 ? elem[i].toUpperCase() : elem[i].toLowerCase();
      }
      return str;
    })
    .join(" ");

  return answer;
}
/* 
- 공백을 구분자로 하여 문자열을 나누어 배열로 temp에 저장
- map을 사용하여 temp 요소마다 반복하고, 요소 안에서도 글자마다 반복하며 짝수 index는 대문자로 
홀수 index는 소문자로 바꾼다.
- 이렇게 바꾼 것을 join()을 사용하여 공백을 기준으로 다시 결합한다.
*/
