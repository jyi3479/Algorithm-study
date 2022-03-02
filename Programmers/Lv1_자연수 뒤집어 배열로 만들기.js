//#1. 나의 풀이
function solution(n) {
  let answer = [];
  let temp = String(n).split("");
  for (let i = 0; i < temp.length; i++) {
    answer.unshift(Number(temp[i]));
  }

  return answer;
}

/* 
- 숫자를 문자열로 바꾼 뒤, split을 이용하여 각 글자마다 분리하여 temp 배열에 저장한다.
- for 반복문을 사용하여 각 글자를 answer라는 새로운 배열에 앞으로 추가한다.
- 앞으로 추가하면 처음 추가된 글자가 맨 뒤에 간다. */

// #2. 다른 사람의 풀이
/*
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

*/
/*
- 1의 자리 숫자를 arr에 집어넣고, 내림함수 floor를 사용하여 일의자리 숫자 제거
- 두번째 자리 숫자를 arr에 집어넣고, 내림함수를 사용하여 두번째자리 숫자 제거 
- n이 0이되기 전까지 계속 이를 반복하면, 각 자리 숫자들이 arr 배열에 추가된다.*/

//#3. reverse() 사용하는 방법
