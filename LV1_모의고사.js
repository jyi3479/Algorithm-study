function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각자의 점수 반환해주는 함수 만들기
  const check = (student) => {
    // 반복이 필요한 만큼 찍는 번호를 필요한 만큼 반복하여 temp에 만들기
    let temp = [];
    for (let i = 0; i < Math.ceil(answers.length / student.length); i++) {
      temp.push(...student);
    }
    // 정답 배열과 찍는 번호가 담긴 temp 배열의 각 요소들을 filter로 비교하여 정답만 반환한다.
    // 반환한 배열의 length가 점수이기 때문에 score에 담는다
    let score = answers.filter((l, idx) => {
      return l === temp[idx];
    }).length;

    return score;
  };

  // 각 학생의 score 점수가 담긴 배열 만들기
  let score_list = [check(first), check(second), check(third)];
  // score_list를 map을 사용하여 반복문 돌리기
  // 가장 높은 점수의 학생 번호를 answer 배열에 넣기
  score_list.map((l, idx) => {
    if (l === Math.max(...score_list)) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
