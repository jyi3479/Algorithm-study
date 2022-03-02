// #1. 나의 풀이
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(numbers[i] + numbers[j]))
        answer.push(numbers[i] + numbers[j]);
    }
  }

  return answer.sort((a, b) => a - b);
}

/*
- numbers 배열 안에서 서로 다른 인덱스에 있는 두 개의 수를 모두 더해보면서,
- answer 라는 새로운 배열에 계속 추가한다.
- 단, answer에 추가된 요소 중 같은 값이 있다면 추가하지 않는다. (includes 사용)
*/

//#2. 다른 사람의 풀이
/*
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}


- Set 사용 : 중복을 허용하지 않는 값을 모아놓은 컬렉션
- new Set(iterable) : 셋을 만든다. 이터러블 객체를 전달받으면 그 안의 값을 복사해
 셋에 넣어준다.
 - spread 문법을 사용하여 셋의 값들을 배열의 요소로 answer에 들어가게 한다.
*/
