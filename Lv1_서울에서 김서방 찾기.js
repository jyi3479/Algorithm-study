// 1차 풀이
function solution(seoul) {
  let index;
  let answer;
  for (i = 0; i < seoul.length; i++) {
    if (seoul[i] == "Kim") index = i;
  }
  answer = `김서방은 ${index}에 있다`;
  return answer;
}

// 2차 풀이 (indexOf 사용)

function solution(seoul) {
  let index;
  let answer;
  index = seoul.indexOf("Kim");
  answer = "김서방은 " + index + "에 있다";
  return answer;
}
