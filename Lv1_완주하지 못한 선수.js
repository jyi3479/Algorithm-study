// #1. 1차 시도 : 동명이인이 있을 경우에 문제가 된다.
function solution(participant, completion) {
  var answer = "";
  answer = participant.filter((name, i) => !completion.includes(name))[0];

  return answer;
}

// #2. 2차 시도 : sort()와 while 문 사용
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let i = 0;
  while (participant[i] == completion[i]) {
    i++;
  }
  return participant[i];
}

/* sort() 사용 : 두 배열 모두 사전편집 순으로 정렬시킨다.
while 사용하여 두 배열의 앞 요소부터 같은지 비교하며 반복
조건이 만족하지 않을 때, while문 종료되며, 이때의 participant의 인덱스를 갖는 요소를 반환

*/

// #3. arr.find() 메서드 사용
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  return participant.find((name, i) => name !== completion[i]);
}

/*조건에 만족하는 요소가 있으면 반환하고, 반복 중단
 filter()와 다름 : 조건에 만족하는 요소를 모두 반환*/
