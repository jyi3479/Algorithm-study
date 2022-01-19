// #1. 나의 풀이
function solution(n) {
  let temp = String(n).split("");

  return temp.reduce((acc, cur) => acc + parseInt(cur), 0);
}

/*
- 숫자의 각 자릿수를 문자열로 배열에 저장

- reduce를 이용하여 반복하면서 각 요소를 숫자로 다시 바꿔서 누적 합계 구하기

** acc 초깃값 0으로 안했다가 오류났었음. 초깃값 안하면 acc가 처음부터 첫번째 자리의 수를 문자열로 받기 때문.


*/

//#2. 다른 사람의 풀이
/*
function solution(n){
var sum = 0;

    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);

    return sum;
}

- n이 1234 라면, 

첫번째 : sum에 일의 자리 숫자인 4가 들어간다. n은 Math.floor(123.4) 내림 함수를 이용해서 123이 된다.

두번째 : sum에 현재 n의 일의 자리 숫자인 3이 누적으로 합해져 들어가고, 내림 함수로 12가 된다.

이러한 과정이 반복되면 sum에 각 자릿수의 합이 도출된다.

*/
