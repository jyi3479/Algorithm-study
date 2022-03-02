// #1. 나의 풀이
function solution(num) {
  var answer = -1;
  for (let i = 0; i < 500; i++) {
    if (num == 1) {
      answer = i;
      break;
    }
    num = num % 2 == 0 ? num / 2 : num * 3 + 1;
  }
  return answer;
}

console.log(solution(1));

/*
- for 반복문을 사용하여, 최대 500번까지 반복할 수 있도록 하였다.
- for 반복을 하기 전, num이 1인지 먼저 확인한다. 
(i를 0부터 시작했기 때문에, 몇 번 반복햇는지 알려면 i++ 한번 더 실행 후 answer에 넣어야 함)
- 밑에는 문제에서 주어진 조건을 삼항 조건 연산자를 사용하여 num 값을 반복해서 갱신하도록 했다.
- 처음 answer 초기화를 -1로 했기 때문에, 500번 작업동안 num==1이 안되면 자동으로 -1이 나옴
*/

//#2. 다른 사람의 풀이
/*
- 재귀함수 사용
- while 문 사용
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
    answer++;
  }
    return num == 1 ? answer : -1;
}

- num이 1인지와 반복 횟수가 500인지 두 조건을 while문 조건에 or 연산자로 넣음
- 둘 중 하나의 조건이라도 만족하면, while 문 종료된다.
- 이때 num이 1이여서 종료된 것이면 반복 횟수인 answer를 반환하고, 
- 작업 횟수가 500번이어서 종료된 것이면 -1을 반환


*/
