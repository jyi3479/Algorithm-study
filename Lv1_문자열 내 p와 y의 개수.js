function solution(s) {
  let count = 0;
  let str = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (str[i] == "p") count++;
    else if (str[i] == "y") count--;
  }

  return count == 0 ? true : false;
}
console.log(solution("aapp"));

// 모든 문자열을 소문자로 변형시킨 뒤, 각 문자열이 p와 같으면 count 증가하고 y와 같으면 감소
// count == 0 이면 true이고 아니면 false

//다른 사람 풀이
/* function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
} */
// p와 y를 구분자로 하여 배열의 길이 비교
