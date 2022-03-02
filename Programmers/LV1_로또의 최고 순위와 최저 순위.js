// #1. 나의 풀이
function solution(lottos, win_nums) {
  var answer = [];
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let highest = lottos.filter((l) => {
    return win_nums.includes(l) || l === 0;
  }).length;

  let lowest = lottos.filter((l) => {
    return win_nums.includes(l);
  }).length;

  answer.push(rank[highest], rank[lowest]);
  return answer;
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));

/*
- 최고 순위를 알기 위해, 당첨 번호에 포함되는 숫자와 0을 합친 배열만 filter로 반환한 배열의 길이를 당첨 개수로 한다.
- 최저 순위도 마찬가지로, 당첨 번호에 포함되는 숫자만 filter로 반환한 배열의 길이를 당첨 개수로 한다.
- rank라는 일치 개수를 index로 하는 당첨 방식이 반영된 배열을 만들어서 answer에 넣는다.
*/
